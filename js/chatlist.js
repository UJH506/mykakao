
const $chatlists = document.querySelectorAll('section>ul>li>a');
const $proImgs = document.querySelectorAll('section>ul>li>a>.pic');

// 클릭할 때는 선택만, 더블클릭할 때 페이지 이동
let nowIdx = 0;
let oldIdx = nowIdx;

$chatlists.forEach(($chatlist,idx)=>{

  $chatlist.addEventListener("click", function(event) {
    event.preventDefault();

    oldIdx = nowIdx;
    nowIdx = idx;

    $chatlists[oldIdx].removeAttribute('class');
    $chatlists[nowIdx].setAttribute('class', 'on');
  });

  $chatlist.addEventListener("dblclick", function() {
    window.location.href = this.href;
  });
})

// 프사부분 클릭하면 프사 페이지 열기
const arrImg = ["./profile1.html","./profile2.html","./profile3.html"]

$proImgs.forEach(($proImg, idx)=>{
  $proImg.addEventListener("click", function() {
  window.location.href = arrImg[idx];
});
})

// 스크롤을 내리면 header에 그림자발생, 맨위로올리면 없앰
const $header = document.querySelector('header');

window.addEventListener('DOMContentLoaded', ()=>{
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

// 친추버튼 누르면 친구추가 창 띄우기
// 친구추가 창에서 뒤로가기 누르면 display:none
const $addFrdBack = document.querySelector('#addfriend>header>.top>span>i');
const $addfriendpage = document.querySelector('#addfriend');
const $addfriendBtn = document.querySelector('i[class="fa-solid fa-user-plus"]');


$addfriendBtn.addEventListener('click', (evt)=>{
  evt.preventDefault();
  // $addfriendpage.removeAttribute('style','display');
  $addfriendpage.style.display = 'block';
  })

    $addFrdBack.addEventListener('click', function() {
      $addfriendpage.style.display = 'none';
    })