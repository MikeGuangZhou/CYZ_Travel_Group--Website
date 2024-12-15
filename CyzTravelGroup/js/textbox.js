// 获取模态框
    const modal = document.getElementById("myModal");

    // 获取关闭按钮
    const span = document.getElementsByClassName("close")[0];

    // 当用户点击关闭按钮时，隐藏模态框
    span.onclick = function() {
      modal.style.display = "none";
    }

    // 当用户点击模态框以外的区域时，隐藏模态框
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }

    // 当网页加载完成后显示模态框
    window.onload = function() {
      modal.style.display = "block";
    }

