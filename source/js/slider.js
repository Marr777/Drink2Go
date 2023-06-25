import '../vendor/nouislider/nouislider.js';

const slider = document.querySelector('.slider__range');
const minField = document.querySelector('.slider__input--min');
const maxField = document.querySelector('.slider__input--max');

const createSlider = () => {
  noUiSlider.create(slider, {
    range: {
      min: 0,
      max: 123,
    },
    start: [0, 123],
    step: 1,
    connect: true,

    cssPrefix: 'slider__',
  });

  slider.noUiSlider.on('update', () => {
    minField.value = parseInt(slider.noUiSlider.get()[0]);
    maxField.value = parseInt(slider.noUiSlider.get()[1]);
  });
}

export {createSlider};
