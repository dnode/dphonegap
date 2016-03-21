[![Dependency Status](https://david-dm.org/dnode/dphonegap.svg)](https://david-dm.org/dnode/dphonegap)
[![devDependency Status](https://david-dm.org/dnode/dphonegap/dev-status.svg)](https://david-dm.org/dnode/dphonegap#info=devDependencies)

# Example
## dphonegap.json (dependency)
```json
{
  "copyfiles": [
    "..."
  ],
  "index": "..."
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
## dphonegap.json (project)
```json
{
  "javascripts": [ "cordova.js" ]
}
```
