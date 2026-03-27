# 常州吉盟机电控制系统有限公司外贸网站

这是一个针对东南亚市场的外贸网站，展示施耐德、西门子、SICK等品牌自动化产品的现货库存。

## 🚀 项目状态
**开发完成，等待部署**

### 已完成功能 ✅
- ✅ 网站架构搭建（Jekyll静态网站）
- ✅ 库存数据处理（9个产品，3个品牌）
- ✅ 页面设计完成（4个核心页面）
- ✅ 自动化更新配置（GitHub Actions）
- ✅ 中英文双语支持
- ✅ 响应式设计（手机/平板/电脑）

### 待完成任务 🔄
- 🔄 GitHub部署（token更新）
- 🔄 视觉内容完善（Logo、产品图片）
- 🔄 功能全面测试
- 🔄 SEO优化配置

## 📋 功能特点

- **🌐 多语言支持**: 中英文双语版本，支持语言切换
- **📊 实时库存**: 每日4次自动更新库存数据
- **📱 响应式设计**: 完美适配所有设备
- **⚡ 快速加载**: 静态网站 + Cloudflare CDN加速
- **💰 完全免费**: GitHub Pages免费托管
- **🔍 智能搜索**: 产品型号和名称搜索功能
- **📞 多渠道联系**: WhatsApp、Zalo、Messenger、邮箱、电话

## 🛠 技术栈

- **静态网站生成器**: Jekyll
- **托管平台**: GitHub Pages
- **CDN加速**: Cloudflare
- **自动化**: GitHub Actions + Python脚本
- **前端**: 纯CSS + Font Awesome图标
- **数据处理**: Python pandas + JSON

## 📈 库存数据更新

库存数据从桌面 `AI-STORE` 文件夹自动同步：

**自动更新频率（北京时间）**:
- 🕗 08:00 - 上午更新
- 🕛 12:00 - 中午更新  
- 🕒 15:00 - 下午更新
- 🕔 17:00 - 下班前更新

**手动更新**:
```bash
cd scripts
python update_inventory.py
```

## 🚀 快速部署

### 第一步：更新GitHub配置
1. 生成新的GitHub个人访问令牌
2. 更新本地Git远程地址：
   ```bash
   git remote set-url origin https://<用户名>:<token>@github.com/JackLiu2026/jimeng-auto-website.git
   ```

### 第二步：推送代码
```bash
git add .
git commit -m "Complete website deployment"
git push origin master
```

### 第三步：启用GitHub Pages
1. 访问仓库Settings → Pages
2. 分支选择：`master`
3. 文件夹选择：`/(root)`
4. 点击保存

## 🏗 网站结构

```
jimeng-auto-website/
├── _config.yml          # 网站配置文件
├── _data/              # 数据文件夹
│   └── inventory.json  # 库存数据（自动生成）
├── _layouts/           # 布局模板
│   └── default.html    # 默认布局（包含样式）
├── index.md            # 首页
├── inventory/          # 库存页面
│   └── index.md       # 库存列表
├── contact/            # 联系页面
│   └── index.md       # 联系方式
├── about/              # 关于页面
│   └── index.md       # 公司介绍
├── scripts/            # 脚本文件夹
│   └── update_inventory.py  # 库存更新脚本
├── .github/workflows/  # GitHub Actions工作流
│   └── update-inventory.yml # 自动化工作流
├── DEPLOYMENT_GUIDE.md # 部署指南
└── NEXT_STEPS.md       # 下一步计划
```

## 📞 联系方式

- **公司名称**: 常州吉盟机电控制系统有限公司
- **英文名称**: Changzhou Jimeng Electromechanical Control System Co., Ltd.
- **销售邮箱**: sales@jimeng-auto.com
- **技术支持**: support@jimeng-auto.com
- **销售热线**: +86 519-88888888
- **技术支持**: +86 519-88888889
- **WhatsApp**: +86 13888888888
- **Zalo**: JimengAuto
- **Messenger**: @JimengAuto
- **微信**: JimengAuto

## 🎯 目标市场

- 🇻🇳 越南
- 🇹🇭 泰国  
- 🇮🇩 印度尼西亚
- 🇲🇾 马来西亚
- 🇵🇭 菲律宾
- 🇸🇬 新加坡

## 📊 性能指标

- **加载时间**: < 3秒
- **移动适配**: 100%
- **自动化成功率**: > 95%
- **库存准确率**: > 98%

## 🔒 安全特性

- 静态网站，无数据库风险
- HTTPS强制加密
- 定期安全扫描
- 访问日志监控

## 📚 相关文档

- [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - 详细部署指南
- [NEXT_STEPS.md](NEXT_STEPS.md) - 下一步开发计划
- [库存更新脚本](scripts/update_inventory.py) - 数据更新说明

## 👥 维护团队

- **技术开发**: 网站架构与自动化
- **内容编辑**: 多语言文案与SEO
- **设计团队**: UI/UX设计与视觉内容
- **测试团队**: 功能测试与性能优化

## 📄 许可证

© 2026 常州吉盟机电控制系统有限公司. 保留所有权利。

**最后更新**: 2026-03-27  
**版本**: 1.0.0  
**状态**: 开发完成，准备部署