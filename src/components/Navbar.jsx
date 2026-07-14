import {FaHome} from 'react-icons/fa';
import {FaUser} from 'react-icons/fa';
import {FaShoppingCart} from 'react-icons/fa';
import {FaBell} from 'react-icons/fa';
import {FaSearch} from 'react-icons/fa';
function Navbar() {
    return (
        <div className="navbar" style={{background:"black", width:"200px", height:"45px"}}>
            <h1 style={{color:"white"}}> <div>
            <FaHome/>
            <FaUser/>
            <FaShoppingCart/>
            <FaBell/>
            <FaSearch/>
            
        </div>
        </h1>
        </div>
        
    );
}
export default Navbar;