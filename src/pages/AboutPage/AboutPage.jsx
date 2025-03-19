import React, {useEffect, useState} from 'react';

const AboutPage = () => {
    // const [data, setData] = useState();
    //
    // useEffect(() => {
    //     window.ymab('metrika.98662215', 'getFlags', {}, (flags) => {
    //         console.log('--------> Varioqub data', flags);
    //         setData(flags);
    //         console.log('--------> data', data);
    //         sessionStorage.setItem('ymabFlags', JSON.stringify(flags));
    //         console.log('--------> sessionStorage', sessionStorage.getItem('ymabFlags'));
    //     });
    // }, []);

    const [data, setData] = useState();
    const flags = sessionStorage.getItem('ymabFlags');

    useEffect(() => {
        console.log('----> useEffect flags', flags);
        if (flags) {
            setData(flags);
        }
    }, [flags]);

    console.log('----> AboutPage data', data);

    return (
        <div>
            <h2>About Page Varioqub 10</h2>
        </div>
    );
};

export default AboutPage;