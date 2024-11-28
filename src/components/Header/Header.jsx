import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav>
                <span>My Website</span>
                <Link to={"/"} >Home</Link>
            {/* <a href="/">Home</a> */}
                <Link to={"/about"} >About</Link>
            {/* <a href="/about">About</a> */}
                <Link to={"/posts"} >Posts</Link>
                 <Link to={"/contact"} >Contact</Link>
            {/* <a href="/contact">Contact</a> */}
            <Link to={"/users"} >Users</Link>
            </nav>
        </div>
    );
};

export default Header;