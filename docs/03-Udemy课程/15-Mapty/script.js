'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    console.log(position);
    const {
      latitude,
      longitude
    } = position.coords;
    console.log(`latitude:${latitude},longitude:${longitude}`);

    const coords = [latitude, longitude];
    const map = L.map('map').setView(coords, 13);
    // 瓦片 开放街道地图，这里的url可以改变地图外观
    // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);

    L.tileLayer(
      'https://api.mapbox.com/styles/v1/kengqiangxia/cj5jbah540hlj2rpgh3xptiek/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2VuZ3FpYW5neGlhIiwiYSI6ImNqNWpiMWZ5ZTIxYzgyd3BrYTN2NDN5aXEifQ.bqY03lR_2LZ0fttPOJ4jyw', {
        attribution: '铿锵侠leaflet教程, Imagery &copy; <a href="http://mapbox.com">Mapbox</a>',
      }).addTo(map);

    L.marker(coords).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();

  }, function () {
    alert("Could not get your position")
  });
}