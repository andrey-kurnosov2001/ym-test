import React, {useEffect, useState} from 'react';

const AboutPage = () => {
    const [data, setData] = useState();
    const dataFlags = sessionStorage.getItem('ymabFlags');

    useEffect(() => {
        setData(dataFlags);
        console.log('window?.ymabFlags', dataFlags);
    }, [dataFlags]);

    console.log(data);


    return (
        <div>
            <h2>About Page Varioqub 7</h2>
        </div>
    );
};

export default AboutPage;