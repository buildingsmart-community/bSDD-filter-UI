// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import BsddSearch from './components'

// function callback(data: any) {
//   console.log(data)
//   const viewer = document.getElementById('viewer')
//   if (viewer) {
//     viewer.innerHTML = '<pre class="h-100">' + JSON.stringify(data, undefined, 2) + '</pre>'
//   }
// }

// const config = {
//   defaultDomains: [
//     {
//       value: 'https://identifier.buildingsmart.org/uri/digibase/volkerwesselsbv-0.1',
//       label: 'VolkerWessels Bouw & Vastgoed',
//     },
//   ],
// }

// const root = ReactDOM.createRoot(document.getElementById('bsdd') as HTMLElement)

// root.render(
//   <React.StrictMode>
//     <BsddSearch callback={callback} config={config} />
//   </React.StrictMode>,
// )

export * from './components'
