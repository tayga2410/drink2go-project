var slider = document.getElementById('range-slider');

if (slider) {
noUiSlider.create(slider, {
    start: [0, 900],
    connect: true,
    step: 0.5,
    range: {
        'min': [0],
        'max': [1000]
    }
});
}

const input0 = document.getElementById('input-0');
const input1 = document.getElementById('input-1');

const inputs = [input0, input1]

slider.noUiSlider.on('update', function(values, handle){
  inputs[handle].value = Math.round(values[handle]);
});


var inputElement = document.getElementById('input-0');
inputElement.style.color = 'grey';
inputElement.addEventListener('input', function() {
    if (inputElement.value.trim() !== '') {
        inputElement.style.color = 'black';
    } else {
        inputElement.style.color = 'grey';
    }
});