# 常州吉盟机电控制系统有限公司外贸网站部署指南

## 网站概述
- **技术栈**: Jekyll静态网站 + GitHub Pages + Cloudflare CDN
- **功能**: 自动化产品展示、库存管理、多语言支持、响应式设计
- **成本**: 完全免费（GitHub Pages + Cloudflare免费套餐）

## 当前状态
✅ 网站架构搭建完成  
✅ 库存数据处理完成（9个产品，3个品牌）  
✅ 页面设计完成（首页、库存、联系、关于）  
✅ 自动化更新配置完成（GitHub Actions）  
✅ 双语支持完成（中英文）  
✅ 响应式设计完成  

## 部署步骤

### 第一步：更新GitHub配置
1. 访问 https://github.com/settings/tokens
2. 生成新的个人访问令牌（Personal Access Token）
   - 权限选择：`repo`（完全控制仓库）
   - 有效期：建议90天或自定义
3. 复制生成的token

### 第二步：更新本地Git配置
```bash
cd "C:\Users\Jack Liu\.openclaw\workspace\jimeng-auto-website"
git remote set-url origin https://<你的用户名>:<新token>@github.com/JackLiu2026/jimeng-auto-website.git
```

### 第三步：推送代码到GitHub
```bash
git add .
git commit -m "Complete website deployment"
git push origin master
```

### 第四步：启用GitHub Pages
1. 访问 https://github.com/JackLiu2026/jimeng-auto-website/settings/pages
2. 分支选择：`master`
3. 文件夹选择：`/(root)`
4. 点击保存

### 第五步：配置自定义域名（可选）
1. 在Cloudflare注册账号
2. 添加域名并配置DNS
3. 在GitHub Pages设置中添加自定义域名
4. 在Cloudflare中启用CDN加速

## 网站访问地址
- GitHub Pages: `https://jackliu2026.github.io/jimeng-auto-website/`
- 自定义域名（配置后）: `https://jimeng-auto.com`

## 自动化功能
### 库存数据自动更新
- **频率**: 每日4次（8:00, 12:00, 15:00, 17:00 北京时间）
- **数据源**: 本地Excel文件（AI-STORE文件夹）
- **脚本**: `scripts/update_inventory.py`
- **工作流**: `.github/workflows/update-inventory.yml`

### 手动触发更新
1. 访问GitHub仓库的Actions标签
2. 选择"Update Inventory Data"工作流
3. 点击"Run workflow"

## 网站维护

### 更新库存数据
1. 更新Excel文件（AI-STORE文件夹）
2. 运行更新脚本：
   ```bash
   cd scripts
   python update_inventory.py
   ```
3. 提交并推送更改

### 更新网站内容
1. 编辑Markdown文件：
   - `index.md` - 首页
   - `inventory/index.md` - 库存页面
   - `contact/index.md` - 联系页面
   - `about/index.md` - 关于页面
2. 编辑配置文件：`_config.yml`
3. 提交并推送更改

### 添加新产品
1. 在Excel文件中添加新产品
2. 运行库存更新脚本
3. 网站会自动显示新产品

## 多语言支持
- **当前支持**: 中文、英文
- **切换方式**: 页面右上角语言切换按钮
- **扩展语言**: 越南语、泰语等（需要翻译内容）

## SEO优化建议
1. 添加Google Analytics跟踪代码
2. 提交网站到Google Search Console
3. 优化页面标题和描述
4. 添加结构化数据
5. 创建sitemap.xml

## 联系方式更新
在`_config.yml`中更新以下信息：
```yaml
contact_email: "sales@jimeng-auto.com"
contact_phone: "+86 519-88888888"
whatsapp: "+86 13888888888"
zalo: "JimengAuto"
messenger: "@JimengAuto"
```

## 故障排除

### 网站无法访问
1. 检查GitHub Pages状态：https://www.githubstatus.com/
2. 检查仓库设置中的Pages配置
3. 查看GitHub Actions运行日志

### 库存数据不更新
1. 检查Excel文件路径是否正确
2. 查看GitHub Actions工作流日志
3. 手动运行更新脚本测试

### 样式问题
1. 清除浏览器缓存
2. 检查CSS文件路径
3. 验证HTML结构

## 性能优化
- ✅ 静态网站，加载速度快
- ✅ Cloudflare CDN加速
- ✅ 图片优化（建议使用WebP格式）
- ✅ 代码压缩（GitHub Pages自动处理）

## 安全建议
1. 定期更新GitHub token
2. 启用双因素认证
3. 定期备份网站代码
4. 监控访问日志

## 扩展功能建议
1. **在线询价系统** - 集成表单处理服务
2. **产品对比功能** - 允许用户对比不同产品
3. **多语言扩展** - 添加越南语、泰语支持
4. **移动应用** - 开发配套的移动端应用
5. **API接口** - 提供库存数据API

## 技术支持
- **文档**: 本项目README.md
- **问题反馈**: GitHub Issues
- **紧急联系**: 通过GitHub Discussions

---

**最后更新**: 2026-03-27  
**维护者**: 常州吉盟机电控制系统有限公司技术团队