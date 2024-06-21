// components/Footer.js by TejhaBollu

import {Footer as MantineFooter, Container, Text} from '@mantine/core';

const Footer = () => {
    return (
        <MantineFooter>
            <Container>
                <Text align="center" size="sm">
                    © {new Date().getFullYear()} Travel News and Trends. All rights reserved.
                </Text>
            </Container>
        </MantineFooter>
    );
};

export default Footer;
