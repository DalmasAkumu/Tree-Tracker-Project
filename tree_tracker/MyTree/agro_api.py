

# agro_api.py

import requests
from django.conf import settings

def get_ndvi_data(lat, lon):
    api_key = settings.OPENWEATHERMAP_API_KEY
    url = f"https://api.openweathermap.org/data/2.5/ndvi?lat={lat}&lon={lon}&appid={api_key}"
    
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    return None
