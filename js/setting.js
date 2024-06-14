const $friendrefresh = document.querySelector('.friendrefresh');
const $refreshBtn = document.querySelector('ul>li>a>span>i[class="fa-solid fa-rotate"]');

let clickcount = 0;

$friendrefresh.addEventListener('click', ()=>{
  // $refreshBtn.parentElement.setAttribute('class', 'refresh');
  clickcount++;
  if(true) {
    $refreshBtn.style.transform = `rotate(${clickcount * 360}deg)` ;
  }

})