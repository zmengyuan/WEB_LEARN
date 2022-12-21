'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
/*
///////////////////////////////////////
// Our First AJAX Call: XMLHttpRequest

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  // 这个API访问失败了
  request.open('GET', 'https://api.countrystatecity.in/v1/countries');
  request.setRequestHeader('X-CSCAPI-KEY', 'API_KEY');
  // 因为是异步的，所以我们不能定义一个变量来接收，而只能注册一个回调函数
  request.send();
  // request一旦获取完毕，就会触发load事件
  request.addEventListener('load', function () {
    console.log(this.responseText);
    const data = JSON.parse(this.responseText);
    console.log(data);

    const html = `
    <article class="country">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>a</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>c</span>${data.languages[0].name}</p>
        <p class="country__row"><span>b</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

// 因为是异步，所以不确定下面三个发送哪个先返回
getCountryData('portugal');
getCountryData('usa');
getCountryData('germany');
*/
/*
///////////////////////////////////////
// Welcome to Callback Hell
const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>馃懌</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>馃棧锔?/span>${data.languages[0].name}</p>
      <p class="country__row"><span>馃挵</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('portugal');
getCountryAndNeighbour('usa');
*/

///////////////////////////////////////
// Consuming Promises
// Chaining Promises
// Handling Rejected Promises
// Throwing Errors Manually

// const request = fetch('https://restcountries.eu/rest/v2/name/');
// console.log(request); //Promise

// const getCountryData = function (country) {
//   // fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//   fetch('https://api.country.is')
//     .then(function (response) {
//       console.log(response);
//       // response.json()也是一个异步，返回一个Promise
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// };

const getCountryData = function (country) {
  fetch('https://api.country.is')
    .then(response => response.json())
    .then(data => console.log(data));
};
getCountryData('australia');
