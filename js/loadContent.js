document.addEventListener('DOMContentLoaded', function () {
    const articleCount = 1;
  
    for (let i = 1; i <= articleCount; i++) {
      loadArticleContent(i);
    }
  });
  
function loadArticleContent(articleId) {
    fetch(`article/article${articleId}.html`)
      .then(response => response.text())
      .then(data => {
        document.querySelector(`#articleContainer${articleId} .article-wrapper`).innerHTML = data;
      })
      .catch(error => console.error(`Error loading article ${articleId} content:`, error));
}
