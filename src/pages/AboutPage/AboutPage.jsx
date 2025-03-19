import React, {useEffect, useState} from 'react';

const AboutPage = () => {
    const [data, setData] = useState();

    useEffect(() => {
        setData(window?.ymabFlags);
        console.log('window?.ymabFlags', window?.ymabFlags);
    }, [window?.ymabFlags]);

    console.log(data);


    return (
        <div>
            <h2>About Page Varioqub 6</h2>
        </div>
    );
};

export default AboutPage;