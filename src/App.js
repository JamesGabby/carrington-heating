import './App.scss';
import NavBar from './components/nav-bar/nav-bar.component';
import Home from './sections/home/home.section';
import CallMessage from './components/call-message/call-message.component';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-bg-image">
        <Home />
      </header>
      <CallMessage />
    </div>
  );
}

export default App;
