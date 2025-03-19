import React, {useEffect, useState} from 'react';

const AboutPage = () => {

    const [data, setData] = useState();

    useEffect(() => {
        window.ymab('metrika.98662215', 'init', {} , (data) => setData(data));
        console.log(data);
    }, []);



    return (
        <div>
            {data && data}
            <h2>About Page</h2>
        </div>
    );
};

export default AboutPage;