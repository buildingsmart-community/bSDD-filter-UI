import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


function callback(data: any) {
  alert(data);
}

const config = {
  defaultDomains: [{
    "value": "https://identifier.buildingsmart.org/uri/digibase/volkerwesselsbv-0.1",
    "label": "VolkerWessels Bouw & Vastgoed"
  }]
}

test('renders learn react link', () => {
  render(<App
    callback={callback}
    config={config}
  />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
