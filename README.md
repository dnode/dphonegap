[![Dependency Status](https://david-dm.org/dnode/dphonegap.svg)](https://david-dm.org/dnode/dphonegap)
[![devDependency Status](https://david-dm.org/dnode/dphonegap/dev-status.svg)](https://david-dm.org/dnode/dphonegap#info=devDependencies)

# Example
## phonegap.json (dependency)
```json
{
  "copyfiles": [
    "..."
  ],
  "icon": "res/icon.png",
  "index": "www/index.html"
}
```
## package.json (project)
```json
{
  "scripts": {
    "postinstall": "dphonegap %dependency%"
  },
  "dependencies": {
    "%dependency%": ""
  }
}
```
## phonegap.json (project)
```json
{
  "javascripts": [
    "cordova.js"
  ],
  "icons": {
    "path": "res/icon",
    "formats": [
      { "destination": "...", "width": ..., "height": ... }
    ]
  }
}
```
