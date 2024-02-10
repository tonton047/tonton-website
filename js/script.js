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

/* 窗口小于720时 */
