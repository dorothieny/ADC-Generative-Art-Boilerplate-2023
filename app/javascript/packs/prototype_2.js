let oscillator
let audioCtx
audioCtx = new(window.AudioContext || window.webkitAudioContext)();


function changeOscillatorFrequency(value) {
  oscillator.frequency.setValueAtTime(value, audioCtx.currentTime); // value in hertz
}

function createOscillator() {
  // create web audio api context
  const selector = document.getElementsByTagName('select')[0]

  // create Oscillator node
  oscillator = audioCtx.createOscillator();

  oscillator.type = selector.value;
  oscillator.frequency.setValueAtTime(slider.value, audioCtx.currentTime); // value in hertz
  oscillator.connect(audioCtx.destination);
  oscillator.start();
  
}

function createSlider() {
  const container = document.getElementById('prototype_2')
  const slider = document.createElement('input')
  slider.type = 'range'
  slider.min = 0;
  slider.max = 1000;
  slider.value = 440;
  slider.id = 'slider';
  container.appendChild(slider);
  slider.addEventListener('input', () => changeOscillatorFrequency(slider.value))
}

function changeType(value){
  oscillator.type = value;
}

function createRadioBtns(){
  const container = document.getElementById('prototype_2')
  const selector = document.createElement('select')
  selector.id = "mySelect";
  container.appendChild(selector);

  const array = ["sine", "triangle", "sawtooth", "square"]
  
  for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.value = array[i];
    option.text = array[i];
    selector.appendChild(option);
}
 selector.addEventListener('change', () => changeType(selector.value))

}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('prototype_2')
  const frame = document.createElement('div')
  frame.innerText = 'Art Design & Coding Community'
  frame.classList.add('frame')
  container.appendChild(frame)

  createRadioBtns();
  createSlider();
  frame.addEventListener('click', () => createOscillator())
  
})