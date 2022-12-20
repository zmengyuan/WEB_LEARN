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

class App {
  #map;
  #mapEvent;

  constructor() {
    this._getPosition();
    // 如果这里不bind this,那_newWorkout的this就是form元素了
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
  }
  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
    }
  }

  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    const coords = [latitude, longitude];

    console.log(this); //因为这里其实是在回调函数中的，就相当于普通函数，this是undefined，所以需要在外面绑定

    this.#map = L.map('map').setView(coords, 13);
    L.tileLayer(
      'https://api.mapbox.com/styles/v1/kengqiangxia/cj5jbah540hlj2rpgh3xptiek/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2VuZ3FpYW5neGlhIiwiYSI6ImNqNWpiMWZ5ZTIxYzgyd3BrYTN2NDN5aXEifQ.bqY03lR_2LZ0fttPOJ4jyw',
      {
        attribution:
          '铿锵侠leaflet教程, Imagery &copy; <a href="http://mapbox.com">Mapbox</a>',
      }
    ).addTo(this.#map);

    // Handling clicks on map
    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;

    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    //表单提交了会刷新页面
    e.preventDefault();

    //Clear input fields
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value =
      '';

    //Display marker
    const { lat, lng } = this.#mapEvent.latlng;

    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 250,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup',
        })
      ) //弹出窗口绑定标记
      .setPopupContent('Workout')
      .openPopup();
  }
}

const app = new App();
