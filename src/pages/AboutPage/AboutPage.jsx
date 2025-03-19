import React, {useEffect, useState} from 'react';

const AboutPage = () => {
    const [data, setData] = useState();

    useEffect(() => {
        window.ymab('metrika.98662215', 'getFlags', {}, (flags) => {
            console.log('--------> Varioqub data', flags);
            setData(flags);
            console.log('--------> data', data);
            sessionStorage.setItem('ymabFlags', JSON.stringify(flags));
            console.log('--------> sessionStorage', sessionStorage.getItem('ymabFlags'));
        });
    }, []);

    return (
        <div>
            <h2>About Page Varioqub 9</h2>
        </div>
    );
};

export default AboutPage;