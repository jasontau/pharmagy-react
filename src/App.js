import React from 'react';
import './App.css';
import Screen from './components/screen';
import Controls from './components/controls';
import Patients from './pages/patients';
import { StateProvider } from './state';

function App() {
  return (
    <StateProvider>
      <div className='App'>
        <header className='App-header'>
          <Screen>
            <Patients />
          </Screen>
          <Controls/>
        </header>
      </div>
    </StateProvider>
  );
}

export default App;
