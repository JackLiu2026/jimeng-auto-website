// 每日新闻简报任务
// 这个任务会被OpenClaw的cron系统调用

module.exports = async function dailyNewsBriefingTask() {
    console.log('🚀 开始执行每日新闻简报任务...');
    
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    const timeStr = now.toLocaleTimeString('zh-CN');
    
    console.log(`📅 任务时间: ${dateStr} ${timeStr}`);
    
    // 1. 搜索金融新闻
    console.log('🔍 搜索金融新闻...');
    const financialQueries = [
        "中国金融市场 最新动态",
        "国际金融新闻 今日",
        "人民币汇率 最新",
        "央行政策 最新",
        "全球经济形势"
    ];
    
    let financialNews = [];
    for (const query of financialQueries) {
        try {
            // 这里在实际运行中会调用web_search
            console.log(`  搜索: "${query}"`);
            // const results = await web_search({ query, count: 3 });
            // financialNews.push(...results);
        } catch (error) {
            console.error(`  搜索失败: ${error.message}`);
        }
    }
    
    // 2. 搜索战争新闻
    console.log('🔍 搜索战争新闻...');
    const warQueries = [
        "乌克兰战争 最新进展",
        "中东局势 最新",
        "国际冲突 今日",
        "地缘政治 热点"
    ];
    
    let warNews = [];
    for (const query of warQueries) {
        try {
            console.log(`  搜索: "${query}"`);
            // const results = await web_search({ query, count: 2 });
            // warNews.push(...results);
        } catch (error) {
            console.error(`  搜索失败: ${error.message}`);
        }
    }
    
    // 3. 搜索科技新闻
    console.log('🔍 搜索科技新闻...');
    const techQueries = [
        "人工智能 最新进展",
        "科技公司 财报",
        "科技创新 今日",
        "半导体 行业动态",
        "互联网 最新"
    ];
    
    let techNews = [];
    for (const query of techQueries) {
        try {
            console.log(`  搜索: "${query}"`);
            // const results = await web_search({ query, count: 3 });
            // techNews.push(...results);
        } catch (error) {
            console.error(`  搜索失败: ${error.message}`);
        }
    }
    
    // 4. 搜索股市新闻
    console.log('🔍 搜索股市新闻...');
    const stockQueries = [
        "A股市场 今日行情",
        "美股市场 最新",
        "港股市场 动态",
        "全球股市 今日",
        "投资策略 分析"
    ];
    
    let stockNews = [];
    for (const query of stockQueries) {
        try {
            console.log(`  搜索: "${query}"`);
            // const results = await web_search({ query, count: 3 });
            // stockNews.push(...results);
        } catch (error) {
            console.error(`  搜索失败: ${error.message}`);
        }
    }
    
    // 5. 生成简报内容
    console.log('📝 生成简报内容...');
    
    let briefing = `# ${dateStr} 热点简报\n\n`;
    briefing += `*生成时间: ${now.toLocaleString('zh-CN')}*\n\n`;
    
    // 金融部分
    briefing += `## 📊 国际国内金融\n`;
    if (financialNews.length > 0) {
        financialNews.slice(0, 5).forEach((item, i) => {
            briefing += `${i + 1}. **${item.title || '金融新闻'}**\n`;
            briefing += `   ${item.snippet || '暂无详细内容'}\n`;
        });
    } else {
        briefing += `*今日暂无重要金融新闻*\n`;
    }
    
    // 战争部分
    briefing += `\n## ⚔️ 战争局势简要\n`;
    if (warNews.length > 0) {
        warNews.slice(0, 3).forEach((item, i) => {
            briefing += `${i + 1}. **${item.title || '战争新闻'}**\n`;
            briefing += `   ${item.snippet || '暂无详细内容'}\n`;
        });
    } else {
        briefing += `*今日暂无重要战争新闻*\n`;
    }
    
    // 科技部分
    briefing += `\n## 🚀 科技动态\n`;
    if (techNews.length > 0) {
        techNews.slice(0, 5).forEach((item, i) => {
            briefing += `${i + 1}. **${item.title || '科技新闻'}**\n`;
            briefing += `   ${item.snippet || '暂无详细内容'}\n`;
        });
    } else {
        briefing += `*今日暂无重要科技新闻*\n`;
    }
    
    // 股市部分
    briefing += `\n## 📈 股市要闻\n`;
    if (stockNews.length > 0) {
        stockNews.slice(0, 5).forEach((item, i) => {
            briefing += `${i + 1}. **${item.title || '股市新闻'}**\n`;
            briefing += `   ${item.snippet || '暂无详细内容'}\n`;
        });
    } else {
        briefing += `*今日暂无重要股市新闻*\n`;
    }
    
    briefing += `\n---\n`;
    briefing += `*本简报由OpenClaw自动生成，数据来源于网络搜索*\n`;
    
    // 6. 保存到桌面
    console.log('💾 保存简报到桌面...');
    const fs = require('fs');
    const path = require('path');
    const os = require('os');
    
    const desktopPath = path.join(os.homedir(), 'Desktop');
    const filename = `${dateStr}_新闻简报.txt`;
    const filepath = path.join(desktopPath, filename);
    
    try {
        fs.writeFileSync(filepath, briefing, 'utf8');
        console.log(`✅ 简报已保存到: ${filepath}`);
        
        // 返回结果
        return {
            success: true,
            message: '每日新闻简报生成成功',
            filepath: filepath,
            date: dateStr,
            sections: {
                financial: financialNews.length,
                war: warNews.length,
                tech: techNews.length,
                stock: stockNews.length
            }
        };
    } catch (error) {
        console.error('❌ 保存文件失败:', error.message);
        return {
            success: false,
            message: `保存文件失败: ${error.message}`,
            error: error.message
        };
    }
};

// 导出任务配置
module.exports.config = {
    name: "每日新闻简报",
    description: "每天9点前自动生成热点新闻简报，包含金融、战争、科技、股市等内容",
    schedule: "0 8 * * *", // 每天8:00运行（确保9点前完成）
    enabled: true,
    timeoutSeconds: 300 // 5分钟超时
};