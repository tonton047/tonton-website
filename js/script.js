// script.js

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
document.addEventListener("DOMContentLoaded", function() {
  var swiper = new Swiper(".swiper", {

      autoplay: {
        delay: 2500,
      },

    speed:400,
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
});


// 初始时检查窗口宽度，以决定是否启用 mousewheel
handleResizeDebounced();

/* 侧边栏 */

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const entranceBoxes = document.querySelectorAll('.entrancebox');
  const imageWrappers = document.querySelectorAll('.slide-overlay');
  const navButtonContainer = document.querySelector('.nav-button-container');

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
}







/* menu-icon 动效 */
function toggleIcon() {
  const icon = document.querySelector('.menu-icon');
  icon.classList.toggle('open');
}


/* —————————— 切换语言 —————————— */
function changeLanguage() {
  // 获取所有需要切换语言的元素
  var elementsToTranslate = document.querySelectorAll('.translate');

  // 获取当前语言
  var currentLanguage = document.querySelector('.change-language-font').innerText;

  // 定义语言对应的文本
  var translations = {
    'EN': {
      'welcome': '欢迎访问',
      'siteInProgressTitle': '站点正在搭建中',
      'siteInProgressText': '点击下方按钮，让我知道你正在关注该页面的搭建进度，我将在一切准备就绪后邀请你再次访问',
      'contact': '与我联系'
      // 添加其他需要翻译的文本...
    },
    'CN': {
      // 添加其他需要翻译的文本...
      'welcome': 'Welcome page',
      'siteInProgressTitle': 'Site in progress',
      'siteInProgressText': 'Click the button below to connect with me and let me know you\'re following this page. I\'ll invite you to revisit when the time is right',
      'contact': 'Contact'
    }
  };

  // 判断要切换到的语言
  var targetLanguage = (currentLanguage === 'EN') ? 'CN' : 'EN';

  // 遍历所有需要翻译的元素
  elementsToTranslate.forEach(function (element) {
    // 获取元素的翻译 key
    var translationKey = element.getAttribute('data-translation-key');

    // 根据语言和 key 获取翻译后的文本
    var translatedText = translations[targetLanguage][translationKey];

    // 更新元素的文本内容
    element.innerText = translatedText;
  });

  // 切换切换语言按钮的文本
  document.querySelector('.change-language-font').innerText = targetLanguage;
}


/* —————————— navigation bar —————————— */

function showTab(tabId) {
  // 隐藏所有选项卡
  var tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(function(tab) {
    tab.classList.remove('active');
  });

  // 显示所选选项卡
  var selectedTab = document.getElementById(tabId);
  if (selectedTab) {
    selectedTab.classList.add('active');
  }
}


