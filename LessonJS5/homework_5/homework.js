console.table(countries);

/* Домашка
1. Отрендерить таблицу стран. в таблицу должны войти поля: name, capital, region, area
2. добавить поисковик (по примеру с занятия), событие на него
3. по событию искать частичные совпадения введенного текста с полями name, capital, region. выдавать полученные результаты в таблицу
4. если нет результатов - показывать соответствующую строку "не найдено" в результатах поиска
*/
let inputValue = document.getElementById("search");

function filtredCountries() {
    let filtredCountrys = countries.filter(function (country) {
        let searchValue = inputValue.value.toLowerCase().trim();
        // if (country.name.toLowerCase().trim().includes(searchValue)) {
        //     return country.name.toLowerCase().trim().includes(searchValue);
        // } else if (country.region.toLowerCase().trim().includes(searchValue)) {
        //     return country.region.toLowerCase().trim().includes(searchValue);
        // } else if (country.capital.toLowerCase().trim().includes(searchValue)) {
        //     return country.capital.toLowerCase().trim().includes(searchValue);
        // }
        let countryName = country.name.toLowerCase().trim();
        let countryRegion = country.region.toLowerCase().trim();
        let countryCapital = country.capital.toLowerCase().trim();
        return (
            countryName.includes(searchValue) ||
            countryRegion.includes(searchValue) ||
            countryCapital.includes(searchValue)
        );
    });
    htmlCountrys(filtredCountrys);
}

function htmlCountrys(countrys) {
    console.log(countrys);

    document.querySelector(".table tbody").innerHTML = countrys[0]
        ? countrys.reduce(function (htmlStr, country) {
              htmlStr += `<tr>
                    <td>${country.name}</td>
                    <td>${country.capital}</td>
                    <td>${country.region}</td>
                    <td>${country.area}</td>
                </tr>`;
              return htmlStr;
          }, "")
        : `<tr><td colspan = '4 ' class='text-center'>No matches Found</td></tr>`;
}

document.querySelector("button").onclick = filtredCountries;
htmlCountrys(countries);
