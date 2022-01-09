import './App.scss';
import NavBar from './components/nav-bar/nav-bar.component';
import Home from './sections/home/home.section';
import CallMessage from './components/call-message/call-message.component';
import SecondSection from './sections/second-section/second-section.section';
import ReactMessage from './components/react-message/react-message.component';
import ContactSection from './sections/contact-section/contact-section.component';
import CallMessageEmail from './components/call-email-message/call-message-email.component';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-bg-image">
        <Home />
      </header>
      <CallMessage />
      <SecondSection />
      <ContactSection />
      <CallMessageEmail />
      <ReactMessage />
    </div>
  );
}

export default App;
