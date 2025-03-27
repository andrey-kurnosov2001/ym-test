import React from 'react';
import {useExperiments} from "yandex-metrica-ab-react";

const clientId = "metrika.98662215";

const MainPage = () => {
    const experiments = useExperiments({ clientId });

    console.log(experiments.flags, 'MainPage');

    return (
        <div>
            <h2>Main Page</h2>
        </div>
    );
};

export default MainPage;