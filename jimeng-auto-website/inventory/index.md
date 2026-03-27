---
layout: default
title: 库存列表 - 常州吉盟机电控制系统有限公司
description: 施耐德、西门子、SICK品牌自动化产品现货库存列表，每日更新。
lang: zh
---

<main class="container">
    <section id="inventory-header">
        <h1>现货库存列表</h1>
        <p style="text-align: center; margin-bottom: 30px; color: var(--light-text);">
            以下是我们当前的现货库存，数据每日更新 {{ site.inventory_update_times | join: ', ' }}
        </p>
        
        <div class="update-time" style="margin-bottom: 40px;">
            <i class="fas fa-sync-alt"></i> 最后更新: {{ site.data.inventory.last_updated }}
            <br>
            <i class="fas fa-box"></i> 总产品数: {{ site.data.inventory.total_items }}
        </div>
    </section>
    
    <section id="inventory-by-brand">
        {% assign brands = site.data.inventory.brands %}
        
        {% for brand in brands %}
        <div id="{{ brand[0] | downcase }}" style="margin-bottom: 60px;">
            <h2 style="display: flex; align-items: center; gap: 15px;">
                <div style="width: 40px; height: 40px; background: var(--primary-color); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">
                    {{ brand[0] | slice: 0 }}
                </div>
                {{ brand[0] }} 产品库存
            </h2>
            
            <div style="overflow-x: auto; margin-top: 20px;">
                <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 10px; overflow: hidden; box-shadow: var(--shadow);">
                    <thead>
                        <tr style="background: var(--primary-color); color: white;">
                            <th style="padding: 15px; text-align: left;">产品名称</th>
                            <th style="padding: 15px; text-align: left;">型号</th>
                            <th style="padding: 15px; text-align: center;">库存数量</th>
                            <th style="padding: 15px; text-align: right;">单价 (USD)</th>
                            <th style="padding: 15px; text-align: center;">状态</th>
                        </tr>
                    </thead>
                    <tbody>
                        {% for product in brand[1] %}
                        <tr style="border-bottom: 1px solid var(--border-color);">
                            <td style="padding: 15px;">
                                <strong>{{ product.product_name_en }}</strong>
                                <div style="font-size: 14px; color: var(--light-text); margin-top: 5px;">
                                    {{ product.品名 }}
                                </div>
                            </td>
                            <td style="padding: 15px;">
                                <code style="background: var(--secondary-color); padding: 3px 8px; border-radius: 4px; font-family: monospace;">
                                    {{ product.型号 }}
                                </code>
                            </td>
                            <td style="padding: 15px; text-align: center;">
                                <span style="font-weight: bold; color: var(--primary-color);">
                                    {{ product.数量 }}
                                </span>
                            </td>
                            <td style="padding: 15px; text-align: right;">
                                <span style="font-weight: bold; color: var(--accent-color);">
                                    ${{ product.单价 }}
                                </span>
                            </td>
                            <td style="padding: 15px; text-align: center;">
                                {% if product.数量 > 20 %}
                                <span style="background: #d4edda; color: #155724; padding: 5px 10px; border-radius: 20px; font-size: 14px;">
                                    <i class="fas fa-check-circle"></i> 充足
                                </span>
                                {% elsif product.数量 > 0 %}
                                <span style="background: #fff3cd; color: #856404; padding: 5px 10px; border-radius: 20px; font-size: 14px;">
                                    <i class="fas fa-exclamation-triangle"></i> 有限
                                </span>
                                {% else %}
                                <span style="background: #f8d7da; color: #721c24; padding: 5px 10px; border-radius: 20px; font-size: 14px;">
                                    <i class="fas fa-times-circle"></i> 缺货
                                </span>
                                {% endif %}
                            </td>
                        </tr>
                        {% endfor %}
                    </tbody>
                </table>
            </div>
            
            <div style="margin-top: 20px; text-align: center; color: var(--light-text); font-size: 14px;">
                <i class="fas fa-info-circle"></i> 共 {{ brand[1] | size }} 个产品
            </div>
        </div>
        {% endfor %}
    </section>
    
    <section id="inventory-summary" style="background: var(--secondary-color); padding: 40px; border-radius: 10px; margin-top: 40px;">
        <h2 style="text-align: center; margin-bottom: 30px;">库存统计</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; text-align: center;">
            <div style="padding: 20px; background: white; border-radius: 10px;">
                <div style="font-size: 36px; font-weight: bold; color: var(--primary-color);">
                    {{ site.data.inventory.total_items }}
                </div>
                <div style="color: var(--light-text); margin-top: 10px;">总产品数</div>
            </div>
            
            <div style="padding: 20px; background: white; border-radius: 10px;">
                <div style="font-size: 36px; font-weight: bold; color: var(--primary-color);">
                    {{ site.data.inventory.brands | size }}
                </div>
                <div style="color: var(--light-text); margin-top: 10px;">品牌数量</div>
            </div>
            
            {% assign total_quantity = 0 %}
            {% for brand in site.data.inventory.brands %}
                {% for product in brand[1] %}
                    {% assign total_quantity = total_quantity | plus: product.数量 %}
                {% endfor %}
            {% endfor %}
            
            <div style="padding: 20px; background: white; border-radius: 10px;">
                <div style="font-size: 36px; font-weight: bold; color: var(--primary-color);">
                    {{ total_quantity }}
                </div>
                <div style="color: var(--light-text); margin-top: 10px;">总库存量</div>
            </div>
            
            <div style="padding: 20px; background: white; border-radius: 10px;">
                <div style="font-size: 36px; font-weight: bold; color: var(--primary-color);">
                    每日4次
                </div>
                <div style="color: var(--light-text); margin-top: 10px;">库存更新频率</div>
            </div>
        </div>
    </section>
    
    <section id="contact-cta" style="text-align: center; margin-top: 60px; padding: 40px; background: linear-gradient(135deg, var(--primary-color), #003d82); color: white; border-radius: 10px;">
        <h2 style="color: white;">需要更多产品信息？</h2>
        <p style="margin: 20px 0 30px; font-size: 18px; opacity: 0.9;">
            如果您需要其他型号或品牌的产品，请随时联系我们。
        </p>
        <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
            <a href="/contact/" class="cta-button" style="background: white; color: var(--primary-color);">
                <i class="fas fa-envelope"></i> 发送询价
            </a>
            <a href="https://wa.me/{{ site.whatsapp | remove: '+' | remove: ' ' }}" class="cta-button" style="background: #25D366; color: white;">
                <i class="fab fa-whatsapp"></i> WhatsApp咨询
            </a>
        </div>
    </section>
</main>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        // 添加库存搜索功能
        const searchBox = document.createElement('div');
        searchBox.innerHTML = `
            <div style="margin: 30px 0; text-align: center;">
                <input type="text" id="inventorySearch" placeholder="搜索产品型号或名称..." 
                       style="padding: 12px 20px; width: 100%; max-width: 500px; border: 2px solid var(--border-color); border-radius: 5px; font-size: 16px;">
                <div style="margin-top: 10px; color: var(--light-text); font-size: 14px;">
                    按Enter键搜索，支持型号和产品名称搜索
                </div>
            </div>
        `;
        
        document.querySelector('#inventory-header').appendChild(searchBox);
        
        // 搜索功能
        const searchInput = document.getElementById('inventorySearch');
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value.toLowerCase();
                const rows = document.querySelectorAll('tbody tr');
                
                rows.forEach(row => {
                    const text = row.textContent.toLowerCase();
                    if (text.includes(searchTerm)) {
                        row.style.display = '';
                        row.style.animation = 'highlight 0.5s';
                    } else {
                        row.style.display = 'none';
                    }
                });
                
                // 添加高亮动画
                const style = document.createElement('style');
                style.textContent = `
                    @keyframes highlight {
                        0% { background-color: #fff3cd; }
                        100% { background-color: transparent; }
                    }
                `;
                document.head.appendChild(style);
            }
        });
        
        // 清除搜索
        searchInput.addEventListener('input', function() {
            if (this.value === '') {
                const rows = document.querySelectorAll('tbody tr');
                rows.forEach(row => {
                    row.style.display = '';
                });
            }
        });
    });
</script>