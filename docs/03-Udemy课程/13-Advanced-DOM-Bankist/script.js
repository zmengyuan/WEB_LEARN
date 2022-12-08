'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  // 因为 open account 是一个超链接标签，它的href="#"，所以点击它会默认到网页头部，执行下面方法可以阻止这项默认行动
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
/*
//186

// Selecting elements
console.log(document.documentElement); //整个html文档
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section"); //返回NodeList
console.log(allSections);

document.getElementById("#section--1");
const allButtons = document.getElementsByTagName("button"); //返回HTMLCollection
console.log(allButtons);
// 注意，到这里有9个button,如果我在页面上删除一个button，但是没有刷新页面，再次读取allButtons，可以看到它只有8个按钮了！！所以document.getElementsByTagName是自动更新，而不是手动更新的。

console.log(document.getElementsByClassName("btn")); //返回HTMLCollection

//Creating and inserting elements
// .insertAdjacentHTML()

const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = "We use cookie for improved functionality and analytics.";
message.innerHTML = "We use cookie for improved functionality and analytics.<button class='btn btn--close-cookie'>Got it!</button>";
// 下面两句代码，但是只会插入一次，后面的代码其实是移动前面的到后面去，第一行代码才是插入。message确实是在DOM重的生命周期element，所以它不能出现在多个地方。DOM中的元素都是唯一的。
// 加在header的第一个儿子的位置上
header.prepend(message);
// 成为header的最后一个儿子
header.append(message);
// 如果要实现插入message的副本，则应该 ,true表示所有子元素也会被复制
// header.append(message.cloneNode(true));

// 成为header的兄弟元素
header.before(message);
// header.after(message);

// Dlete elements
document.querySelector(".btn--close-cookie").addEventListener("click", function () {
  message.remove(); //新写法
  // message.parentElement.removeChild(message);//旧写法
});

// 187
// Styles message.style只能读和写内联样式
message.style.backgroundColor = "#37383d"
message.style.width = "120%";
console.log(message.style.height);
console.log(message.style.width);

// console.log(getComputedStyle(message));//返回所有属性 CSSStyleDeclaration，甚至是我们没有手动定义的属性
console.log(getComputedStyle(message).color);

message.style.height = Number.parseFloat(getComputedStyle(message).height) + 30 + "px";
console.log(message.style.height);

//CSS自定义样式，也可以设置CSS默认样式
document.documentElement.style.setProperty("--color-primary", "orangered");

// Attributes 这样只能获取标准属性，自己写在元素上的属性获取不到
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src); //绝对地址
console.log(logo.getAttribute("src")); //这个才是你真的如何写的 href属性也一样

console.log(logo.className); //由于历史原因，类名要用此属性，不能用class
logo.alt = "Beautiful minimalist logo";

// 这样可以获取非标准属性
console.log(logo.getAttribute("designer"));
logo.setAttribute("company", "Bankist");

const link = document.querySelector(".btn--show-modal");
console.log(link.href);
console.log(link.getAttribute("href"));

// Data attributes，必须以data开头的属性 比如：data-version-number，要像下面一样获取
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add("c");
logo.classList.toggle("c");
logo.classList.contains("c");
logo.classList.remove("c");

// Do not use 
// logo.className = "jos";
*/

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());

  console.log(
    `Current scroll (x/y) ${window.pageXOffset},${window.pageYOffset}`
  );

  console.log(
    `height/width viewport ${document.documentElement.clientHeight},${document.documentElement.clientWidth}`
  );

  // 点击一次之后就不生效了，这是因为这里指定的top总是相对于view port，而不是document
  // window.scrollTo(s1coords.left, s1coords.top);
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset); //window本身已经移动的+还剩下多少需要移动的。（档期那位置+当前滚动）

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  // 更现代的方法,现代浏览器
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

// 189
const h1 = document.querySelector('h1');
const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading : D');
};
h1.addEventListener('mouseenter', alertH1);
//删除事件
h1.removeEventListener('mouseenter', alertH1);

// 事实上，对于每个事件（比如鼠标点击等等），都有一个像下面这样的on-event 属性。这是过去老派的做法，现在一般还是使用addEventListener
// h1.onmouseenter = function (e) {
//   alert('onmonseenter: Great! You are reading the heading : D');
// };
