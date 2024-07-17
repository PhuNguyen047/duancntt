import './Navbar.css';
import icon1 from '../../assets/images/icon1.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../ThemeColor/ThemeColor';

const Navbar = ({ isLoggedIn }) => {
    const [isMobile, setIsMobile] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState('');

    useEffect(() => {
        if (isLoggedIn) {
            const storedUsername = localStorage.getItem('username');
            if (storedUsername) {
                setUsername(storedUsername);
            }
        }
    }, [isLoggedIn]);

    const handleLogoClick = () => {
        if (isLoggedIn) {
            navigate('/mainpage');
        } else {
            navigate('/');
        }
    };

    const handleDropdown = (e) => {
        if (e.target.value === '/logout') {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('username');
            navigate('/');
        } else {
            navigate(e.target.value);
        }
    };

    return (
        <div className={`nav ${theme}`}>
            <div className='logo' onClick={handleLogoClick}>
                <img className='icon' src={icon1} alt='Logo'/>
            </div>
            
            <div className='theme-toggle' onClick={toggleTheme}>
                {theme === 'light' ? <i className="fa-regular fa-sun"></i> : <i className="fa-regular fa-moon"></i>}
            </div>

            <div className='search-bar'>
                <input type='text' placeholder='Search' />
                <button><i className="fa-solid fa-search"></i></button>
            </div>

            <div className={isMobile ? 'nav-menu-mobile' : 'nav-menu'}>
                {isLoggedIn ? (
                    <>
                        <li><Link to='/teachers' className={theme === 'dark' ? 'white-text' : ''}><i className="fa-solid fa-chalkboard-teacher"></i> TEACHERS</Link></li>
                        <li><Link to='/students' className={theme === 'dark' ? 'white-text' : ''}><i className="fa-solid fa-user-graduate"></i> STUDENTS</Link></li>
                        <li><Link to='/courses' className={theme === 'dark' ? 'white-text' : ''}><i className="fa-solid fa-book"></i> COURSES</Link></li>
                        <li><Link to='/exams' className={theme === 'dark' ? 'white-text' : ''}><i className="fa-solid fa-file-alt"></i> EXAMS</Link></li>
                        <li><Link to='/result' className={theme === 'dark' ? 'white-text' : ''}><i className="fa-solid fa-poll"></i> RESULT</Link></li>
                        <li><Link to='/notification' className={theme === 'dark' ? 'white-text' : ''}><i className="fa-solid fa-bell"></i> NOTIFICATION</Link></li>
                        
                        <select className='dropdown' onChange={handleDropdown}>
                            <option value=''>Profile</option>
                            <option value='/viewprofile'>View Profile</option>
                            <option value='/settings'>Settings</option>
                            <option value='/logout'>Logout</option>
                        </select>
                    </>
                ) : (
                    <>
                        <li><Link to='/' className={theme === 'dark' ? 'white-text' : ''}><i className="fa-solid fa-house"></i> HOME</Link></li>
                        <li><Link to='/about' className={theme === 'dark' ? 'white-text' : ''}><i className="fa-solid fa-circle-info"></i> ABOUT</Link></li>
                        <li><Link to='/service' className={theme === 'dark' ? 'white-text' : ''}><i className="fa-solid fa-briefcase"></i> SERVICE</Link></li>
                        <li><Link to='/contact' className={theme === 'dark' ? 'white-text' : ''}><i className="fa-solid fa-phone"></i> CONTACT</Link></li>
                        <li>
                            <Link to="/login"><button className='nav-button'>LOGIN</button></Link>
                        </li>
                        <li>
                            <Link to="/signup"><button className='nav-button'>SIGN UP</button></Link>
                        </li>
                    </>
                )}
            </div>
            <button className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? <i className="fa-solid fa-times"></i> : <i className="fa-solid fa-bars"></i>}
            </button>
        </div>
    );
};
export default Navbar;
