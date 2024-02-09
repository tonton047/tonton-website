function handleButtonClick() {
  const contactButton = document.getElementById('contactButton');
  
  // 添加按钮点击后的样式
  contactButton.classList.add('cb1-clicked');

  // 监听过渡结束事件
  contactButton.addEventListener('transitionend', function handleTransitionEnd() {
      // 移除过渡结束事件监听器
      contactButton.removeEventListener('transitionend', handleTransitionEnd);

      // 在过渡结束后打开发邮件的页面
      openEmailWindow();
      
      // 移除按钮点击后的样式
      contactButton.classList.remove('cb1-clicked');
  });
}

/* 轻点 */

function handleTouchStart() {
  const contactButton = document.getElementById('contactButton');
  contactButton.classList.add('cb1-touched');
}

function handleTouchEnd() {
  const contactButton = document.getElementById('contactButton');
  contactButton.classList.remove('cb1-touched');
}



function openEmailWindow() {
  // 使用 window.open 打开发送邮件的窗口
  window.open('mailto:tong0738@outlook.com?subject=Subject&body=Body%20of%20the%20email');
}
