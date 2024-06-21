// components/Loader.js by TejhaBollu
import {Loader, Center} from '@mantine/core';
import theme from "tailwindcss/defaultTheme.js";

const AppLoader = () => {
    return (
        <Center style={{height: '100vh'}}>
            <Loader size="xl" variant="bars" color='#052e16'/>
        </Center>
    );
};

export default AppLoader;
