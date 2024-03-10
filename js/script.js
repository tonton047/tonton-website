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
// 定义 showTab 函数
function showTab(tabId) {
  // 打印 tabId 到控制台
  console.log("Selected tab:", tabId);
  // 在这里添加显示选定标签的逻辑
  // 例如，你可以通过操作 DOM 元素的方式来显示或隐藏相应的标签内容
  // 例如：document.getElementById(tabId).style.display = 'block';
}

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
    /*
    autoplay: {
      delay: 3500,
    },
    */
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

      // 调用 showTab 函数，并传递相应的 tabId
      var tabId = button.getAttribute('data-translation-key');
      showTab(tabId);
    });
  });

   // 获取所有的 .article-container 元素
   var articleContainers = document.querySelectorAll('.article-container');

   // 遍历每个 .article-container 元素
   articleContainers.forEach(function (container) {
     // 监听 transitionend 事件，当文章容器显示时执行操作
     container.addEventListener('transitionend', function () {
       if (container.classList.contains('show')) {
         // 在文章容器显示时暂停 swiperV 的自动播放
         swiperV.autoplay.stop();
       } else if (container.classList.contains('hide')) {
         // 在文章容器隐藏时启动 swiperV 的自动播放
         swiperV.autoplay.start();
       }
     });
  });

  // 其他代码...
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

  // 获取中文和英文的容器元素
var cnContainer = document.querySelector('.article-cn');
var enContainer = document.querySelector('.article-en');


  // 定义语言对应的文本和字体类
  var translations = {
    'EN': {
      'welcome': { text: '欢迎访问', fontClass: '' },
      'siteInProgressTitle': { text: '站点正在搭建中', fontClass: '' },
      'siteInProgressText': { text: '点击下方按钮，让我知道你正在关注该页面的搭建进度，我将在一切准备就绪后邀请你再次访问', fontClass: '' },
      'contact': { text: '与我联系', fontClass: '' },
      'learnmore': { text: '阅读全文', fontClass: '--custom-font-family' },

      'tap1': { text: '画廊', fontClass: '' },
      'tap2': { text: '探索', fontClass: '' },
      'tap3': { text: '活动', fontClass: '' },

      'rough': { text: '山雨欲来风满楼', fontClass: 'font-style--c1' },
      'confuse': { text: '我们<br>正在混淆<br>符号<br>与<br>真实世界', fontClass: 'font-style--c1' },
      'matrix': { text: '矩阵', fontClass: 'font-style--c1' },
      'article1': { text: '创建<br>一个瓶子', fontClass: 'font-style--c1' },
      'hello': { text: '你好', fontClass: 'font-style--c2' },
      'newyear2024': { text: '龙&nbsp&nbsp&nbsp&nbsp二<br>年&nbsp&nbsp&nbsp&nbsp零<br>大&nbsp&nbsp&nbsp&nbsp二<br>吉&nbsp&nbsp&nbsp&nbsp四', fontClass: 'font-style--c1' },
      // 添加其他需要翻译的文本...
      
    },
    'CN': {
      'welcome': { text: 'Welcome page', fontClass: '' },
      'siteInProgressTitle': { text: 'Site in progress', fontClass: '' },
      'siteInProgressText': { text: 'Click the button below to connect with me and let me know you\'re following this page. I\'ll invite you to revisit when the time is right', fontClass: '' },
      'contact': { text: 'Contact', fontClass: '' },
      'learnmore': { text: 'Learn More', fontClass: '--custom-font-family' },

      'tap1': { text: 'Gallery', fontClass: '' },
      'tap2': { text: 'Explore', fontClass: '' },
      'tap3': { text: 'Events', fontClass: '' },

      'rough': { text: 'Prudent', fontClass: 'font-style--e1' },
      'confuse': { text: 'WE<br>CONFUSE<br>SIGN<br>WITH<br>THE<br>REAL<br>WORLD', fontClass: 'font-style--e1' },
      'matrix': { text: 'Matrix', fontClass: 'font-style--e1' },
      'article1': { text: 'Bottle<Br>Creation', fontClass: 'font-style--e1' },
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

   // 根据语言切换更新中文和英文容器的显示和隐藏状态
if (targetLanguage === 'CN') {
  cnContainer.style.display = 'none';
  enContainer.style.display = 'block';
} else {
  cnContainer.style.display = 'block';
  enContainer.style.display = 'none';
}


 }
 

 document.addEventListener('DOMContentLoaded', function () {
  // 初始时调用 changeLanguage 函数
  changeLanguage();

  // 其他初始化代码可以放在这里
});



/* -------------------- loading -------------------- */
// Simulate a delay (replace this with your actual loading logic)
setTimeout(function () {
  // Remove the loading overlay after the delay
  var loadingOverlay = document.getElementById('loadingOverlay');
  if (loadingOverlay) {
    loadingOverlay.style.display = 'none';
  }
}, 2000); // Adjust the delay as needed or replace it with your actual loading logic



/* -------------------- 文章触发事件 -------------------- */
document.addEventListener('DOMContentLoaded', function () {
  const swiperSlides = document.querySelectorAll('.child-slide');
  const articleContainers = document.querySelectorAll('.article-container');
  const swiperContainer = document.querySelector('.swiper-container');
  const header = document.querySelector('.header');
  const headerArticle = document.querySelector('.header_article');
  const headerMask = document.querySelector('.article-mask');
  const navButtonContainer = document.querySelector('.nav-button-container');

  swiperSlides.forEach((slide, index) => {
    slide.addEventListener('click', (e) => {
      e.stopPropagation();
      const articleId = slide.dataset.articleId;
      showArticle(articleId);
    });
  });

  // 获取所有 icon_box_back 元素
  const iconBoxBackList = document.querySelectorAll('.icon_box_back');

  // 绑定点击事件监听器到每个 icon_box_back 元素上
  iconBoxBackList.forEach((iconBoxBack, index) => {
    iconBoxBack.addEventListener('click', function closeArticle() {
      const currentContainer = articleContainers[index];

      // 关闭当前容器
      currentContainer.classList.remove('show');
      currentContainer.classList.add('hide');

      // 在关闭文章容器时恢复 .swiper-container 的 scale 为 1
      swiperContainer.style.transform = 'scale(1)';
      header.style.transform = 'translateY(0px)';
      headerArticle.style.transform = 'translateY(-60px)';
      headerMask.style.opacity = '0';
      navButtonContainer.style.opacity = '1';
    });
  });

  

  function showArticle(articleId) {
    articleContainers.forEach((container, index) => {
      if (index + 1 == articleId) {
        container.classList.add('show');
        container.classList.remove('hide');
      } else {
        container.classList.remove('show');
        container.classList.add('hide');
      }
    });

    // 检查是否有 article-container 显示，然后再执行缩小动作
    const isArticleVisible = Array.from(articleContainers).some(container => container.classList.contains('show'));

    if (isArticleVisible) {
      // 在按钮点击时修改 .swiper-container 的 scale
      swiperContainer.style.transform = 'scale(0.95)';
      header.style.transform = 'translateY(-60px)';
      headerArticle.style.transform = 'translateY(0)';
      headerMask.style.opacity = '1';
      navButtonContainer.style.opacity = '0';

      if (window.innerWidth < 720) {
        // 在屏幕小于720px时，header移动-60px
        header.style.transform = 'translateY(-60px)';
        headerArticle.style.transform = 'translateY(0)';
      } else {
        // 在屏幕大于等于720px时，header移动-72px
        header.style.transform = 'translateY(-72px)';
        headerArticle.style.transform = 'translateY(0)';
      }
    }
  }
});

// 其他代码保持不变
document.addEventListener('DOMContentLoaded', function () {
  const articleWrappers = document.querySelectorAll('.article-wrapper');

  articleWrappers.forEach(wrapper => {
    wrapper.addEventListener('scroll', function () {
      handleScroll(wrapper);
    });
  });

  function handleScroll(wrapper) {
    const mask = wrapper.closest('.article-container').querySelector('.article-header-mask');
    // 获取 article-wrapper 元素滚动的垂直距离
    const scrollDistance = wrapper.scrollTop;

    // 定义滚动范围和透明度范围
    const startScroll = 60;
    const maxScroll = 120;
    const maxOpacity = 1;

    // 计算透明度，使用线性插值
    let opacity = 0;

    if (scrollDistance > startScroll) {
      opacity = ((scrollDistance - startScroll) / (maxScroll - startScroll)) * maxOpacity;
    }

    // 限制透明度的最大值
    opacity = Math.min(maxOpacity, opacity);

    // 应用透明度
    mask.style.opacity = opacity;
  }
});
