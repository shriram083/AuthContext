import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={`App ${isDark? 'dark':'light'}`}>
        <Navbar />
        <Body />
    </div>
  );
}

export default App;
