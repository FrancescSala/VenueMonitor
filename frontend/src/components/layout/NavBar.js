import { NavLink } from 'react-router-dom';

export default function NavBar() {
/*  
    Es pot fer així, però no cal. Simplement defininim .active en el fitxer CSS
    const linkStyle = ({isActive}) => { return isActive ? {color: 'lightgrey', textDecoration: 'none'} : {color: 'blue', textDecoration: 'underline'}};
    return (
        <nav className="NavigationBar">
           <NavLink className='NavigationBar--Link' to='venues/list' style={linkStyle}>Venues</NavLink>
            <NavLink className='NavigationBar--Link' to='admin' style={linkStyle}>Administration</NavLink>            
            <NavLink className='NavigationBar--Link' to='profile' style={linkStyle}>My Profile</NavLink>
        </nav>
    );
*/ 
    return (
        <nav className="NavigationBar">
            <NavLink className='NavigationBar--Link' to='venues/list'>Venues</NavLink>
            <NavLink className='NavigationBar--Link' to='admin'>Administration</NavLink>            
            <NavLink className='NavigationBar--Link' to='profile'>My Profile</NavLink>
        </nav>
    );
}