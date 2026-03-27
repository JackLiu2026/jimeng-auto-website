# 常州吉盟机电控制系统有限公司外贸网站

这是一个针对东南亚市场的外贸网站，展示施耐德、西门子、SICK等品牌自动化产品的现货库存。

## 功能特点

- **多语言支持**: 中英文双语版本
- **实时库存**: 每日自动更新库存数据
- **响应式设计**: 适配手机、平板、电脑
- **快速加载**: 针对东南亚网络优化
- **免费托管**: 使用GitHub Pages免费托管

## 技术栈

- **静态网站生成器**: Jekyll
- **托管**: GitHub Pages
- **CDN加速**: Cloudflare
- **自动化**: GitHub Actions
- **样式**: 纯CSS，无框架依赖

## 库存数据更新

库存数据从桌面 `AI-STORE` 文件夹自动同步，更新频率：
- 每天 08:00 (北京时间)
- 每天 12:00 (北京时间)
- 每天 15:00 (北京时间)
- 每天 17:00 (北京时间)

## 本地开发

1. 安装Ruby和Bundler
2. 安装依赖: `bundle install`
3. 本地运行: `bundle exec jekyll serve`
4. 访问: http://localhost:4000

## 部署

网站自动部署到GitHub Pages，每次推送到main分支时自动构建和部署。

## 网站结构

```
/
├── _config.yml          # 网站配置
├── _data/              # 数据文件
│   └── inventory.json  # 库存数据
├── _layouts/           # 布局模板
│   └── default.html    # 默认布局
├── index.md            # 首页
├── inventory/          # 库存页面
│   └── index.md
├── contact/            # 联系页面
│   └── index.md
├── about/              # 关于页面
│   └── index.md
└── .github/workflows/  # GitHub Actions工作流
    └── update-inventory.yml
```

## 联系方式

- 公司: 常州吉盟机电控制系统有限公司
- 邮箱: sales@jimeng-auto.com
- 电话: +86 519-88888888
- WhatsApp: +86 13888888888

## 许可证

© 2026 常州吉盟机电控制系统有限公司. 保留所有权利.