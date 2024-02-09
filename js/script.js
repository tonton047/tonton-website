function handleButtonClick() {
  const contactButton = document.getElementById('contactButton');
  
  // 添加按钮点击后的样式
  contactButton.classList.add('cb1-clicked');

  // 在按钮点击时直接打开邮件窗口
  openEmailWindow();
  
  // 移除按钮点击后的样式
  contactButton.classList.remove('cb1-clicked');
}

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


/* 窗口小于720时 */
