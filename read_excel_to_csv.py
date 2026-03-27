import pandas as pd
import os
import glob

def read_excel_files():
    desktop_path = os.path.join(os.path.expanduser("~"), "Desktop", "AI-STORE")
    excel_files = glob.glob(os.path.join(desktop_path, "*.xls"))
    
    all_data = []
    
    for file_path in excel_files:
        try:
            # 读取Excel文件
            df = pd.read_excel(file_path)
            print(f"读取文件: {os.path.basename(file_path)}")
            print(f"列名: {df.columns.tolist()}")
            print(f"行数: {len(df)}")
            print(f"前5行数据:")
            print(df.head())
            print("-" * 50)
            
            # 添加文件名作为品牌标识
            brand = os.path.basename(file_path).replace('.xls', '')
            df['品牌'] = brand
            
            all_data.append(df)
            
        except Exception as e:
            print(f"读取文件 {file_path} 时出错: {e}")
    
    # 合并所有数据
    if all_data:
        combined_df = pd.concat(all_data, ignore_index=True)
        
        # 保存为CSV
        csv_path = os.path.join(desktop_path, "inventory_combined.csv")
        combined_df.to_csv(csv_path, index=False, encoding='utf-8-sig')
        print(f"已合并数据并保存到: {csv_path}")
        print(f"总行数: {len(combined_df)}")
        print(f"列结构: {combined_df.columns.tolist()}")
        
        return combined_df
    else:
        print("没有读取到任何数据")
        return None

if __name__ == "__main__":
    read_excel_files()