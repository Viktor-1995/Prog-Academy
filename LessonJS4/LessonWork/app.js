console.table(rates);

var innerHtml = rates.reduce(function (htmlStr, rate) {
    htmlStr += `<tr>
            <td>${rate.txt}</td>
            <td>${rate.rate}</td>
            <td>${rate.cc}</td>
                </tr>`;
    return htmlStr;
}, "");
console.log(innerHtml);
document.querySelector(".rates tbody").innerHTML = innerHtml;
