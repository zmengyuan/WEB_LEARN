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

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};
// const getCountryData = function (country) {
//   fetch('https://api.country.is')
//     .then(
//       response => {
//         console.log(response);
//         // 404的时候，Promise还是会正常执行，只是返回404，所以需要手动处理
//         if (!response.ok)
//           throw new Error(`Country not found (${response.status})`);

//         return response.json();
//       }
//       // ,err => alert(err)
//     )
//     .then(data => {
//       console.log(data);
//       const neighbour = true;
//       if (!neighbour) {
//         return;
//       }
//       return fetch('https://api.country.is');
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => {
//       console.error(`${err} `);
//       renderError(`Something went wrong  ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
/*
const getCountryData = function (country) {
  getJSON('https://api.country.is')
    .then(data => {
      console.log(data);
      const neighbour = true;
      if (!neighbour) throw new Error('No neighbour found!');
      return getJSON('https://api.country.is');
    })
    .then(data => console.log(data))
    .catch(err => {
      console.error(`${err} `);
      renderError(`Something went wrong  ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
btn.addEventListener('click', function () {
  getCountryData('australia');
});
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 
*/
/*
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/api/${lat},${lng}?geoit=json`)
    .then(response => {
      // 判断response
      if (!response.ok) {
        throw new Error(`Problem with geocoding ${res.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => {
      console.log(err);
    });
};
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
*/

///////////////////////////////////////
// The Event Loop in Practice
/*
// timer会最后执行！！
console.log('Test start');
setTimeout(() => {
  console.log('0 sec timer');
}, 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 10000000; i++) {}
  console.log(res);
});
console.log('Test end');
*/

///////////////////////////////////////
// Building a Simple Promise
/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery is happening');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You win');
    } else {
      reject(new Error('You lost your money'));
    }
  }, 2000);
});
lotteryPromise.then(res => console.log(res)).catch(err => console.errpr(err));
// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 second passed');
    return wait(1);
  })
  .then(() => console.log('4 second passed'));

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));
*/

///////////////////////////////////////
// Promisifying the Geolocation API
// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.log(err)
// );
/*
console.log('Getting position');

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 馃挜`));
};
btn.addEventListener('click', whereAmI);
*/

// 261 challenge 2
/*
const imgContainer = document.querySelector('.images');
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};
let currentImg;
createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loader');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loader');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => {
    console.error(err);
  });
  */

//  262
/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const whereAmI = async function (country) {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    console.log(resGeo);
    // 因为出现403 404等错误的时候，promise不会拒绝，所以要手动处理
    if (!resGeo.ok) {
      throw new Error('Problem getting location data');
    }
    const dataGeo = resGeo.json();
    console.log(dataGeo);

    // fetch('').then(res => console.log(res));

    const res = await fetch(`https://api.country.is`);
    console.log(res);
    if (!res.ok) {
      throw new Error('Problem getting country');
    }
    const data = await res.json();
    console.log(data);
    return `you are in ${dataGeo.city}`;
  } catch (err) {
    console.error(err);

    //reject promise returned from async function
    throw err;
  }
};
console.log('1 Will get location');
// const city = whereAmI('');
// console.log(city);

// whereAmI()
//   .then(city => {
//     console.log(`2 ${city}`);
//   })
//   .catch(err => console.error(`2 ${err.message}===`))
//   .finally(() => {
//     console.log('3 Finish geting location');
//   });

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2 ${city}`);
  } catch (err) {
    console.log(`2 ${err.message}`);
  }
  console.log(`3 finish`);
})();

// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err.message);
// }
*/

// 265
const get3Countries = async function (c1, c2, c3) {
  try {
    const data1 = await getJSON('https://api.country.is');
    const data2 = await getJSON('https://api.country.is');
    const data3 = await getJSON('https://api.country.is');
    console.log([data1.ip, data2.ip, data3.ip]);

    const data = Promise.all([
      getJSON('https://api.country.is'),
      getJSON('https://api.country.is'),
      getJSON('https://api.country.is'),
    ]);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
get3Countries();
