import React from 'react';
import './App.css';
import Screen from './components/screen';
import Patients from './pages/patients';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Screen>

          <Patients />
        </Screen>
      </header>
    </div>
  );
}

export default App;
