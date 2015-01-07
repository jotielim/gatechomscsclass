# GA Tech OMSCS Class

Chrome extension to automatically navigate to GA Tech OMSCS Classes

![screenshot](https://raw.githubusercontent.com/jotielim/gatechomscsclass/master/app/images/screenshot.png)

### To use:
1. Go to chrome://extensions/ and enable 'Developer mode'  
2. Click 'Load unpacked extension' button and point to /path/to/gatechomscsclass/app  
3. Login to http://buzzport.gatech.edu  
4. Click on the gatechomscsclass extension button  
5. Wait for it to finish navigating  

### Dev:
Prerequisites: node.js, npm  
$ npm install  
$ grunt debug  

### Known issues:  
1. [Priyank Patel](https://github.com/TempleOwl) mentioned that when he run the script from buzzport, it logged him out of OSCAR. If this happen, Priyank suggested to manually click on 'OSCAR' button to login to OSCAR and click the extension button again.  
2. The extension requires buzzport/oscar to be the active tab while running. If you change to another tab, the script will fail.  