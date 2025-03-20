import React from 'react';
import {MetricaExperimentsProvider, useExperiments} from "yandex-metrica-ab-react";

const clientId = "metrika.98662215";

const AboutPage = () => {
    const { flags } = useExperiments({ clientId });
    console.log(flags);

    return (
        <MetricaExperimentsProvider clientId={clientId}>
            <div>
                <h2>About Page Varioqub 11</h2>
            </div>
        </MetricaExperimentsProvider>
    );
};

export default AboutPage;