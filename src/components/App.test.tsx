import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

function callback(data: any) {
  alert(data)
}

const config = {
  defaultDomains: [
    {
      value: 'https://identifier.buildingsmart.org/uri/digibase/volkerwesselsbv-0.1',
      label: 'VolkerWessels Bouw & Vastgoed',
    },
  ],
}

test('Render App', () => {
  it('renders without crashing', () => {
    render(<App callback={callback} config={config} />)
  })
})
