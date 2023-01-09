import React from 'react'
import ReactDOM from 'react-dom/client'
import BsddSearch from './BsddSearch'

export function insertBsddSearch(domElement: HTMLElement, callback: any, config: any) {
  const root = ReactDOM.createRoot(domElement as HTMLElement)
  root.render(
    <React.StrictMode>
      <BsddSearch callback={callback} config={config} />
    </React.StrictMode>,
  )
}

export default BsddSearch
