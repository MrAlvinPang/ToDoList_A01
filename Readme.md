## The supplied Readme from Jim's Starter Kit - Edited by Alvin Pang

## Pre Flight Check
The kit uses node modules so check your operating system and make sure that you have node installed. The webpage is best viewed in a 500x260px window.

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
 If you'd like to clean your build, (deleting .parchel-cache and dist folder), use the "clean:dev" script provided in the package.json. 
 ```bash
  npm run clean:dev
 ```

 # How it works

 On start up, you will be prompted to press he "Let's Go" button to continue. The list page has a button to add, edit, and delete to do list items. The checkbox can only be changed within the edit screen. 