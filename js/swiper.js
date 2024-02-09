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
  mousewheel: false
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