function Country({country}) {
  return <tr>
    <td>{country.name}</td>
    <td>{country.capital || '---'}</td>
    <td>{country.region}</td>
    <td>{country.population || 0}</td>
    <td>{country.area || 0}</td>
  </tr>
}

export default Country;