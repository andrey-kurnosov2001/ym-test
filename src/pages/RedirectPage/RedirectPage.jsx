import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const RedirectPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        navigate('/');
    }, []);

    return (
        <div>
            <h2>Redirect Page</h2>
        </div>
    );
};

export default RedirectPage;