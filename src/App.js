import './App.scss';
import NavBar from './components/nav-bar/nav-bar.component';
import Home from './sections/home/home.section';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-bg-image">
        <Home />
      </header>
    </div>
  );
}

export default App;
