// script.js

function handleButtonClick() {
  const contactButton = document.getElementById('contactButton');

  // 添加按钮点击后的样式
  contactButton.classList.add('cb1-clicked');

  // 在新窗口中打开邮件窗口
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
    // 使用 window.open 打开发送邮件的窗口，包含主题和正文
    window.open(`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
  } else {
    // 使用 window.open 打开发送邮件的窗口，仅包含邮箱地址
    window.open(`mailto:${emailAddress}`, '_blank');
  }
}



/* swiper */
let swiperOptions = {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  },
  keyboard: true,
  mousewheel: false,
  
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  }
  
};

// 初始化Swiper
let swiper = new Swiper(".swiper", swiperOptions);

// 监听窗口大小变化事件
window.addEventListener("resize", () => {
  // 获取当前窗口宽度
  let windowWidth = window.innerWidth;

  // 根据窗口宽度判断是否启用 mousewheel
  if (windowWidth < 720) {
    swiper.mousewheel.enable();
  } else {
    swiper.mousewheel.disable();
  }
});

// 初始时检查窗口宽度，以决定是否启用 mousewheel
if (window.innerWidth < 720) {
  swiper.mousewheel.enable();
} else {
  swiper.mousewheel.disable();
}


/* 侧边栏 */

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const entranceBox = document.querySelector('.entrancebox');
  const imageWrappers = document.querySelectorAll('.image__wrapper');

  // 切换 sidebar 和 entrancebox 的类
  sidebar.classList.toggle('sidebar-open');
  entranceBox.classList.toggle('sidebar-open');

  // 切换 right 的值，从 0 到 -50vh，或者从 -50vh 到 0
  sidebar.style.right = sidebar.style.right === '0px' ? '-60vh' : '0';

  // 切换图像的模糊效果
  imageWrappers.forEach(wrapper => {
    // 检查是否已经应用了模糊效果
    const isBlurred = wrapper.classList.contains('blur');

    // 根据当前状态切换模糊效果和添加过渡类
    wrapper.classList.toggle('blur', !isBlurred);
    wrapper.classList.toggle('unblur', isBlurred);
  });

  // 切换 entrancebox 的 margin-right
  entranceBox.style.marginRight = entranceBox.classList.contains('sidebar-open') ? '60vh' : '0';
}




/* menu-icon 动效 */
/*————————————————————————————————————————————*/
function toggleIcon() {
  const icon = document.querySelector('.menu-icon');
  icon.classList.toggle('open');
}
/*————————————————————————————————————————————*/