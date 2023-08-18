// Navbar.js
import { useState ,useEffect} from 'react';
import './css/Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/digitomizeLogo.png'
import { getUserNameFromCookie } from '../../api';

function Navbar() {
  const [name, setName] = useState(getUserNameFromCookie())
  const [path, setPath] = useState("/login")
  const [btnMessage, setBtnMessage] = useState("Login")
  const[isMenuActive, setActive]=useState(false);
 

  function toggleActive(){
    console.log("clicekd");
    if(isMenuActive){
      setActive(false);
    }
    else{
      setActive(true);
    }
  }

  useEffect(() => {


    document.body.className = isMenuActive ? "scrollOff": '';
  }, [isMenuActive]);

  useEffect(() => {
    if(name) {
      setBtnMessage(name)
      setPath("/user/dashboard")
    }
  }, [name])
  

  return (
    <nav>
      <div className='navbar'>


        <div className="brand">
        <Link to="/" className='nav-brand-link'>
          
            <img src={logo} alt="Logo" /> 
        </Link>
        </div>

        <div className={`nav-link  ${isMenuActive ? 'active' : ''}`}>
          <Link to="/contests" className='link'>
            <li onClick={()=>toggleActive()} className='contents'>Contests</li>
          </Link>
          <Link to="https://github.com/pranshugupta54/digitomize"className='link' >
            <li onClick={()=>toggleActive()} className='contents'>Contribute</li>
          </Link>
          <Link to={path} className='link'>
            <li  onClick={()=>toggleActive()} className='contents'>{btnMessage}</li>
          </Link>
        </div>

        <div onClick={()=>toggleActive()} className={`closeMenu ${isMenuActive ? 'active' : ''}`}>close</div>

      <div onClick={()=>toggleActive()} className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
