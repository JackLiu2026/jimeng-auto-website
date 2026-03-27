import pandas as pd
import os
import json
from datetime import datetime

def fix_inventory_data():
    # 读取原始CSV文件
    desktop_path = os.path.join(os.path.expanduser("~"), "Desktop", "AI-STORE")
    csv_path = os.path.join(desktop_path, "inventory_combined.csv")
    
    # 读取CSV文件，指定编码
    df = pd.read_csv(csv_path, encoding='utf-8-sig')
    
    print("原始数据:")
    for i, row in df.iterrows():
        print(f"行 {i}: {row.tolist()}")
    
    # 创建新的DataFrame
    new_data = []
    
    for i, row in df.iterrows():
        brand = str(row.iloc[0]).strip()
        model = str(row.iloc[1]).strip()
        product_name = str(row.iloc[2]).strip()
        quantity = int(row.iloc[3])
        price = int(row.iloc[4])
        
        # 品牌映射
        brand_mapping = {
            'SICK': 'SICK',
            'ʩ�͵�': 'Schneider',
            '������': 'Siemens'
        }
        
        # 产品名称映射
        product_name_mapping = {
            '������': 'Encoder',
            '��紫����': 'Photoelectric Sensor',
            'ɨ����': 'Scanner',
            '��·��': 'Circuit Breaker',
            'ģ��': 'Module'
        }
        
        brand_en = brand_mapping.get(brand, brand)
        product_name_en = product_name_mapping.get(product_name, product_name)
        
        new_data.append({
            'brand': brand,
            'brand_en': brand_en,
            'model': model,
            'product_name': product_name,
            'product_name_en': product_name_en,
            'quantity': quantity,
            'price': price,
            'last_updated': datetime.now().strftime('%Y-%m-%d %H:%M')
        })
    
    new_df = pd.DataFrame(new_data)
    
    print("\n处理后的数据:")
    print(new_df)
    
    # 按品牌分组
    brands = {}
    for brand in new_df['brand_en'].unique():
        brand_data = new_df[new_df['brand_en'] == brand]
        brands[brand] = brand_data.to_dict('records')
    
    # 保存为JSON格式
    json_path = os.path.join('jimeng-auto-website', '_data', 'inventory.json')
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump({
            'last_updated': datetime.now().strftime('%Y-%m-%d %H:%M'),
            'total_items': len(new_df),
            'brands': brands,
            'all_items': new_df[['brand_en', 'model', 'product_name_en', 'quantity', 'price', 'last_updated']].to_dict('records')
        }, f, ensure_ascii=False, indent=2)
    
    print(f"\n已处理数据并保存到: {json_path}")
    print(f"总产品数: {len(new_df)}")
    print(f"品牌: {list(brands.keys())}")
    
    # 同时保存为CSV格式
    csv_output_path = os.path.join('jimeng-auto-website', '_data', 'inventory.csv')
    new_df[['brand_en', 'model', 'product_name_en', 'quantity', 'price', 'last_updated']].to_csv(csv_output_path, index=False, encoding='utf-8-sig')
    print(f"CSV格式保存到: {csv_output_path}")
    
    return new_df

if __name__ == "__main__":
    fix_inventory_data()