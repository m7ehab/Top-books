import {NavLink} from 'react-router-dom';
function Nav() {
    return ( 
        <nav>
            <h2>BooksRate</h2>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/favlist'>Favourites</NavLink></li>
            </ul>
        </nav>
        );
}

export default Nav;