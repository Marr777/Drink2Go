import '../vendor/nouislider/nouislider.js';

const slider = document.querySelector('.slider__range');

const createSlider = () => {
  noUiSlider.create(slider, {
    range: {
      min: 0,
      max: 123,
    },
    start: [3, 106],
    connect: true,

    cssPrefix: 'slider__',
  });
}

export {createSlider};
