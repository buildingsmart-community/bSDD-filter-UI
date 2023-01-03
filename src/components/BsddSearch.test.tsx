import React from 'react'
import { render } from '@testing-library/react'
import BsddSearch from './BsddSearch'

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

test('Render BsddSearch', () => {
  it('renders without crashing', () => {
    render(<BsddSearch callback={callback} config={config} />)
  })
})
