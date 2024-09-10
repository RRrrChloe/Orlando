const toggleButtons = document.querySelectorAll('.toggle-button');

// 为每个按钮添加点击事件监听器
toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        const listContent = this.nextElementSibling;

        // 切换 'open' 类来控制展开和折叠
        listContent.classList.toggle('open');
    });
});
