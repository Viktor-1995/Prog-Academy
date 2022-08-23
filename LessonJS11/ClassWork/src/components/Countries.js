import { useEffect, useState } from "react";
import Country from "./Country";
import { Table } from "react-bootstrap";
import SearchInCountries from "./SearchInCountries";

function Countries() {
    const [countries, setCountries] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v2/all")
            .then((res) => res.json())
            .then((data) => {
                setCountries(data);
            });
    }, []);
    // console.log(countries);
    function search(e) {
        let value = e.target.value.toLowerCase();
        setSearchValue(value);
        setFilteredCountries(
            countries.filter((country) => {
                return (
                    country.name.toLowerCase().includes(value) ||
                    country.capital?.toLowerCase()?.includes(value) ||
                    country.region?.toLowerCase()?.includes(value)
                );
            })
        );
    }

    return (
        <div className="container bg-white mx-auto p-3">
            <h2>Countries</h2>
            <SearchInCountries search={search} />
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Capital</th>
                        <th>Region</th>
                        <th>Population</th>
                        <th>Area</th>
                    </tr>
                </thead>
                <tbody>
                    {(searchValue ? filteredCountries : countries).map(
                        (country) => (
                            <Country key={country.name} country={country} />
                        )
                    )}
                    {searchValue && !filteredCountries.length ? (
                        <tr>
                            <td colSpan={5} className={"text-center"}>
                                Not Found
                            </td>
                        </tr>
                    ) : (
                        ""
                    )}
                </tbody>
            </Table>
        </div>
    );
}

export default Countries;
