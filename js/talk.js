// 열었을때, 맨밑부터 보여줌
window.onload = function() {
  window.scrollTo(0, document.body.scrollHeight);
}

// 스크롤을 내리면 header에 그림자발생, 맨위로올리면 없앰
const $header = document.querySelector('header');

window.addEventListener('DOMContentLoaded', ()=>{
  // scroll이벤트시에만 하면 새로고침햇을때 적용안돼서
  if(window.scrollY >= 10) {
    $header.style.boxShadow = '0px 3px 5px rgba(0, 0, 0, 0.1)';
  }else{
    $header.style.boxShadow = 'initial';
  }
})

window.addEventListener('scroll', ()=>{
  if(window.scrollY >= 10) {
    $header.style.boxShadow = '0px 3px 5px rgba(0, 0, 0, 0.1)';
  }else{
    $header.style.boxShadow = 'initial';
  }
})

// input에 포커스될 때마다 키패드 활성화시키기
// 키패드가 활성화될 때마다 section의 padding-bottom을 키패드height만큼 올려주기
// 스크롤도 그만큼 내렷다 올렷다

const $footer = document.querySelector('footer');
const $input = document.querySelector('.inputField>input');
const $section = document.querySelector('section');

$input.addEventListener('focus', function() {
  let nowscroll = window.scrollY;
  $footer.style.bottom = '0px';
  $section.style.paddingBottom = '360px';
  window.scrollTo({
    top:nowscroll+300,
    behavior:"smooth"
  });
})

$input.addEventListener('blur', function() {
  $footer.style.bottom = '-300px';
  $section.style.paddingBottom = '60px';
})


// 검색아이콘 누르면 검색창 열림
const $searchIcon = document.querySelector('header i[class="fa-solid fa-magnifying-glass"]')
const $chatSearch = document.getElementById('chatSearch');

$searchIcon.addEventListener('click', function(evt) {
  evt.preventDefault();
  $chatSearch.style.display = 'flex';
});

// input 포커스되면 키패드 올라오고 아니면 내림
$chatSearch.children[1].addEventListener('focus', function() {
  $footer.style.bottom = '0px';
})

$chatSearch.children[1].addEventListener('blur', function() {
  $footer.style.bottom = '-300px';
})

// 취소누르면 검색창 닫힘
$chatSearch.children[2].addEventListener('click', function() {
  $chatSearch.style.display = 'none';
})

// 햄버거 아이콘 누르면 메뉴뜸
const $talkMenuIcon = document.querySelector('header>nav>ul>li>a>i[class="fa-solid fa-bars"]');
const $talkMenu = document.querySelector('#talkMenu');
const $talkMenuMain = document.querySelector('#talkMenu section.menu');
const $talkMenuFooter = document.querySelector('#talkMenu>footer');
const $menuEtc = document.querySelector('.etc');

$talkMenuIcon.addEventListener('click', function(evt) {
  evt.preventDefault();
  $talkMenu.style.display = 'block';
  $menuEtc.style.display = 'block';
  setTimeout(()=>{
    $talkMenuMain.style.right = '0px';
    $talkMenuFooter.style.right = '0px';
  }, 1)
})
// 메뉴영역 바깥쪽누르면 닫힘
$menuEtc.addEventListener('click', function() {
  $talkMenuMain.style.right = '-85%';
  $talkMenuFooter.style.right = '-85%';
  $menuEtc.style.display = 'none';
  $talkMenu.style.display = 'none';
})

// 푸터 아이콘 누르면 아이콘 교체
const $bellIcon = document.querySelector('#talkMenu>footer>ul>li:first-child>i');
const $bookmarkIcon = document.querySelector('#talkMenu>footer>ul>li:last-child>i');

let clickcount = 1;

$bellIcon.addEventListener('click', function() {
  clickcount++;

  if(clickcount%2 === 0) {
    $bellIcon.setAttribute('class', 'fa-regular fa-bell-slash');
  }else if(clickcount%2 === 1) {
    $bellIcon.setAttribute('class', 'fa-solid fa-bell');
  }
})

$bookmarkIcon.addEventListener('click', function() {
  clickcount++;

  if(clickcount%2 === 0) {
    $bookmarkIcon.setAttribute('class', 'fa-solid fa-star');
  }else if(clickcount%2 === 1) {
    $bookmarkIcon.setAttribute('class', 'fa-regular fa-star');
  }
})

// 나가기 아이콘 누르면 알림창, 확인누르면 뒤로가기
const $exitIcon = document.querySelector('#talkMenu>footer>span>i');
const $backIcon = document.querySelector('header>span>i[class="fa-solid fa-angle-left"]');

$exitIcon.addEventListener('click', function() {
  const answer = confirm('채팅방을 나가시겠어요?');
  if(answer === true) {
    window.history.back();
    // location.href = './../chatlist.html';
  }
})

// '파일'메뉴눌러서들어가면 해당위치로스크롤
const $menuFile = document.querySelector('.menuFile');
const $menuLink = document.querySelector('.menuLink');

$menuFile.addEventListener('click', function(evt) {
  evt.preventDefault();
  location.href = $menuFile.firstElementChild.firstElementChild.getAttribute('href');

  setTimeout(() => {
    window.scrollTo({
    top: $fileh2.offsetTop+2,
    behavior: "smooth"
    })
    $headerScroll.style.left = `${$secondItem.offsetLeft}px`;
  }, 1000);
  
})