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

let map, mapEvent;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    console.log(position);
    const {
      latitude,
      longitude
    } = position.coords;
    console.log(`latitude:${latitude},longitude:${longitude}`);

    const coords = [latitude, longitude];
    map = L.map('map').setView(coords, 13);
    // console.log(map);

    // 瓦片 开放街道地图，这里的url可以改变地图外观
    // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);

    L.tileLayer(
      'https://api.mapbox.com/styles/v1/kengqiangxia/cj5jbah540hlj2rpgh3xptiek/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2VuZ3FpYW5neGlhIiwiYSI6ImNqNWpiMWZ5ZTIxYzgyd3BrYTN2NDN5aXEifQ.bqY03lR_2LZ0fttPOJ4jyw', {
        attribution: '铿锵侠leaflet教程, Imagery &copy; <a href="http://mapbox.com">Mapbox</a>',
      }).addTo(map);

    // Handling clicks on map
    map.on("click", function (mapE) {
      mapEvent = mapE;
      console.log(mapEvent);
      form.classList.remove("hidden");
      inputDistance.focus();

      // const {
      //   lat,
      //   lng
      // } = mapEvent.latlng;

      // L.marker([lat, lng]).addTo(map)
      //   .bindPopup(L.popup({
      //     maxWidth: 250,
      //     minWidth: 250,
      //     autoClose: false,
      //     closeOnClick: false,
      //     className: "running-popup",
      //   })) //弹出窗口绑定标记
      //   .setPopupContent("Workout")
      //   .openPopup();
    })


  }, function () {
    alert("Could not get your position")
  });


  form.addEventListener("submit", function (e) {
    //表单提交了会刷新页面
    e.preventDefault();

    //Clear input fields
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = "";


    //Display marker
    const {
      lat,
      lng
    } = mapEvent.latlng;

    L.marker([lat, lng]).addTo(map)
      .bindPopup(L.popup({
        maxWidth: 250,
        minWidth: 250,
        autoClose: false,
        closeOnClick: false,
        className: "running-popup",
      })) //弹出窗口绑定标记
      .setPopupContent("Workout")
      .openPopup();
  });

  inputType.addEventListener("change", function () {
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
  })






}