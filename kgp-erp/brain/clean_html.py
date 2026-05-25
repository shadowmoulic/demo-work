import os
import re

def clean_file(filepath, outpath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract line-content cells
    matches = re.findall(r'<td class="line-content">(.*?)</td>', content, re.DOTALL)
    
    with open(outpath, 'w', encoding='utf-8') as out:
        for match in matches:
            # Remove html tags
            line = re.sub(r'<[^>]+>', '', match)
            # Unescape html entities
            line = line.replace('&lt;', '<').replace('&gt;', '>').replace('&amp;', '&').replace('&quot;', '"').replace('&#39;', "'")
            out.write(line + '\n')

clean_file('view-source_https___erp.iitkgp.ac.in_IIT_ERP3_menulist.htm_module_id=16.html', 'parsed_menulist.txt')
clean_file('view-source_https___erp.iitkgp.ac.in_IIT_ERP3_home.htm', 'parsed_home.txt')
