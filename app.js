// https://www.omnicalculator.com/everyday-life/flight-radiation

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const doseRadio = document.getElementById('doseRadio');
const timeofflightRadio = document.getElementById('timeofflightRadio');

let dose;
let timeofflight = v; 

// labels of the inpust
const variable = document.getElementById('variable');

doseRadio.addEventListener('click', function() {
  variable.textContent = 'Time of flight';
  timeofflight = v;
  result.textContent = '';
});

timeofflightRadio.addEventListener('click', function() {
  variable.textContent = 'Dose';
  dose = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(doseRadio.checked)
    result.textContent = `Dose = ${computedose().toFixed(5)}`;

  else if(timeofflightRadio.checked)
    result.textContent = `Time of flight = ${computetimeofflight().toFixed(5)}`;
})

// calculation

function computedose() {
  return Number(timeofflight.value) * 0.003;
}

function computetimeofflight() {
  return Number(dose.value) / 0.003;
}