---
layout: default
title: 常州吉盟机电控制系统有限公司 - 专业自动化产品供应商
description: 专业自动化产品供应商，提供施耐德、西门子、SICK等品牌现货库存，针对东南亚市场的外贸网站。
lang: zh
---

<div class="hero">
    <div class="container">
        <h1>专业自动化产品供应商</h1>
        <p>常州吉盟机电控制系统有限公司，专注于施耐德、西门子、SICK等国际知名品牌自动化产品的现货供应，为东南亚市场提供优质的产品和服务。</p>
        <a href="/inventory/" class="cta-button">查看现货库存</a>
    </div>
</div>

<main class="container">
    <section id="featured-products">
        <h2>核心产品品牌</h2>
        <div class="inventory-grid">
            {% assign brands = site.data.inventory.brands %}
            
            {% for brand in brands %}
            <div class="brand-card">
                <div class="brand-header">
                    <div class="brand-icon">{{ brand[0] | slice: 0 }}</div>
                    <div class="brand-name">{{ brand[0] }}</div>
                </div>
                
                <ul class="product-list">
                    {% assign products = brand[1] | slice: 0, 3 %}
                    {% for product in products %}
                    <li class="product-item">
                        <div class="product-info">
                            <h4>{{ product.product_name_en }}</h4>
                            <div class="product-model">{{ product.型号 }}</div>
                        </div>
                        <div class="product-stock">
                            <div class="stock-quantity">库存: {{ product.数量 }}</div>
                            <div class="stock-price">${{ product.单价 }}</div>
                        </div>
                    </li>
                    {% endfor %}
                </ul>
                
                <div style="text-align: center; margin-top: 20px;">
                    <a href="/inventory/#{{ brand[0] | downcase }}" style="color: var(--primary-color); text-decoration: none; font-weight: bold;">
                        查看更多 {{ brand[0] }} 产品 →
                    </a>
                </div>
            </div>
            {% endfor %}
        </div>
        
        <div class="update-time">
            <i class="fas fa-sync-alt"></i> 库存每日更新: {{ site.inventory_update_times | join: ', ' }}
            <br>
            最后更新: {{ site.data.inventory.last_updated }}
        </div>
    </section>
    
    <section id="why-choose-us">
        <h2>为什么选择我们</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; margin-top: 40px;">
            <div style="text-align: center; padding: 30px; background: white; border-radius: 10px; box-shadow: var(--shadow);">
                <div style="font-size: 40px; margin-bottom: 20px; color: var(--primary-color);">
                    <i class="fas fa-boxes"></i>
                </div>
                <h3 style="margin-bottom: 15px; color: var(--primary-color);">现货库存</h3>
                <p>大量施耐德、西门子、SICK品牌产品现货，快速发货，减少您的等待时间。</p>
            </div>
            
            <div style="text-align: center; padding: 30px; background: white; border-radius: 10px; box-shadow: var(--shadow);">
                <div style="font-size: 40px; margin-bottom: 20px; color: var(--primary-color);">
                    <i class="fas fa-globe-asia"></i>
                </div>
                <h3 style="margin-bottom: 15px; color: var(--primary-color);">专注东南亚</h3>
                <p>针对东南亚市场优化，提供适合当地需求的自动化产品和解决方案。</p>
            </div>
            
            <div style="text-align: center; padding: 30px; background: white; border-radius: 10px; box-shadow: var(--shadow);">
                <div style="font-size: 40px; margin-bottom: 20px; color: var(--primary-color);">
                    <i class="fas fa-headset"></i>
                </div>
                <h3 style="margin-bottom: 15px; color: var(--primary-color);">专业支持</h3>
                <p>专业技术团队提供产品选型、应用支持和售后服务。</p>
            </div>
            
            <div style="text-align: center; padding: 30px; background: white; border-radius: 10px; box-shadow: var(--shadow);">
                <div style="font-size: 40px; margin-bottom: 20px; color: var(--primary-color);">
                    <i class="fas fa-shipping-fast"></i>
                </div>
                <h3 style="margin-bottom: 15px; color: var(--primary-color);">快速物流</h3>
                <p>与多家国际物流公司合作，确保货物安全快速送达目的地。</p>
            </div>
        </div>
    </section>
    
    <section id="contact-preview">
        <h2>联系我们</h2>
        <div class="contact-info">
            <div class="contact-item">
                <div class="contact-icon">
                    <i class="fab fa-whatsapp"></i>
                </div>
                <h3>WhatsApp</h3>
                <p>{{ site.whatsapp }}</p>
                <p style="margin-top: 10px; font-size: 14px; color: var(--light-text);">快速响应，支持多语言</p>
            </div>
            
            <div class="contact-item">
                <div class="contact-icon">
                    <i class="fas fa-envelope"></i>
                </div>
                <h3>邮箱</h3>
                <p>{{ site.contact_email }}</p>
                <p style="margin-top: 10px; font-size: 14px; color: var(--light-text);">商务合作与技术咨询</p>
            </div>
            
            <div class="contact-item">
                <div class="contact-icon">
                    <i class="fas fa-phone"></i>
                </div>
                <h3>电话</h3>
                <p>{{ site.contact_phone }}</p>
                <p style="margin-top: 10px; font-size: 14px; color: var(--light-text);">工作日 9:00-18:00</p>
            </div>
            
            <div class="contact-item">
                <div class="contact-icon">
                    <i class="fas fa-comments"></i>
                </div>
                <h3>即时通讯</h3>
                <p>Zalo: {{ site.zalo }}</p>
                <p>Messenger: {{ site.messenger }}</p>
            </div>
        </div>
    </section>
</main>