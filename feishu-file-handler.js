// 飞书文件接收处理脚本
const fs = require('fs');
const path = require('path');
const axios = require('axios');

// 文件保存目录
const DOWNLOAD_DIR = path.join(process.env.HOME, '.openclaw', 'downloads');

// 确保下载目录存在
if (!fs.existsSync(DOWNLOAD_DIR)) {
  fs.mkdirSync(DOWNLOAD_DIR, { recursive: true });
}

// 飞书文件处理器
async function handleFeishuFile(event) {
  try {
    const { message, file } = event;
    
    // 检查是否是文件消息
    if (message.msg_type !== 'file') {
      return { success: false, reason: '不是文件消息' };
    }
    
    // 获取文件信息
    const fileKey = message.file_key;
    const fileName = message.file_name;
    const fileSize = message.file_size;
    
    console.log(`收到文件: ${fileName} (${fileSize} bytes)`);
    
    // 1. 获取文件下载令牌
    const tokenResponse = await axios.post('https://open.feishu.cn/open-apis/im/v1/files/:file_key/download_tokens', {
      file_key: fileKey
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.FEISHU_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    
    const downloadToken = tokenResponse.data.data.download_token;
    
    // 2. 下载文件
    const downloadResponse = await axios.get(`https://open.feishu.cn/open-apis/im/v1/files/:file_key/download`, {
      params: { file_key: fileKey },
      headers: {
        'Authorization': `Bearer ${process.env.FEISHU_ACCESS_TOKEN}`,
        'Download-Token': downloadToken
      },
      responseType: 'stream'
    });
    
    // 3. 保存文件
    const filePath = path.join(DOWNLOAD_DIR, fileName);
    const writer = fs.createWriteStream(filePath);
    
    downloadResponse.data.pipe(writer);
    
    return new Promise((resolve, reject) => {
      writer.on('finish', () => {
        console.log(`文件已保存: ${filePath}`);
        resolve({
          success: true,
          filePath,
          fileName,
          fileSize,
          downloadTime: new Date().toISOString()
        });
      });
      
      writer.on('error', reject);
    });
    
  } catch (error) {
    console.error('文件处理失败:', error.message);
    return { success: false, error: error.message };
  }
}

// 消息处理器
async function handleFeishuMessage(event) {
  const { message } = event;
  
  // 检查消息类型
  switch (message.msg_type) {
    case 'text':
      console.log(`收到文本消息: ${message.content.text}`);
      return { type: 'text', content: message.content.text };
      
    case 'file':
      return await handleFeishuFile(event);
      
    case 'image':
      console.log(`收到图片消息: ${message.image_key}`);
      return { type: 'image', imageKey: message.image_key };
      
    default:
      console.log(`收到未知类型消息: ${message.msg_type}`);
      return { type: 'unknown', msg_type: message.msg_type };
  }
}

// 主处理函数
module.exports = async function feishuEventHandler(event) {
  console.log('收到飞书事件:', event.type);
  
  switch (event.type) {
    case 'im.message.receive_v1':
      return await handleFeishuMessage(event);
      
    case 'file.file.uploaded_v1':
      console.log('文件上传事件:', event.file);
      return { type: 'file_uploaded', file: event.file };
      
    default:
      console.log('未处理的事件类型:', event.type);
      return { type: 'unhandled', event_type: event.type };
  }
};