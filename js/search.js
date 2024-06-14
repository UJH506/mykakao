const $input = document.querySelector('input');
const $keypad = document.querySelector('footer');

$input.addEventListener('focus', ()=>{
  // input에 포커스됏을때 키패드띄움
  $keypad.setAttribute('style', 'bottom:0px');
});

$input.addEventListener('blur', ()=>{
  // input에 포커스풀리면 키패드없앰
  $keypad.setAttribute('style', 'bottom:-300px');
});
