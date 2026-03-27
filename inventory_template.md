# 库存Excel模板说明

## 文件要求
- **文件格式**: Excel (.xlsx 或 .xls)
- **文件位置**: 桌面 `AI-STORE` 文件夹
- **更新时间**: 每天8:00, 12:00, 15:00, 17:00自动读取

## Excel表格结构

### 工作表1: 库存总表 (Inventory)

| 列名 | 数据类型 | 说明 | 示例 |
|------|----------|------|------|
| A: 品牌 | 文本 | 产品品牌 | Schneider |
| B: 产品名称 | 文本 | 产品具体名称 | PLC模块 |
| C: 型号 | 文本 | 产品型号 | TM221CE16R |
| D: 数量 | 数字 | 当前库存数量 | 50 |
| E: 单价(USD) | 数字 | 美元单价 | 120 |
| F: 更新时间 | 日期时间 | 最后更新时间 | 2026-03-26 08:00 |
| G: 产品分类 | 文本 | 产品类别 | PLC |
| H: 产地 | 文本 | 生产国家 | France |
| I: 交货期 | 文本 | 交货时间 | 现货 |
| J: 最小起订量 | 数字 | 最小订购数量 | 1 |
| K: 产品描述 | 文本 | 产品详细描述 | 施耐德Modicon M221可编程控制器 |
| L: 技术参数 | 文本 | 主要技术参数 | 16数字输入/10继电器输出 |
| M: 图片链接 | 文本 | 产品图片URL | /images/schneider/tm221.jpg |

### 工作表2: 品牌分类 (Brands)

| 品牌 | 品牌描述 | 品牌官网 | 技术支持 |
|------|----------|----------|----------|
| Schneider | 法国施耐德电气，全球能效管理专家 | www.se.com | 提供技术文档和在线支持 |
| Siemens | 德国西门子，工业自动化领导者 | www.siemens.com | 专业技术团队支持 |
| SIKC | 国产优质伺服品牌，性价比高 | www.sikc.com | 快速响应技术支持 |

### 工作表3: 产品分类 (Categories)

| 分类代码 | 分类名称 | 描述 |
|----------|----------|------|
| PLC | 可编程控制器 | 工业控制核心设备 |
| VFD | 变频器 | 电机速度控制 |
| HMI | 人机界面 | 触摸屏操作面板 |
| SERVO | 伺服系统 | 精密运动控制 |
| SENSOR | 传感器 | 检测和测量设备 |
| SWITCH | 开关电器 | 电气控制元件 |

## Excel文件示例

### 库存数据示例行

| 品牌 | 产品名称 | 型号 | 数量 | 单价(USD) | 更新时间 | 分类 | 产地 | 交货期 |
|------|----------|------|------|-----------|----------|------|------|--------|
| Schneider | PLC模块 | TM221CE16R | 50 | 120 | 2026-03-26 08:00 | PLC | France | 现货 |
| Siemens | 变频器 | SINAMICS G120 | 30 | 350 | 2026-03-26 08:00 | VFD | Germany | 现货 |
| SIKC | 伺服驱动器 | SDA-01 | 25 | 280 | 2026-03-26 08:00 | SERVO | China | 现货 |
| Schneider | 触摸屏 | HMIGXU3512 | 15 | 450 | 2026-03-26 08:00 | HMI | France | 3天 |
| Siemens | PLC模块 | S7-1200 1214C | 40 | 320 | 2026-03-26 08:00 | PLC | Germany | 现货 |

## 自动更新机制

### GitHub Actions配置
```yaml
name: Update Inventory
on:
  schedule:
    - cron: '0 0,4,7,9 * * *'  # UTC时间 0:00, 4:00, 7:00, 9:00 (对应北京时间8:00, 12:00, 15:00, 17:00)
  workflow_dispatch:  # 手动触发

jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3
        
      - name: Download Excel from AI-STORE
        run: |
          # 这里需要配置从本地AI-STORE文件夹同步Excel文件的逻辑
          # 可以通过网络共享、FTP或云存储实现
          
      - name: Convert Excel to CSV
        run: |
          python convert_excel_to_csv.py inventory.xlsx
          
      - name: Update website data
        run: |
          cp inventory.csv _data/inventory.csv
          
      - name: Commit and push changes
        run: |
          git config user.name "GitHub Actions"
          git config user.email "actions@github.com"
          git add _data/inventory.csv
          git commit -m "Update inventory data $(date +'%Y-%m-%d %H:%M')"
          git push
```

## 产品搜索功能实现

### 搜索功能特性
1. **实时搜索**: 输入时实时显示结果
2. **多条件筛选**: 按品牌、分类、价格范围筛选
3. **模糊匹配**: 支持型号部分匹配
4. **排序功能**: 按价格、数量、更新时间排序

### 搜索界面设计
```
[搜索框] [品牌筛选] [分类筛选] [价格范围] [搜索按钮]

搜索结果:
1. Schneider TM221CE16R PLC模块 - 50件 - $120 - 现货
2. Siemens SINAMICS G120 变频器 - 30件 - $350 - 现货
3. SIKC SDA-01 伺服驱动器 - 25件 - $280 - 现货
```

## 下一步操作

### 需要用户提供
1. **实际Excel文件**: 请按照模板格式准备库存Excel文件
2. **产品图片**: 各产品的清晰图片
3. **技术文档**: 产品说明书、技术参数表
4. **价格策略**: 批量折扣、运费政策

### 自动更新配置
1. **文件同步方式**: 如何从AI-STORE文件夹获取Excel文件
2. **更新频率确认**: 四个时间点是否合适
3. **异常处理**: 文件格式错误或缺失时的处理方式

### 搜索功能细化
1. **搜索优先级**: 品牌 > 型号 > 产品名称
2. **搜索结果展示**: 列表视图或网格视图
3. **高级搜索**: 是否需要参数搜索功能