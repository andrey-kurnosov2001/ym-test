import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";

const Layout = ({children}) => {
    const {pathname} = useLocation();
    const [experiments, setExperiments] = useState();

    useEffect(() => {
        setExperiments(null);

        window?.ymab('metrika.98662215', 'init', {}, (data) => {
            setExperiments(data);
        });
    }, [pathname]);

    console.log(experiments?.flags, pathname);


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