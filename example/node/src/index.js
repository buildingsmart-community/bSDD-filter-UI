import React from 'react'
import ReactDOM from 'react-dom/client'
import BsddSearch from 'react-bsdd-search'

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
root.render(<BsddSearch callback={callback} config={config} />)
