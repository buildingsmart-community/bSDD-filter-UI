# Introduction
This project is part of an open-source development of a series of consistent bSDD plugins and bSDD web UI.

Subprojects:
- Web UI: https://github.com/buildingsmart-community/bSDD-filter-UI
- Revit Plugin: https://github.com/buildingsmart-community/bSDD-Revit-plugin
- Sketchup bSDD plugin: https://github.com/DigiBase-VolkerWessels/SketchUp-bsDD-plugin
- Trimble Connect bSDD plugin (Not available yet)

This project is initiated by Dutch contractors VolkerWessels and Heijmans. By starting this open-source development, we believe we can help the industry structure data. Proper usage of the buildingSMART Data Dictionary helps in getting consistent information in objects. Good information is the basis for further automation. The idea of our development is to inspire our industry to include bSDD in their processes and software products natively.

# API
## Selection Component API
Functions called from UI:
* `window.bsddBridge.loadSettings`
* `window.bsddBridge.bsddSearch`
* `window.bsddBridge.bsddSelect`
* `window.bsddBridge.saveSettings`
 
Functions provided by UI:
* `window.updateSelection`
* `window.updateSettings`

## Search Component API
Functions called from UI:
* `window.bsddBridge.save`
* `window.bsddBridge.cancel`
* `window.bsddBridge.loadSettings`

# bSDD Search Component for React

## Live demo of the search UI
https://buildingsmart-community.github.io/bSDD-filter-UI/main/bsdd_search_settings/

## Live demo of the combined UI
https://buildingsmart-community.github.io/bSDD-filter-UI/main/

## Usage

### Dependencies
To use the bSDD web UI components, you need to have the following dependencies installed in your project:
- React 18 or higher
- ReactDOM 18 or higher
- @mantine/core
- @mantine/hooks
- @reduxjs/toolkit
- react-redux
- react-router-dom
- use-query-params
- mantine-react-table
- clsx
- dayjs
- i18next
- react-i18next
- react-select

You can install these dependencies using yarn:

```bash
yarn add react react-dom @mantine/core @mantine/hooks @reduxjs/toolkit react-redux react-router-dom use-query-params mantine-react-table clsx dayjs i18next react-i18next react-select
```

### Entry Points for Different Client Applications

#### Revit and Tekla (CefSharp)
For Revit and Tekla applications using CefSharp, the entry point is designed to integrate with the host application's settings and data. The `useCefSharpBridge` hook is used to communicate with the host application.

#### Standalone Search Page with Settings
For a standalone search page with settings, use the `BsddSearchSettingsLoader` component. This component provides a search interface along with settings management.

#### Standalone Selection Page with Settings
For a standalone selection page with settings, use the `BsddSelectionSettingsLoader` component. This component provides a selection interface along with settings management.

#### Combined Page for Single Window Applications (e.g., Trimble Connect)
For applications where only a single window can be used, such as Trimble Connect, use the `BsddCombinedLoader` component. This component combines both search and selection interfaces along with settings management.

## Example Usage

### Revit and Tekla (CefSharp)
```tsx
import { useCefSharpBridge } from './lib/common/bsddBridge/useCefSharpBridge';

function App() {
  const apiFunctions = useCefSharpBridge();

  return (
    <ApiFunctionsProvider value={apiFunctions}>
      <BsddSearch />
    </ApiFunctionsProvider>
  );
}

export default App;
```

### Standalone Search Page with Settings
```tsx
import BsddSearchSettingsLoader from './BsddSearchSettingsLoader';

function Main() {
  return (
    <AppProvider>
      <BsddSearchSettingsLoader />
    </AppProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />);
```

### Standalone Selection Page with Settings
```tsx
import BsddSelectionSettingsLoader from './BsddSelectionSettingsLoader';

function Main() {
  return (
    <AppProvider>
      <BsddSelectionSettingsLoader />
    </AppProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />);
```

### Combined Page for Single Window Applications (e.g., Trimble Connect)
```tsx
import BsddCombinedLoader from './BsddCombinedLoader';

function Main() {
  return (
    <AppProvider>
      <BsddCombinedLoader />
    </AppProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />);
```

## Contributing
We welcome contributions from the community. Please feel free to open issues or submit pull requests.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.