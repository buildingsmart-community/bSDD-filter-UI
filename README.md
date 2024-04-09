# Introduction
This project is part of an opensource development of a series of consistent bSDD plugins and bSDD web UI.

Subprojects:
-	Web UI https://github.com/buildingsmart-community/bSDD-filter-UI
-	Revit Plugin https://github.com/buildingsmart-community/bSDD-Revit-plugin
-	Sketchup bSDD plugin https://github.com/DigiBase-VolkerWessels/SketchUp-bsDD-plugin
-	Trimble Connect bSDD plugin (Not available yet)

This project is initiated by Dutch contractors VolkerWessels and Heijmans. By starting this opensource development we believe we can help the industry structuring data. Proper usage of the buildingSMART Data Dictionary helps in getting consistent information in objects. Good information is the basis for further automation. 
The idea of our development is that we inspire our industry to include bSDD in their processes and softwareproducts natively.

# API
## Selection Component API
Functions called from UI
* window.bsddBridge.loadSettings
* window.bsddBridge.bsddSearch
* window.bsddBridge.bsddSelect
* window.bsddBridge.saveSettings
 
Functions provided by UI:
* window.updateSelection
* window.updateSettings

## Search Component API
Functions called from UI
* window.bsddBridge.save
* window.bsddBridge.cancel
* window.bsddBridge.loadSettings 

# bSDD Search Component for React

## Live demo
https://bim-tools.github.io/react-bsdd-search/

![](https://github.com/BIM-Tools/react-bsdd-search/raw/master/docs/bSDD-search-component.png)

## Usage

HTML template, make sure you include a link to bootstrap 5 css.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>bSDD React App</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

Main react javascript file

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BsddSearch } from 'react-bsdd-search'

function callback(data) {
  console.log(data)
  alert(JSON.stringify(data, null, 2))
}

const config = {
  defaultDomains: [
    {
      value: 'https://identifier.buildingsmart.org/uri/digibase/volkerwesselsbv-0.1',
      label: 'VolkerWessels Bouw & Vastgoed',
    },
  ],
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BsddSearch callback={callback} config={config} />
  </React.StrictMode>,
)
```

