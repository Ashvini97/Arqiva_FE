import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="app-logo-title">
          <div className="text-logo">VT</div>
          <div>
            <h1 className="app-title">VTube</h1>
            <p className="app-subtitle">Video Tube</p>
          </div>
        </div>
      </header>
      <HomePage />
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
