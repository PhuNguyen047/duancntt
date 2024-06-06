import './Navbar.css';
import icon1 from '../../assets/icon1.jpg';
import profile from '../../assets/profile.jpg';

const Navbar = () => {
    return (
        <div className='nav'>
            <img className='logo' src={icon1}></img>
            <ul className='nav-menu'>
                <li><a href='/'><i className="fa-solid fa-house"></i> HOME</a></li>
                <li><a href='/about'><i class="fa-solid fa-circle-info"></i> ABOUT</a></li>
                <li><a href='/service'><i class="fa-solid fa-briefcase"></i> SERVICE</a></li>
                <li><a href='/contact'><i class="fa-solid fa-phone"></i> CONTACT</a></li>
                <img className='profile-pic' src={profile}></img>
                <select className='dropdown'>
                    <option value='option0'>VIEW PROFILE</option>
                    <option value='option1'>LOGIN</option>
                    <option value='option2'>SIGN UP</option>
                    <option value='option3'>SETTING</option>
                    <option value='option4'>LOG OUT</option>
                </select>
                
            </ul>
        </div>
    )
}

export default Navbar;