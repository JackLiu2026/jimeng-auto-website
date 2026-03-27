# 飞书文件传输技能

## 描述
通过飞书机器人接收手机发送的文件，自动保存到电脑指定目录。

## 使用场景
- 从手机飞书发送文件到电脑
- 自动整理接收的文件
- 支持图片、文档、压缩包等多种格式

## 配置步骤

### 1. 飞书应用配置
1. 访问 https://open.feishu.cn/
2. 创建企业自建应用
3. 获取以下凭证：
   - App ID
   - App Secret
   - Verification Token

### 2. 事件订阅配置
1. 在飞书开放平台 → 事件订阅
2. 设置请求地址：`http://你的IP:18789/channels/feishu`
3. 添加权限：
   - `im:message`
   - `im:message.p2p_msg`
   - `file:file_uploaded`

### 3. OpenClaw 配置
在 `~/.openclaw/openclaw.json` 中添加：
```json
"channels": {
  "feishu": {
    "appId": "你的App ID",
    "appSecret": "你的App Secret",
    "verificationToken": "你的验证令牌"
  }
}
```

### 4. 文件保存目录
默认保存到：`~/.openclaw/downloads/`

## 使用方法

### 发送文件到电脑
1. 在手机飞书中找到机器人
2. 发送任意文件（图片、文档、压缩包等）
3. 文件会自动保存到电脑的下载目录

### 查看接收的文件
```bash
# 查看下载目录
ls ~/.openclaw/downloads/

# 查看最新文件
ls -lt ~/.openclaw/downloads/
```

## 文件处理逻辑
1. **接收文件** → 飞书机器人接收文件消息
2. **获取下载令牌** → 从飞书API获取临时下载令牌
3. **下载文件** → 使用令牌下载文件内容
4. **保存文件** → 保存到本地目录

## 支持的文件类型
- 📷 图片：jpg, png, gif, webp
- 📄 文档：pdf, doc, docx, xls, xlsx, ppt, pptx
- 📦 压缩包：zip, rar, 7z
- 🎵 媒体：mp3, mp4, mov
- 📝 文本：txt, md, json, xml

## 故障排除

### 常见问题
1. **收不到文件** → 检查事件订阅配置
2. **文件下载失败** → 检查网络连接和API权限
3. **保存目录不存在** → 手动创建目录

### 日志查看
```bash
# 查看OpenClaw日志
openclaw gateway logs

# 查看文件处理日志
tail -f ~/.openclaw/logs/feishu-file.log
```

## 高级功能
- 自动分类保存（图片、文档、媒体分开）
- 文件重命名规则
- 文件大小限制
- 自动解压压缩包

---

**注意**：需要公网IP或内网穿透才能从外网访问本地端口。