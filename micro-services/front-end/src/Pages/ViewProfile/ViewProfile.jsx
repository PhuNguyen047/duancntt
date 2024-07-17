import './ViewProfile.css';
import Navbar from '../../Components/Navbar/Navbar';

const ViewProfile = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    return (
        <div>
        <Navbar isLoggedIn={isLoggedIn}/>
        <h1>View Profile</h1>
        
        </div>
    );
};
export default ViewProfile;