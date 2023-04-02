import BsddSearch from './lib';

function callback(data: IfcEntity) {
  console.log(data);
  const viewer = document.getElementById('viewer');
  if (viewer) {
    viewer.innerHTML = `<pre class="h-100">${JSON.stringify(
      data,
      undefined,
      2,
    )}</pre>`;
  }
}

const config = {
  baseUrl: 'https://test.bsdd.buildingsmart.org',
  defaultDomains: [
    {
      value:
        'https://identifier.buildingsmart.org/uri/digibase/volkerwesselsbv-0.1',
      label: 'VolkerWessels Bouw & Vastgoed',
    },
  ],
  defaultSearch: {
    value:
      'https://identifier.buildingsmart.org/uri/digibase/volkerwesselsbv-0.1/class/vloer_beton_kanaalplaat_geisoleerd',
    label: 'vloer_beton_kanaalplaat_geisoleerd',
  },
};

function App() {
  return <BsddSearch callback={callback} config={config} />;
}

export default App;
