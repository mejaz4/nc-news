import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li><Link to="/">List all articles</Link></li>
                <li><Link to="/users">List all Users</Link></li>

                <li><Link to="/topics">List all topics</Link></li>
            </ul>
        </div>



    )


}

export default Navbar;