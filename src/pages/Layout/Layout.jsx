import React from 'react';
import {Link} from "react-router-dom";

const Layout = ({children}) => {
    return (
        <div>
            <Link style={{marginRight: "10px"}} to="/">Main Page</Link>
            <Link style={{marginRight: "10px"}} to="/about">About Page</Link>
            <Link to="/redirect">Redirect Page</Link>
            {children}
        </div>
    );
};

export default Layout;