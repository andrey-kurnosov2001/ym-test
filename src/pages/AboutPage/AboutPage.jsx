import React, {useEffect, useState} from 'react';

const AboutPage = () => {
    const [data, setData] = useState();

    useEffect(() => {
        window.ymab('metrika.98662215', 'init', {}, (data) => {
            console.log('--------> Varioqub data', data);
            setData(data.flags);
            console.log('--------> Varioqub data', data.flags);
            sessionStorage.setItem('ymabFlags', JSON.stringify(data?.flags));
            console.log(sessionStorage.getItem('ymabFlags'));
        });
    }, []);

    console.log(data);


    return (
        <div>
            <h2>About Page Varioqub 8</h2>
        </div>
    );
};

export default AboutPage;