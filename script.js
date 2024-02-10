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
  // 使用 window.open 打开新窗口，并传递 mailto 链接
  const emailAddress = 'tong0738@outlook.com';
  const subject = 'Hello';
  const body = '"Hi nice to meet you, Any question just let me know ;)"';
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // 使用 window.open 打开发送邮件的窗口
  window.open(mailtoLink, '_blank');
}

/* 窗口小于720时 */
