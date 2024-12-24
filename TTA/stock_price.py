import requests
from bs4 import BeautifulSoup

# ฟังก์ชันดึงข้อมูลราคาหุ้น
def get_stock_price(symbol):
    url = f"https://www.google.com/finance/quote/{symbol}:BKK"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.text, 'html.parser')

    # ดึงราคาหุ้น
    price_element = soup.find('div', class_='YMlKec fxKbKc')
    if price_element:
        return price_element.text
    return "Price not found"

# ทดลองดึงข้อมูล
symbol = "TTA"
price = get_stock_price(symbol)
print(f"The price of {symbol} is: {price}")
