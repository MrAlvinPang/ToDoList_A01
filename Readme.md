# Jim Hortons 
Front end javascript starter kit.
```bash
.
├── Readme.md
├── package-lock.json
├── package.json
├── src
│   ├── assets
│   │   ├── svg
│   ├── css
│   ├── index.html
│   ├── js
│   │   └── index.js
│   └── scss
└── svgo.config.json
```

## Pre Flight Check
The kit uses node modules so check you operating system and make sure that you have node installed.

Download the starter kit and install the required node modules. You should see some version of node echoed back __v15.14.0__. Just make sure that the node version your using is minimum of v12.0.0
```bash
  node -v
```
If you have node installed you will have npm installed. You can check the version of npm using
```bash
  npm -v
```


## NPM Scripts
Parcel includes a development server and places your development files into a folder called __dist__. It will also create a folder called __.parcel-cache__. To run the development server
```bash
  npm start
```  


Parcel will also create a production build. The build files are placed inside __dist__ folder. 
```bash
  npm run build
```
If you want to change the production folder to __public__ instead of __dist__ the use the dist-dir flag
```bash
  npm run build --dist-dir ./public
```


 ## SCSS or CSS
 It's up to you how you want to manage your css development. The kit support two style methods. Plain old css where you will add your styles to the css folder and attach the styles to the web document using the link element.

 ```html
  <link rel="stylesheet" href="css/styles.css">
 ```

__SCSS (default)__
The kit is set up to work with scss. In order to get the Parcel bundler to compile your scss files on save you need to make sure that you link the styles.scss file instead of the styles.css.

 ```html
    <link rel="stylesheet" href="scss/styles.scss">
 ```

 ### ES Modules
If your using ES Modules in your project, then make sure to add the type attribute and set it to module. You can create another script tag for nomodule support if required. The script element has the defer attribute attached use either async or defer which ever suits your use case.

 ```html
    <script type="module" src="js/index.js" defer></script>
 ```
 