import React from 'react';
import './App.css';
import Screen from './components/screen';
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
        </header>
      </div>
    </StateProvider>
  );
}

export default App;
