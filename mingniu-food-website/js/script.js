// 网站功能脚本

document.addEventListener('DOMContentLoaded', function() {
    // 移动端导航菜单切换
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // 关闭移动端菜单
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    if (navToggle) {
                        navToggle.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                }
                
                // 平滑滚动
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // 更新活动菜单项
                document.querySelectorAll('.nav-menu a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
    
    // 表单提交处理
    const consultationForm = document.getElementById('consultation-form');
    if (consultationForm) {
        consultationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // 简单验证
            if (!data.name || !data.phone) {
                alert('请填写姓名和联系电话');
                return;
            }
            
            // 模拟提交成功
            alert('感谢您的咨询！我们会尽快与您联系。');
            this.reset();
            
            // 在实际应用中，这里应该发送到服务器
            // fetch('/api/consultation', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(data)
            // })
            // .then(response => response.json())
            // .then(data => {
            //     alert('提交成功！');
            //     this.reset();
            // })
            // .catch(error => {
            //     alert('提交失败，请稍后重试');
            // });
        });
    }
    
    // 滚动时更新导航栏样式
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
            navbar.style.backgroundColor = 'rgba(26, 54, 93, 0.95)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            navbar.style.backgroundColor = '#1a365d';
        }
        
        // 更新活动菜单项
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // 产品卡片悬停效果增强
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // 页面加载动画
    function initPageAnimations() {
        // 延迟加载元素动画
        const animatedElements = document.querySelectorAll('.product-card, .knowledge-item, .feature');
        animatedElements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 100 * index);
        });
    }
    
    // 延迟执行动画
    setTimeout(initPageAnimations, 300);
    
    // 添加高对比度模式切换（适合视力不佳的用户）
    const contrastToggle = document.createElement('button');
    contrastToggle.innerHTML = '<i class="fas fa-eye"></i> 高对比度';
    contrastToggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #1a365d;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
        z-index: 1000;
        font-family: 'Noto Sans SC', sans-serif;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;
    
    contrastToggle.addEventListener('click', function() {
        document.body.classList.toggle('high-contrast');
        this.innerHTML = document.body.classList.contains('high-contrast')
            ? '<i class="fas fa-eye-slash"></i> 普通模式'
            : '<i class="fas fa-eye"></i> 高对比度';
    });
    
    document.body.appendChild(contrastToggle);
    
    // 添加字体大小调整功能
    const fontSizeControls = document.createElement('div');
    fontSizeControls.innerHTML = `
        <button id="font-decrease"><i class="fas fa-font"></i> 小</button>
        <button id="font-reset"><i class="fas fa-text-height"></i> 中</button>
        <button id="font-increase"><i class="fas fa-font"></i> 大</button>
    `;
    fontSizeControls.style.cssText = `
        position: fixed;
        bottom: 70px;
        right: 20px;
        display: flex;
        gap: 5px;
        z-index: 1000;
        background: white;
        padding: 5px;
        border-radius: 5px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    `;
    
    fontSizeControls.querySelectorAll('button').forEach(btn => {
        btn.style.cssText = `
            background: #1a365d;
            color: white;
            border: none;
            padding: 8px 12px;
            border-radius: 3px;
            cursor: pointer;
            font-family: 'Noto Sans SC', sans-serif;
            font-size: 12px;
            display: flex;
            align-items: center;
            gap: 5px;
        `;
    });
    
    document.body.appendChild(fontSizeControls);
    
    // 字体大小控制功能
    let currentFontSize = 16;
    
    document.getElementById('font-decrease').addEventListener('click', function() {
        if (currentFontSize > 12) {
            currentFontSize -= 2;
            updateFontSize();
        }
    });
    
    document.getElementById('font-reset').addEventListener('click', function() {
        currentFontSize = 16;
        updateFontSize();
    });
    
    document.getElementById('font-increase').addEventListener('click', function() {
        if (currentFontSize < 24) {
            currentFontSize += 2;
            updateFontSize();
        }
    });
    
    function updateFontSize() {
        document.body.style.fontSize = currentFontSize + 'px';
        document.querySelectorAll('h1, h2, h3, h4, p, a, button, input, textarea, select').forEach(el => {
            const computedStyle = window.getComputedStyle(el);
            const baseSize = parseFloat(computedStyle.fontSize);
            const ratio = baseSize / 16;
            el.style.fontSize = (currentFontSize * ratio) + 'px';
        });
    }
    
    // 添加页面加载进度条
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #ffd700, #ffed4a);
        z-index: 9999;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);
    
    // 模拟加载进度
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress > 100) {
            progress = 100;
            clearInterval(progressInterval);
            setTimeout(() => {
                progressBar.style.opacity = '0';
                setTimeout(() => progressBar.remove(), 300);
            }, 500);
        }
        progressBar.style.width = progress + '%';
    }, 50);
    
    // 添加返回顶部按钮
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-chevron-up"></i>';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: #1a365d;
        color: white;
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        z-index: 1000;
        font-size: 20px;
        display: none;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    `;
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });
    
    // 添加键盘快捷键支持
    document.addEventListener('keydown', function(e) {
        // Ctrl + / 显示快捷键帮助
        if (e.ctrlKey && e.key === '/') {
            e.preventDefault();
            alert('快捷键帮助：\n\n' +
                  '↑/↓ - 滚动页面\n' +
                  'Home - 返回顶部\n' +
                  'End - 跳到底部\n' +
                  'Tab - 在表单元素间导航\n' +
                  'Esc - 关闭菜单/弹窗');
        }
        
        // 空格键滚动
        if (e.key === ' ' && !e.target.matches('input, textarea, select')) {
            e.preventDefault();
            window.scrollBy(0, window.innerHeight * 0.8);
        }
    });
    
    // 初始化完成
    console.log('名牛食品网站初始化完成');
});