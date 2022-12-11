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

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

const nav = document.querySelector("nav");

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

/*
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

// 191
const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomColor = () => {
  return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
};
console.log(randomColor());
// 点击nav__link 因为有冒泡，所以默认它的父元素的点击事件都会执行
// 注意函数中的e.target 不是指的外面的元素，而是指该事件首先发生的地方！！！e.currentTarget才是当前元素,e.currentTarget is that where the event happeded and it is also where the handler is attached to.
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(this === e.currentTarget); //true

  //Stop propagation 一般还是没有停止传播
  // e.stopPropagation();
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});
document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});

*/


// 192
// Page navigation

// 这样写可以完成功能，但是性能太差，想一想，如果有成百上千个nav__link，那就对应有成百上千个函数。所以需要变成事件委派
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: "smooth"
//     });
//   })
// });

// 1、add eventListener to common parent element 
// 2、Determine what element originated the event
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: "smooth"
    });

  }

});

/*
// 193 DOM Traversing
const h1 = document.querySelector("h1");
// Going downwards : child
console.log(h1.querySelectorAll(".highlight")); //返回NodeList
console.log(h1.childNodes); //Node.childNodes 这个是返回h1下所有Node，实时更新的集合
console.log(h1.children); //Element.children这个只返回Element类型的Node，实时更新
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";
//Going upwards : parents
console.log(h1.parentNode); //Node.parentNode,返回指定的节点在 DOM 树中的父节点
console.log(h1.parentElement); //Node.parentElement
//Element.closest() 匹配特定选择器且离当前元素最近的祖先元素（也可以是当前元素本身）
h1.closest(".header").style.background = "var(--gradient-secondary)";
h1.closest("h1").style.background = "var(--gradient-primary)";
//Going sideways : siblings
console.log(h1.previousElementSibling); //当前元素在其父元素的子元素节点中的前一个元素节点
console.log(h1.nextElementSibling); //h1的父元素的子元素中的后一个节点
console.log(h1.previousSibling); //前一个兄弟Node
console.log(h1.nextSibling); //后一个兄弟Node

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) {
    el.style.transform = "scale(0.5)";
  }
})
*/

// 194 Tabbed Component


tabsContainer.addEventListener("click", function (e) {
  // 因为我们想得到的是那个button按钮，而点击01 02 03 时候，会得到span，所以可以用close方法
  const clicked = e.target.closest(".operations__tab");
  // console.log(clicked);

  // Guard clause  可能点击到空白处
  if (!clicked) {
    return;
  }

  tabs.forEach(t => t.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");

  // Activate content area

  tabsContent.forEach(t => t.classList.remove("operations__content--active"));
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add("operations__content--active");

});

// 195 Menu fade animation

const handleHover = function (e, opacity) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach(el => {
      if (el != link) {
        el.style.opacity = this;
      }
      logo.style.opacity = this;
    });
  }
};

// 注意这里因为要传参数，所以不能简单的写handleHover了
// nav.addEventListener("mouseover", function (e) {
//   handleHover(e, 0.5);
// });
// nav.addEventListener("mouseout", function (e) {
//   handleHover(e, 1);
// });
// Passing Arguments To Event Handlers
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// 196 Sticky Navigation
/*
const initialCoords = section1.getBoundingClientRect();
// console.log(`initial: ${initialCoords.top}`);

window.addEventListener("scroll", function (e) {
  // console.log(window.scrollY); //滚动条距离最上面的距离 ？

  if (window.scrollY > initialCoords.top) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }


});
*/

// 197 
// entries实际是threshold的条目对应
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   })
// };
// const obsOptions = {
//   root: null, //observer.observe观察的对象与此对象相交,null就是视口
//   threshold: [0, 0.2], //相交多少 这个阈值进入和出都会触发回调函数
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) {
    // console.log('放入');

    nav.classList.add("sticky");
  } else {
    // console.log('移除');

    nav.classList.remove("sticky");
  }

};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// 198
const allSections = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log('entry');

  if (!entry.isIntersecting) {
    return;
  }
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);

}
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
})