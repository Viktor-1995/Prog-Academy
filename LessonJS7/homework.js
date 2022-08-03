let rates = [];

function setListeners() {
    for(let item of document.querySelectorAll('[data-attr]')) {
        item.onclick = function(e) {
            let key = e.currentTarget.getAttribute('data-attr');
            let isSorted = e.currentTarget.getAttribute('data-sorted');

            let sortedRates = rates.sort(function(a, b) {
                if(isSorted){
                    return a[key] > b[key] ? -1 : 1;
                }
                return a[key] > b[key] ? 1 : -1;
            });

            if(isSorted) {
                e.currentTarget.removeAttribute('data-sorted');
            } else {
                e.currentTarget.setAttribute('data-sorted', '+');
            }


            renderRates(sortedRates);
        }
    }
}

function renderRates(currencies) {
    let htmlStr = currencies.reduce(function(acc, el, index) {
        return acc + `<tr><td>${index + 1}</td><td>${el.txt}</td><td>${el.rate.toFixed(2)}</td><td>${el.cc}</td></tr>`;
    }, '');
    document.querySelector('table tbody').innerHTML = htmlStr;

    setListeners();
}

function getRates(date) {
    fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${date}&json`).then(function(data) {
        return data.json();
    }).then(function(data) {
        rates = data;
        renderRates(rates);
    })
}

function init() {
    let backupDate = localStorage.getItem('selectedDate');
    let value = '';
    if(backupDate) {
        value = backupDate;
    } else {
        let currentDate = new Date();
        let days = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        value = `${year}-${month < 10 ? '0'+ month : month}-${days < 10 ? '0'+ days : days}`;
    }
    document.querySelector('.select-date').value = value;
    // const change = new Event('change');
    // document.querySelector('.select-date').dispatchEvent(change);
    getRates(value.split('-').join(''));
}

window.onload = function() {
    let inputDate = document.createElement('input');
    inputDate.className = 'form-control mb-3 select-date';
    inputDate.setAttribute('type', 'date');
    document.querySelector('.container').prepend(inputDate);

    init();

    document.querySelector('.select-date').onchange = function(e) {
        let value = e.currentTarget.value.split('-').join('');
        localStorage.setItem('selectedDate', e.currentTarget.value);
        getRates(value);
    }
}
