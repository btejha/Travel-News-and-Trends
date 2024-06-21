// pages/app.js by TejhaBollu

import {MantineProvider} from '@mantine/core';

function MyApp({Component, pageProps}) {
    return (
        <MantineProvider
            theme={{
                colors: {
                    brand: [
                        '#F0F8FF', '#CCE6FF', '#99D3FF', '#66C1FF', '#33AEFF', '#009BFF', '#0086E6', '#0071CC', '#005CB3', '#004799',
                    ],
                    secondary: [
                        '#FFF4E5', '#FFE6CC', '#FFD699', '#FFC766', '#FFB733', '#FFA700', '#E68C00', '#CC7A00', '#B36600', '#994D00',
                    ],
                },
                primaryColor: 'brand',
            }}
            withGlobalStyles
            withNormalizeCSS
        >
            <Component {...pageProps} />
        </MantineProvider>
    );
}

export default MyApp;
