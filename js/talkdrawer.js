const $headerScroll = document.querySelector('.header-bottom>span');
const $headerListItem = document.querySelector('.header-bottom>ul>li');


// ul>li의 밑줄이 늘렷다줄여도 계속 li와 동일한 길이를 갖도록 width값을 동적으로 줌
let itemWidth = $headerListItem.offsetWidth;

window.addEventListener('DOMContentLoaded', function() {
  itemWidth = $headerListItem.offsetWidth;
  $headerScroll.style.width = `${itemWidth}px`;
})

window.addEventListener('resize', function() {
  itemWidth = $headerListItem.offsetWidth;
  $headerScroll.style.width = `${itemWidth}px`;

})

// 다른 li를 선택햇을때 이동하도록
const $firstItem = document.querySelector('.header-bottom>ul>li:nth-child(1)>a');
const $secondItem = document.querySelector('.header-bottom>ul>li:nth-child(2)>a');
const $thirdItem = document.querySelector('.header-bottom>ul>li:nth-child(3)>a');
const $pich2 = document.querySelector('section>h2:nth-of-type(1)');
const $fileh2 = document.querySelector('section>h2:nth-of-type(2)');
const $linkh2 = document.querySelector('section>h2:nth-of-type(3)');


window.addEventListener('DOMContentLoaded', function() {
  $headerScroll.style.left = `${$firstItem.offsetLeft}px`;
})

$firstItem.addEventListener('click', function(evt) {
  evt.preventDefault();
  $headerScroll.style.left = `${$firstItem.offsetLeft}px`;
  // location.href = './../talkdrawer.html';
  window.scrollTo({
    top: $pich2.offsetTop,
    behavior: "smooth"
  })
})

$secondItem.addEventListener('click', function(evt) {
  evt.preventDefault();
  $headerScroll.style.left = `${$secondItem.offsetLeft}px`;
  window.scrollTo({
    top: $fileh2.offsetTop+2,
    behavior: "smooth"
  })
})

$thirdItem.addEventListener('click', function(evt) {
  evt.preventDefault();
  $headerScroll.style.left = `${$thirdItem.offsetLeft}px`;
  // location.href = './../talkdrawerlink.html';
  window.scrollTo({
    top: $linkh2.offsetTop+2,
    behavior: "smooth"
  })
})

// 스크롤을직접내려도 밑줄이해당탭으로이동

const $section = document.querySelector('section');
const $wrap = document.querySelector('#wrap');

$wrap.style.height = $section.offsetHeight+130;

window.addEventListener('scroll', ()=>{
  
  // const scrollY = Math.ceil(window.scrollY);
  // if(scrollY >= $fileh2.offsetTop && scrollY < window.innerHeight) {
  //   $headerScroll.style.left = `${$secondItem.offsetLeft}px`;
  // }
  // else if(scrollY >= $pich2.offsetTop && scrollY < window.innerHeight) {
  //   $headerScroll.style.left = `${$firstItem.offsetLeft}px`;
  // }
  // else 
  if(window.innerHeight+scrollY >= $wrap.offsetHeight) {
    // alert('g');
  }

    console.log('--------------');
    console.log('');
    console.log('window.innerHeight =', window.innerHeight)
    console.log('window.scrollY = ',window.scrollY)
    console.log('$wrap.offsetHeight =',$wrap.offsetHeight)
    console.log('$section.offsetHeight = ',$section.offsetHeight)
    console.log('');
    console.log('--------------');
  })