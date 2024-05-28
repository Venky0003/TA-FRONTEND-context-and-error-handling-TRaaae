import React from 'react';
import SwitchButton from './Button';
import Header from './Header';
import Main from './Main';
import { DarkModeProvider,DarkModeContext} from './DarkModeContext';

class App extends React.Component {
 
  render() {
    
    return (
      <DarkModeProvider>
        <AppContent />
      </DarkModeProvider>
    );
  }
}

function AppContent() {

  return (
    <DarkModeContext.Consumer>
      {({ isDarkMode}) => (
        <div className={`bg ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
          <Header />
          <Main />
          <SwitchButton />
        </div>
      )}
    </DarkModeContext.Consumer>
  );
}

export default App;
