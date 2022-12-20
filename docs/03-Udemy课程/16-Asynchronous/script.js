'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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
