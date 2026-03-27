---
layout: default
title: 联系我们 - 常州吉盟机电控制系统有限公司
description: 联系我们获取施耐德、西门子、SICK自动化产品报价和技术支持。
lang: zh
---

<main class="container">
    <section id="contact-header">
        <h1>联系我们</h1>
        <p style="text-align: center; margin-bottom: 40px; color: var(--light-text);">
            我们期待与您合作，提供专业的自动化产品解决方案
        </p>
    </section>
    
    <section id="contact-methods">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-bottom: 60px;">
            <div style="background: white; border-radius: 10px; padding: 40px; box-shadow: var(--shadow);">
                <div style="text-align: center; margin-bottom: 30px;">
                    <div style="width: 80px; height: 80px; background: var(--primary-color); color: white; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 36px;">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                </div>
                
                <h3 style="text-align: center; margin-bottom: 20px; color: var(--primary-color);">公司地址</h3>
                <div style="text-align: center; line-height: 1.8;">
                    <p><strong>常州吉盟机电控制系统有限公司</strong></p>
                    <p>江苏省常州市</p>
                    <p>中国</p>
                </div>
            </div>
            
            <div style="background: white; border-radius: 10px; padding: 40px; box-shadow: var(--shadow);">
                <div style="text-align: center; margin-bottom: 30px;">
                    <div style="width: 80px; height: 80px; background: var(--primary-color); color: white; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 36px;">
                        <i class="fas fa-phone"></i>
                    </div>
                </div>
                
                <h3 style="text-align: center; margin-bottom: 20px; color: var(--primary-color);">联系电话</h3>
                <div style="text-align: center; line-height: 1.8;">
                    <p><strong>销售热线:</strong></p>
                    <p style="font-size: 24px; font-weight: bold; color: var(--accent-color); margin: 10px 0;">
                        {{ site.contact_phone }}
                    </p>
                    <p><strong>技术支持:</strong></p>
                    <p>+86 519-88888889</p>
                    <p style="margin-top: 15px; color: var(--light-text); font-size: 14px;">
                        <i class="fas fa-clock"></i> 工作时间: 周一至周五 9:00-18:00
                    </p>
                </div>
            </div>
            
            <div style="background: white; border-radius: 10px; padding: 40px; box-shadow: var(--shadow);">
                <div style="text-align: center; margin-bottom: 30px;">
                    <div style="width: 80px; height: 80px; background: var(--primary-color); color: white; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 36px;">
                        <i class="fas fa-envelope"></i>
                    </div>
                </div>
                
                <h3 style="text-align: center; margin-bottom: 20px; color: var(--primary-color);">电子邮箱</h3>
                <div style="text-align: center; line-height: 1.8;">
                    <p><strong>销售咨询:</strong></p>
                    <p style="font-size: 20px; margin: 10px 0;">
                        <a href="mailto:{{ site.contact_email }}" style="color: var(--primary-color); text-decoration: none;">
                            {{ site.contact_email }}
                        </a>
                    </p>
                    <p><strong>技术支持:</strong></p>
                    <p>
                        <a href="mailto:support@jimeng-auto.com" style="color: var(--primary-color); text-decoration: none;">
                            support@jimeng-auto.com
                        </a>
                    </p>
                    <p style="margin-top: 15px; color: var(--light-text); font-size: 14px;">
                        我们会在24小时内回复您的邮件
                    </p>
                </div>
            </div>
        </div>
    </section>
    
    <section id="instant-messaging" style="margin-bottom: 60px;">
        <h2 style="text-align: center; margin-bottom: 40px;">即时通讯</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
            <a href="https://wa.me/{{ site.whatsapp | remove: '+' | remove: ' ' }}" 
               style="display: block; background: #25D366; color: white; padding: 25px; border-radius: 10px; text-decoration: none; text-align: center; transition: transform 0.3s;">
                <div style="font-size: 48px; margin-bottom: 15px;">
                    <i class="fab fa-whatsapp"></i>
                </div>
                <h3 style="margin-bottom: 10px;">WhatsApp</h3>
                <p>{{ site.whatsapp }}</p>
                <p style="margin-top: 10px; font-size: 14px; opacity: 0.9;">点击直接聊天</p>
            </a>
            
            <div style="background: #0088cc; color: white; padding: 25px; border-radius: 10px; text-align: center;">
                <div style="font-size: 48px; margin-bottom: 15px;">
                    <i class="fab fa-telegram"></i>
                </div>
                <h3 style="margin-bottom: 10px;">Zalo</h3>
                <p>{{ site.zalo }}</p>
                <p style="margin-top: 10px; font-size: 14px; opacity: 0.9;">越南市场专用</p>
            </div>
            
            <a href="https://m.me/{{ site.messenger | remove: '@' }}" 
               style="display: block; background: #006AFF; color: white; padding: 25px; border-radius: 10px; text-decoration: none; text-align: center; transition: transform 0.3s;">
                <div style="font-size: 48px; margin-bottom: 15px;">
                    <i class="fab fa-facebook-messenger"></i>
                </div>
                <h3 style="margin-bottom: 10px;">Messenger</h3>
                <p>{{ site.messenger }}</p>
                <p style="margin-top: 10px; font-size: 14px; opacity: 0.9;">点击直接聊天</p>
            </a>
            
            <div style="background: #07C160; color: white; padding: 25px; border-radius: 10px; text-align: center;">
                <div style="font-size: 48px; margin-bottom: 15px;">
                    <i class="fab fa-weixin"></i>
                </div>
                <h3 style="margin-bottom: 10px;">微信</h3>
                <p>JimengAuto</p>
                <p style="margin-top: 10px; font-size: 14px; opacity: 0.9;">扫描二维码添加</p>
            </div>
        </div>
    </section>
    
    <section id="contact-form" style="background: var(--secondary-color); padding: 50px; border-radius: 10px; margin-bottom: 60px;">
        <h2 style="text-align: center; margin-bottom: 40px;">发送询价</h2>
        
        <form id="inquiryForm" style="max-width: 800px; margin: 0 auto;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                <div>
                    <label style="display: block; margin-bottom: 8px; font-weight: bold;">姓名 *</label>
                    <input type="text" required style="width: 100%; padding: 12px; border: 1px solid var(--border-color); border-radius: 5px;">
                </div>
                
                <div>
                    <label style="display: block; margin-bottom: 8px; font-weight: bold;">公司名称</label>
                    <input type="text" style="width: 100%; padding: 12px; border: 1px solid var(--border-color); border-radius: 5px;">
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                <div>
                    <label style="display: block; margin-bottom: 8px; font-weight: bold;">邮箱 *</label>
                    <input type="email" required style="width: 100%; padding: 12px; border: 1px solid var(--border-color); border-radius: 5px;">
                </div>
                
                <div>
                    <label style="display: block; margin-bottom: 8px; font-weight: bold;">电话</label>
                    <input type="tel" style="width: 100%; padding: 12px; border: 1px solid var(--border-color); border-radius: 5px;">
                </div>
            </div>
            
            <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 8px; font-weight: bold;">感兴趣的产品</label>
                <select style="width: 100%; padding: 12px; border: 1px solid var(--border-color); border-radius: 5px;">
                    <option value="">请选择产品类型</option>
                    <option value="schneider">施耐德产品</option>
                    <option value="siemens">西门子产品</option>
                    <option value="sick">SICK产品</option>
                    <option value="other">其他自动化产品</option>
                </select>
            </div>
            
            <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 8px; font-weight: bold;">具体型号或需求 *</label>
                <textarea required rows="5" style="width: 100%; padding: 12px; border: 1px solid var(--border-color); border-radius: 5px;" 
                          placeholder="请提供您感兴趣的具体产品型号、数量或其他需求..."></textarea>
            </div>
            
            <div style="text-align: center;">
                <button type="submit" style="background: var(--primary-color); color: white; border: none; padding: 15px 40px; border-radius: 5px; font-size: 18px; font-weight: bold; cursor: pointer; transition: background-color 0.3s;">
                    <i class="fas fa-paper-plane"></i> 发送询价
                </button>
                <p style="margin-top: 15px; color: var(--light-text); font-size: 14px;">
                    我们会在24小时内通过邮件或电话回复您
                </p>
            </div>
        </form>
    </section>
    
    <section id="business-hours" style="text-align: center; padding: 40px; background: white; border-radius: 10px; box-shadow: var(--shadow);">
        <h2 style="margin-bottom: 30px;">工作时间</h2>
        
        <div style="display: inline-block; text-align: left;">
            <div style="display: grid; grid-template-columns: auto auto; gap: 20px 40px; margin-bottom: 30px;">
                <div style="font-weight: bold;">周一至周五:</div>
                <div>9:00 - 18:00</div>
                
                <div style="font-weight: bold;">周六:</div>
                <div>9:00 - 12:00</div>
                
                <div style="font-weight: bold;">周日:</div>
                <div>休息</div>
                
                <div style="font-weight: bold;">节假日:</div>
                <div>根据中国法定节假日安排</div>
            </div>
        </div>
        
        <p style="color: var(--light-text); max-width: 600px; margin: 0 auto;">
            <i class="fas fa-info-circle"></i> 非工作时间如有紧急需求，可通过WhatsApp或邮箱留言，我们会在上班后第一时间处理。
        </p>
    </section>
</main>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        // 表单提交处理
        const form = document.getElementById('inquiryForm');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 这里在实际应用中应该发送到后端
            // 现在只是显示成功消息
            alert('感谢您的询价！我们会在24小时内通过邮件或电话联系您。');
            form.reset();
        });
        
        // 添加时区信息
        const timezoneInfo = document.createElement('div');
        timezoneInfo.innerHTML = `
            <div style="text-align: center; margin-top: 20px; color: var(--light-text); font-size: 14px;">
                <i class="fas fa-globe"></i> 时区: 中国标准时间 (GMT+8)
            </div>
        `;
        document.querySelector('#business-hours').appendChild(timezoneInfo);
        
        // 添加即时通讯工具的悬停效果
        const messagingLinks = document.querySelectorAll('#instant-messaging a');
        messagingLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    });
</script>