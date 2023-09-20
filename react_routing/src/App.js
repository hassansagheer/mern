import './style.css';
import HomePage from './HomePage';
import AboutMe from './AboutMe';
import Contact from './Contact';
import MyVideo from './MyVideo';
import { Routes,Route,Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <nav className='nav'>
        <Link to='/' className='nav-item'>Home</Link>
        <Link to='/about-me' className='nav-item'>About Me</Link>
        <Link to='/contact' className='nav-item'>Contact</Link>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <MyVideo />
    </div>
  );
}

export default App;
