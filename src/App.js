import './App.scss';
import Home from './components/Home/Home.js'
import About from './components/About/About.js'
import Contact from './components/Contact/Contact.js'
import More from './components/More/More.js'
import { Route, Routes } from 'react-router-dom'
import { HOME, ABOUT, CONTACT, MORE } from './utils/routes.js'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='center'>
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={ABOUT} element={<About />} />
          <Route path={CONTACT} element={<Contact />} />
          <Route path={MORE} element={<More />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
