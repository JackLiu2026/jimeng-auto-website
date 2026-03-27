#!/usr/bin/env python3
"""
库存数据更新脚本
从本地AI-STORE文件夹读取Excel文件，转换为网站使用的JSON格式
"""

import pandas as pd
import os
import json
import sys
from datetime import datetime
import glob

def read_excel_files(excel_dir):
    """读取Excel文件并合并数据"""
    excel_files = glob.glob(os.path.join(excel_dir, "*.xls"))
    
    if not excel_files:
        print(f"在目录 {excel_dir} 中未找到Excel文件")
        return None
    
    all_data = []
    
    for file_path in excel_files:
        try:
            # 读取Excel文件
            df = pd.read_excel(file_path)
            print(f"读取文件: {os.path.basename(file_path)}")
            print(f"  列名: {df.columns.tolist()}")
            print(f"  行数: {len(df)}")
            
            # 添加文件名作为品牌标识
            brand = os.path.basename(file_path).replace('.xls', '')
            df['品牌'] = brand
            
            all_data.append(df)
            
        except Exception as e:
            print(f"读取文件 {file_path} 时出错: {e}")
    
    if all_data:
        combined_df = pd.concat(all_data, ignore_index=True)
        return combined_df
    else:
        print("没有读取到任何数据")
        return None

def process_inventory_data(df):
    """处理库存数据，添加英文翻译等"""
    
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
        '模块': 'Module',
        '接触器': 'Contactor',
        '变频器': 'Frequency Converter',
        'PLC模块': 'PLC Module'
    }
    
    # 添加英文列
    df['brand_en'] = df['品牌'].map(brand_mapping)
    df['product_name_en'] = df['品名'].map(product_name_mapping)
    
    # 处理缺失的翻译
    df['brand_en'] = df['brand_en'].fillna(df['品牌'])
    df['product_name_en'] = df['product_name_en'].fillna(df['品名'])
    
    df['last_updated'] = datetime.now().strftime('%Y-%m-%d %H:%M')
    
    return df

def save_to_json(df, output_path):
    """保存为JSON格式"""
    
    # 按品牌分组
    brands = {}
    for brand in df['brand_en'].unique():
        brand_data = df[df['brand_en'] == brand]
        brands[brand] = brand_data.to_dict('records')
    
    # 创建JSON结构
    json_data = {
        'last_updated': datetime.now().strftime('%Y-%m-%d %H:%M'),
        'total_items': len(df),
        'brands': brands,
        'all_items': df[['brand_en', '型号', 'product_name_en', '数量', '单价', 'last_updated']].rename(
            columns={'型号': 'model', '数量': 'quantity', '单价': 'price'}
        ).to_dict('records')
    }
    
    # 保存JSON文件
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(json_data, f, ensure_ascii=False, indent=2)
    
    print(f"已保存JSON数据到: {output_path}")
    print(f"总产品数: {len(df)}")
    print(f"品牌: {list(brands.keys())}")
    
    return json_data

def main():
    """主函数"""
    # 设置路径
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(script_dir)
    data_dir = os.path.join(project_root, '_data')
    
    # 本地Excel文件目录（需要根据实际情况修改）
    excel_dir = os.path.expanduser("~/Desktop/AI-STORE")
    
    # 输出文件路径
    output_json = os.path.join(data_dir, 'inventory.json')
    output_csv = os.path.join(data_dir, 'inventory.csv')
    
    print("开始更新库存数据...")
    print(f"Excel文件目录: {excel_dir}")
    print(f"输出JSON文件: {output_json}")
    
    # 读取Excel文件
    df = read_excel_files(excel_dir)
    if df is None:
        print("无法读取Excel文件，使用示例数据")
        # 这里可以添加示例数据
        return
    
    # 处理数据
    df = process_inventory_data(df)
    
    # 保存JSON
    save_to_json(df, output_json)
    
    # 同时保存CSV格式
    df[['brand_en', '型号', 'product_name_en', '数量', '单价', 'last_updated']].rename(
        columns={'型号': 'model', '数量': 'quantity', '单价': 'price'}
    ).to_csv(output_csv, index=False, encoding='utf-8-sig')
    
    print(f"已保存CSV数据到: {output_csv}")
    print("库存数据更新完成!")

if __name__ == "__main__":
    main()