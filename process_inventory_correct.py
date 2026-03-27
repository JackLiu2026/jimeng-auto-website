import pandas as pd
import os
import json
from datetime import datetime

def process_inventory_correct():
    # 读取原始CSV文件
    desktop_path = os.path.join(os.path.expanduser("~"), "Desktop", "AI-STORE")
    csv_path = os.path.join(desktop_path, "inventory_combined.csv")
    
    # 读取CSV文件，使用UTF-8-sig编码
    df = pd.read_csv(csv_path, encoding='utf-8-sig')
    
    print("原始数据列名:", df.columns.tolist())
    print("原始数据:")
    print(df)
    
    # 品牌映射
    brand_mapping = {
        'SICK': 'SICK',
        '施耐德': 'Schneider',
        '西门子': 'Siemens'
    }
    
    # 产品名称映射
    product_name_mapping = {
        '编码器': 'Encoder',
        '光电传感器': 'Photoelectric Sensor',
        '扫描仪': 'Scanner',
        '断路器': 'Circuit Breaker',
        '模块': 'Module'
    }
    
    # 添加英文列
    df['brand_en'] = df['品牌'].map(brand_mapping)
    df['product_name_en'] = df['品名'].map(product_name_mapping)
    df['last_updated'] = datetime.now().strftime('%Y-%m-%d %H:%M')
    
    print("\n处理后的数据:")
    print(df[['品牌', 'brand_en', '型号', '品名', 'product_name_en', '数量', '单价', 'last_updated']])
    
    # 按品牌分组
    brands = {}
    for brand in df['brand_en'].unique():
        brand_data = df[df['brand_en'] == brand]
        brands[brand] = brand_data.to_dict('records')
    
    # 保存为JSON格式
    json_path = os.path.join('jimeng-auto-website', '_data', 'inventory.json')
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump({
            'last_updated': datetime.now().strftime('%Y-%m-%d %H:%M'),
            'total_items': len(df),
            'brands': brands,
            'all_items': df[['brand_en', '型号', 'product_name_en', '数量', '单价', 'last_updated']].rename(
                columns={'型号': 'model', '数量': 'quantity', '单价': 'price'}
            ).to_dict('records')
        }, f, ensure_ascii=False, indent=2)
    
    print(f"\n已处理数据并保存到: {json_path}")
    print(f"总产品数: {len(df)}")
    print(f"品牌: {list(brands.keys())}")
    
    # 同时保存为CSV格式
    csv_output_path = os.path.join('jimeng-auto-website', '_data', 'inventory.csv')
    df[['brand_en', '型号', 'product_name_en', '数量', '单价', 'last_updated']].rename(
        columns={'型号': 'model', '数量': 'quantity', '单价': 'price'}
    ).to_csv(csv_output_path, index=False, encoding='utf-8-sig')
    print(f"CSV格式保存到: {csv_output_path}")
    
    return df

if __name__ == "__main__":
    process_inventory_correct()