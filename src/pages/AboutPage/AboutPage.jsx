import React from 'react';
import { useExperiments} from "yandex-metrica-ab-react";

const clientId = "metrika.98662215";


const AboutPage = () => {
    const experiments = useExperiments({ clientId });

    console.log(experiments.flags, 'AboutPage');

    return (
            <div>
                <h2>About Page Varioqub 12</h2>
            </div>
    );
};

export default AboutPage;