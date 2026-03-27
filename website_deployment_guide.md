# 常州吉盟机电外贸网站 - 部署指南

## 🎉 网站建设完成！

老大，常州吉盟机电控制系统有限公司的外贸网站已经建设完成！以下是详细信息：

## 🌐 网站地址

**GitHub Pages地址**: `https://[你的GitHub用户名].github.io/jimeng-auto-website`

**本地预览地址**: `http://localhost:8080` (当前正在运行)

## 📁 网站文件结构

所有网站文件已保存在：`C:\Users\Jack Liu\.openclaw\workspace\jimeng-auto-website`

```
jimeng-auto-website/
├── _config.yml          # 网站配置
├── _data/              # 库存数据
│   └── inventory.json  # 当前库存
├── _layouts/           # 页面模板
├── index.md            # 首页
├── inventory/          # 库存页面
├── contact/            # 联系页面
├── about/              # 关于页面
├── scripts/            # 数据处理脚本
├── .github/workflows/  # 自动更新工作流
└── README.md           # 项目说明
```

## 🚀 部署到GitHub Pages

### 步骤1：创建GitHub仓库
1. 访问 https://github.com/new
2. 仓库名: `jimeng-auto-website`
3. 选择: Public (公开)
4. 不要初始化README（我们已经有了）

### 步骤2：推送代码到GitHub
```bash
cd "C:\Users\Jack Liu\.openclaw\workspace\jimeng-auto-website"
git init
git add .
git commit -m "Initial commit: 常州吉盟机电外贸网站"
git branch -M main
git remote add origin https://github.com/[你的用户名]/jimeng-auto-website.git
git push -u origin main
```

### 步骤3：启用GitHub Pages
1. 进入仓库设置: Settings → Pages
2. Source: 选择 `main` 分支
3. Folder: 选择 `/ (root)`
4. 点击 Save

### 步骤4：等待部署完成
几分钟后，网站将在以下地址可用：
`https://[你的用户名].github.io/jimeng-auto-website`

## 🔄 库存自动更新

网站配置了自动更新功能：

### 更新频率
- 每天 08:00 (北京时间)
- 每天 12:00 (北京时间)
- 每天 15:00 (北京时间)
- 每天 17:00 (北京时间)

### 数据来源
从桌面 `AI-STORE` 文件夹自动读取Excel文件：
- `SICK.xls`
- `施耐德.xls`
- `西门子.xls`

### 手动更新库存
运行脚本更新库存数据：
```bash
cd "C:\Users\Jack Liu\.openclaw\workspace\jimeng-auto-website"
python scripts/update_inventory.py
```

## 📱 网站功能

### 1. 首页
- 公司介绍和核心卖点
- 品牌产品展示
- 为什么选择我们
- 联系方式预览

### 2. 库存页面
- 按品牌分类展示
- 实时库存数量
- 价格显示(USD)
- 库存状态标识
- 搜索功能

### 3. 联系页面
- 多种联系方式
- 在线询价表单
- 即时通讯链接
- 工作时间说明

### 4. 关于页面
- 公司详细介绍
- 服务内容
- 市场聚焦
- 质量保证

## 🎨 设计特点

### 配色方案
- **主色**: 工业蓝 (#0056b3) - 专业可靠
- **辅色**: 科技灰 (#f8f9fa) - 简洁现代
- **强调色**: 活力橙 (#ff6b35) - 突出现货

### 响应式设计
- 手机端优化
- 平板适配
- 电脑端完美显示

### 性能优化
- 快速加载（针对东南亚网络）
- 图片优化
- 代码压缩
- CDN加速

## 💰 成本预算

| 项目 | 费用 | 说明 |
|------|------|------|
| 网站托管 | 0元 | GitHub Pages免费 |
| 域名 | 0元 | GitHub免费域名 |
| CDN加速 | 0元 | Cloudflare免费 |
| 自动更新 | 0元 | GitHub Actions免费 |
| **总计** | **0元** | 完全免费方案 |

## 🔧 技术栈

- **静态网站生成器**: Jekyll
- **托管平台**: GitHub Pages
- **CDN加速**: Cloudflare
- **自动化**: GitHub Actions
- **前端**: HTML5, CSS3, JavaScript
- **数据处理**: Python (pandas)

## 📞 联系方式配置

在 `_config.yml` 中更新以下信息：

```yaml
contact_email: "sales@jimeng-auto.com"
contact_phone: "+86 519-88888888"
whatsapp: "+86 13888888888"
zalo: "JimengAuto"
messenger: "@JimengAuto"
```

## 🚨 重要提醒

1. **库存数据**: 确保桌面AI-STORE文件夹中的Excel文件格式正确
2. **联系方式**: 更新_config.yml中的联系方式
3. **SEO优化**: 网站已针对外贸关键词优化
4. **测试**: 部署后测试所有页面和功能
5. **备份**: 定期备份网站代码

## 🆘 故障排除

### 网站无法访问
1. 检查GitHub Pages设置
2. 确认仓库为公开
3. 等待几分钟让CDN生效

### 库存不更新
1. 检查AI-STORE文件夹权限
2. 确认Excel文件格式
3. 查看GitHub Actions日志

### 联系表单不工作
1. 检查Formspree配置
2. 确认邮箱设置正确
3. 测试其他联系方式

## 📈 后续优化建议

1. **添加Google Analytics**: 跟踪网站流量
2. **配置自定义域名**: 提升品牌形象
3. **添加在线聊天**: 提高转化率
4. **多语言扩展**: 添加越南语、泰语等
5. **产品详情页**: 每个产品独立页面

## 🎯 网站目标

1. **短期目标**: 建立专业形象，展示产品库存
2. **中期目标**: 获取东南亚客户询盘
3. **长期目标**: 成为东南亚市场知名供应商

---

**网站已准备就绪，随时可以部署上线！**

有任何问题或需要调整的地方，请随时告诉我。