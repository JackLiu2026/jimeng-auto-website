import pandas as pd
import os
import json
from datetime import datetime

def process_inventory_data():
    # 读取原始CSV文件
    desktop_path = os.path.join(os.path.expanduser("~"), "Desktop", "AI-STORE")
    csv_path = os.path.join(desktop_path, "inventory_combined.csv")
    
    # 读取CSV文件，指定编码
    df = pd.read_csv(csv_path, encoding='utf-8-sig')
    
    print("原始数据列名:", df.columns.tolist())
    print("数据类型:", df.dtypes)
    
    # 直接使用原始列名，但创建新的英文列
    df['brand'] = df.iloc[:, 0]  # 第一列是品牌
    df['model'] = df.iloc[:, 1]  # 第二列是型号
    df['product_name'] = df.iloc[:, 2]  # 第三列是产品名称
    df['quantity'] = df.iloc[:, 3]  # 第四列是数量
    df['price'] = df.iloc[:, 4]  # 第五列是价格
    
    print("处理后的数据:")
    print(df[['brand', 'model', 'product_name', 'quantity', 'price']])
    
    # 添加品牌英文名
    brand_mapping = {
        'SICK': 'SICK',
        'ʩ�͵�': 'Schneider',
        '������': 'Siemens'
    }
    
    df['brand_en'] = df['brand'].map(brand_mapping)
    
    # 添加产品英文名
    product_name_mapping = {
        '������': 'Sensor',
        '��紫����': 'Photoelectric Sensor',
        'ɨ����': 'Scanner',
        '��·��': 'Circuit Breaker',
        'ģ��': 'Module'
    }
    
    df['product_name_en'] = df['product_name'].map(product_name_mapping)
    
    # 添加更新时间
    df['last_updated'] = datetime.now().strftime('%Y-%m-%d %H:%M')
    
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
            'all_items': df[['brand_en', 'model', 'product_name_en', 'quantity', 'price', 'last_updated']].to_dict('records')
        }, f, ensure_ascii=False, indent=2)
    
    print(f"\n已处理数据并保存到: {json_path}")
    print(f"总产品数: {len(df)}")
    print(f"品牌: {list(brands.keys())}")
    
    # 同时保存为CSV格式
    csv_output_path = os.path.join('jimeng-auto-website', '_data', 'inventory.csv')
    df[['brand_en', 'model', 'product_name_en', 'quantity', 'price', 'last_updated']].to_csv(csv_output_path, index=False, encoding='utf-8-sig')
    print(f"CSV格式保存到: {csv_output_path}")
    
    return df

if __name__ == "__main__":
    process_inventory_data()