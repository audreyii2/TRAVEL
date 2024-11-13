import requests
from bs4 import BeautifulSoup

url = 'https://www.nga.gov/exhibitions/2024/paris-1874-impressionist-moment.html'
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

# Extract inline styles
inline_styles = soup.find_all(style=True)

for i, element in enumerate(inline_styles, 1):
    print(f"Inline Style {i}: {element['style']}")

# Extract styles within <style> tags
style_tags = soup.find_all('style')

for i, style_tag in enumerate(style_tags, 1):
    print(f"Style Tag {i}: {style_tag.text}")

# Extract links to external stylesheets
link_tags = soup.find_all('link', rel='stylesheet')

for i, link_tag in enumerate(link_tags, 1):
    print(f"Stylesheet {i}: {link_tag['href']}")
