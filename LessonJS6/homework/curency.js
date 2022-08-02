let currencyArray = [];
let tbody = document.querySelector(".table tbody");
let filteredCurrency = [];
let inputValue = document.getElementById("search");

document.querySelector(".container .load").onclick = function (e) {
    inputValue.value = "";
    let chooseDate = document
        .querySelector(".container .choosedate")
        .value.split("")
        .filter(function (date) {
            return date != "-";
        })
        .join("");
    let access = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${chooseDate}&json`;
    // console.log(chooseDate);
    // if (access.includes(chooseDate)) {
    //     console.log("ooooo");
    // }
    // console.log(access);

    fetch(access)
        .then(function (data) {
            return data.json();
        })
        .then(function (data) {
            currencyArray = data.map(function (currency) {
                return {
                    shortName: currency.cc,
                    rate: currency.rate,
                    fullName: currency.txt,
                    date: currency.exchangedate,
                };
            });

            renderTable(currencyArray);
            document.querySelector(".container .search").onclick = function (
                event
            ) {
                currencyFilter(currencyArray, inputValue);
            };
        });
};
console.log(currencyArray);

let currencyFilter = function (currencyArray, inputValue) {
    let searchValue = inputValue.value.toLowerCase();
    filteredCurrency = currencyArray.filter(function (currency) {
        let shortName = currency.shortName.toLowerCase().trim();
        let fullName = currency.fullName.toLowerCase().trim();
        return (
            shortName.includes(searchValue) || fullName.includes(searchValue)
        );
    });
    console.log(filteredCurrency);
    renderTable(filteredCurrency);
};

function renderTable(currencyArray) {
    let htmlStr = currencyArray.reduce(function (acc, currency) {
        return (acc += `<tr>
                            <td>${currency.shortName}</td>
                            <td>${currency.rate}</td>
                            <td>${currency.fullName}</td>
                            <td>${currency.date}</td>
                        </tr>`);
    }, "");
    tbody.innerHTML = htmlStr
        ? htmlStr
        : `<tr>
    <td colspan='4'>Not Found Match</td>
</tr>`;
}
