import logo from './logo.svg';
import './App.css';

import useResponsive, { screenTypes } from './hooks/useResponsive';

function App() {
  const screenType = useResponsive();
  console.log(screenType);

  return (
    <div className="App">
      <header className="App-header">
        {screenType === screenTypes.MOBILE && <div>Show on mobile</div>}
        {screenType === screenTypes.TABLET && <div>Show on tablet</div>}
        {screenType === screenTypes.DESKTOP && <div>Show on desktop</div>}
        {!screenType && <div>Show on a huge screen</div>}
      </header>
    </div>
  );
}

export default App;
