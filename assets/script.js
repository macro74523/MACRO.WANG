// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', () => {
  // 暗黑模式切换
  function toggleDarkMode() {
    const body = document.body;
    const btnIcon = document.getElementById('darkModeBtn').querySelector('i');
    body.classList.toggle('dark');
    
    if (body.classList.contains('dark')) {
      btnIcon.classList.remove('fa-sun');
      btnIcon.classList.add('fa-moon');
    } else {
      btnIcon.classList.remove('fa-moon');
      btnIcon.classList.add('fa-sun');
    }
    
    // 保存主题偏好
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
  }
  
  // 初始化暗黑模式
  const darkModeBtn = document.getElementById('darkModeBtn');
  if (darkModeBtn) {
    darkModeBtn.addEventListener('click', toggleDarkMode);
    
    // 恢复保存的主题偏好
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.body.classList.add('dark');
    }
    
    // 初始化暗黑模式图标
    const btnIcon = darkModeBtn.querySelector('i');
    if (document.body.classList.contains('dark')) {
      btnIcon.classList.remove('fa-sun');
      btnIcon.classList.add('fa-moon');
    } else {
      btnIcon.classList.remove('fa-moon');
      btnIcon.classList.add('fa-sun');
    }
  }
  
  // 滚动时修改导航栏背景
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }
  });
  
  // 标语轮换功能
  const taglines = [
    "用镜头捕捉情绪 · 纪录你的精彩瞬间",
    "光影之间，故事永恒",
    "每一帧，都是艺术",
    "视觉与情感的完美交织",
    "定格时光，感动永存",
    "让影像诉说你的故事"
  ];
  
  function changeTagline() {
    const taglineElement = document.getElementById('tagline');
    if (!taglineElement) return;
    
    let newText;
    do {
      newText = taglines[Math.floor(Math.random() * taglines.length)];
    } while (newText === taglineElement.textContent);
    
    taglineElement.classList.add('fade-out');
    
    setTimeout(() => {
      taglineElement.textContent = newText;
      taglineElement.classList.remove('fade-out');
    }, 500);
  }
  
  // 启动标语轮换
  changeTagline();
  setInterval(changeTagline, 5000);
  
  // 背景视频循环控制
  const bgVideo = document.getElementById('bgVideo');
  if (bgVideo) {
    bgVideo.addEventListener('ended', () => {
      bgVideo.style.transition = 'opacity 0.5s ease';
      bgVideo.style.opacity = 0.1;
      
      setTimeout(() => {
        bgVideo.currentTime = 0;
        bgVideo.play();
      }, 500);
      
      setTimeout(() => {
        bgVideo.style.opacity = 1;
      }, 600);
    });
  }
  
  // 其他初始化代码...
});
document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll("#portfolio video");

  videos.forEach(video => {
    video.addEventListener("play", () => {
      videos.forEach(v => {
        if (v !== video) {
          v.pause();
        }
      });
    });
  });
});

