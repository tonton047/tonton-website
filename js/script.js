// script.js

window.onload = function () {
  // 在页面加载完成后调用 changeLanguage 函数
  changeLanguage();

  // 模拟点击切换语言按钮
  document.querySelector('.change-language').click();
};


// 防抖函数实现
function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function handleButtonClick() {
  const contactButton = document.getElementById('contactButton');
  contactButton.classList.add('cb1-clicked');
  openEmailWindow();
}

function handleMouseDown() {
  const contactButton = document.getElementById('contactButton');
  contactButton.classList.add('cb1-touched');
}

function handleMouseUp() {
  const contactButton = document.getElementById('contactButton');
  contactButton.classList.remove('cb1-touched', 'cb1-clicked');
}

function openEmailWindow() {
  const emailAddress = 'tong0738@outlook.com';
  const subject = 'Hello';
  const body = '"Hi nice to meet you, Any question just let me know ;)"';

  if (window.innerWidth >= 720) {
    window.open(`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
  } else {
    window.open(`mailto:${emailAddress}`, '_blank');
  }

}

/* swiper */
document.addEventListener("DOMContentLoaded", function () {
  var navButtons = document.querySelectorAll('.nav-button-tab');
  var swiperH = new Swiper('.swiper-container-h', {
    speed: 500,
    spaceBetween: 0,
    simulateTouch: false,
    // Exclude .swiper-text-content from noSwiping
    noSwiping: '.swiper-text-content:not(.swiper-slide)',
    noSwipingClass: 'stop-swiping',
  });

  var swiperV = new Swiper(".swiper", {
    autoplay: {
      delay: 2500,
    },
    lazyLoading: true,
    lazyLoadingInPrevNext: true,
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 16,
    loopAddBlankSlides: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  navButtons.forEach(function (button, index) {
    button.addEventListener('click', function () {
      // 切换到对应的 swiperH slide
      swiperH.slideTo(index);

      // 暂停 swiperV 的自动播放
      swiperV.autoplay.stop();
    });
  });

  // swiperH 切换完成后重新启动 swiperV 的自动播放
  swiperH.on('transitionEnd', function () {
    swiperV.autoplay.start();
  });
});




/* 侧边栏 */

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const entranceBoxes = document.querySelectorAll('.entrancebox');
  const imageWrappers = document.querySelectorAll('.slide-overlay');
  const navButtonContainer = document.querySelector('.nav-button-container');
  const swiperPagination = document.querySelector('.swiper-pagination');

  // 切换 sidebar 的类
  sidebar.classList.toggle('sidebar-open');
  // 遍历所有 entrancebox 元素
  entranceBoxes.forEach(entranceBox => {
    // 切换 entrancebox 的类
    entranceBox.classList.toggle('sidebar-open');
  });

  // 设置 sidebar 和 entrancebox 的样式
  const isSidebarOpen = sidebar.classList.contains('sidebar-open');
  sidebar.style.right = isSidebarOpen ? '0' : '-60vw';

  entranceBoxes.forEach(entranceBox => {
    entranceBox.style.marginRight = isSidebarOpen ? '60vw' : '0';
  });

  // 切换模糊效果
  imageWrappers.forEach(wrapper => {
    const isBlurred = wrapper.classList.contains('blur');
    wrapper.classList.toggle('blur', !isBlurred);
    wrapper.classList.toggle('unblur', isBlurred);
  });

  // 隐藏或显示 nav-button-container，并添加过渡效果
  if (navButtonContainer) {
    navButtonContainer.style.opacity = isSidebarOpen ? '0' : '1';
    navButtonContainer.style.visibility = isSidebarOpen ? 'hidden' : 'visible';
  }

  // 切换 swiper-pagination 的可见性
  if (swiperPagination) {
    swiperPagination.style.visibility = isSidebarOpen ? 'hidden' : 'visible';
  }

}



/* menu-icon 动效 */
function toggleIcon() {
  const icon = document.querySelector('.menu-icon');
  icon.classList.toggle('open');
}


/* —————————— 切换语言 —————————— */
function changeLanguage() {
  console.log('Change language clicked!'); // 添加这一行

  // 获取所有需要切换语言的元素
  var elementsToTranslate = document.querySelectorAll('.translate');

  // 获取当前语言
  var currentLanguage = document.querySelector('.change-language-font').innerText;

  // 定义语言对应的文本和字体类
  var translations = {
    'EN': {
      'welcome': { text: '欢迎访问', fontClass: '' },
      'siteInProgressTitle': { text: '站点正在搭建中', fontClass: '' },
      'siteInProgressText': { text: '点击下方按钮，让我知道你正在关注该页面的搭建进度，我将在一切准备就绪后邀请你再次访问', fontClass: '' },
      'contact': { text: '与我联系', fontClass: '' },

      'tap1': { text: '画廊', fontClass: '' },
      'tap2': { text: '探索', fontClass: '' },
      'tap3': { text: '活动', fontClass: '' },

      'rough': { text: '山雨欲来风满楼', fontClass: 'font-style--c1' },
      'confuse': { text: '我们<br>正在混淆<br>符号<br>与<br>真实世界', fontClass: 'font-style--c1' },
      'matrix': { text: '矩阵', fontClass: 'font-style--c1' },
      'structure': { text: '纲举目张', fontClass: 'font-style--c2' },
      'hello': { text: '你好', fontClass: 'font-style--c2' },
      'newyear2024': { text: '龙&nbsp&nbsp&nbsp&nbsp二<br>年&nbsp&nbsp&nbsp&nbsp零<br>大&nbsp&nbsp&nbsp&nbsp二<br>吉&nbsp&nbsp&nbsp&nbsp四', fontClass: 'font-style--c1' },
      // 添加其他需要翻译的文本...
    },
    'CN': {
      'welcome': { text: 'Welcome page', fontClass: '' },
      'siteInProgressTitle': { text: 'Site in progress', fontClass: '' },
      'siteInProgressText': { text: 'Click the button below to connect with me and let me know you\'re following this page. I\'ll invite you to revisit when the time is right', fontClass: '' },
      'contact': { text: 'Contact', fontClass: '' },

      'tap1': { text: 'Gallery', fontClass: '' },
      'tap2': { text: 'Explore', fontClass: '' },
      'tap3': { text: 'Events', fontClass: '' },

      'rough': { text: 'Prudent', fontClass: 'font-style--e1' },
      'confuse': { text: 'WE<br>CONFUSE<br>SIGN<br>WITH<br>THE<br>REAL<br>WORLD', fontClass: 'font-style--e1' },
      'matrix': { text: 'Matrix', fontClass: 'font-style--e1' },
      'structure': { text: 'Structure', fontClass: 'font-style--c2' },
      'hello': { text: 'hello', fontClass: 'font-style--e3' },
      'newyear2024': { text: 'Happy<br>Chinese<br>New<br>Year<br>2024', fontClass: 'font-style--e1' },
    }
  };

  // 判断要切换到的语言
  var targetLanguage = (currentLanguage === 'EN') ? 'CN' : 'EN';

  // 遍历所有需要翻译的元素
  elementsToTranslate.forEach(function (element) {
    // 获取元素的翻译 key
    var translationKey = element.getAttribute('data-translation-key');

    // 根据语言和 key 获取翻译后的文本和字体类
    var translation = translations[targetLanguage][translationKey];
    var translatedText = translation.text;
    var fontClass = translation.fontClass;

    // 移除所有字体类
    element.classList.remove('font-style--c1', 'font-style--e1', 'font-style--e3');

    // 如果有字体类，则添加
    if (fontClass) {
      element.innerHTML = translatedText;
      element.classList.add(fontClass);
    } else {
      // 如果没有字体类，只更新文本内容
      element.innerHTML = translatedText;
    }
  });

  // 切换切换语言按钮的文本
  document.querySelector('.change-language-font').innerText = targetLanguage;
}

// 初始时调用 changeLanguage 函数
changeLanguage();


/* —————————— navigation bar —————————— */

/*
function showTab(tabId) {
  // 隐藏所有选项卡
  var tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(function (tab) {
    tab.classList.remove('active');
  });

  // 显示所选选项卡
  var selectedTab = document.getElementById(tabId);
  if (selectedTab) {
    selectedTab.classList.add('active');
  }
}
*/


/* -------------------- loading -------------------- */
// Simulate a delay (replace this with your actual loading logic)
setTimeout(function () {
  // Remove the loading overlay after the delay
  var loadingOverlay = document.getElementById('loadingOverlay');
  if (loadingOverlay) {
    loadingOverlay.style.display = 'none';
  }
}, 2000); // Adjust the delay as needed or replace it with your actual loading logic
