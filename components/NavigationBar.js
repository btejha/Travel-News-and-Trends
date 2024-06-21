// components/NavigationBar.js by TejhaBollu

import {Header, Group, Button, Container} from '@mantine/core';
import {createStyles} from '@mantine/core';

const useStyles = createStyles((theme) => ({
    header: {
        marginBottom: theme.spacing.md,
        borderBottom: ' 2px solid #d58530',
    },
    links: {
        marginLeft: 'auto',
        display: 'flex',
        gap: theme.spacing.md,
    },
    button: {
        backgroundColor: '#b58530',
        borderRadius: '20px',
        color: theme.white,
        '&:hover': {
            backgroundColor: theme.colors.yellow[8],
        },
    },
}));

const NavigationBar = () => {
    const {classes} = useStyles();

    return (
        <Header height={60} className={classes.header}>
            <Container>
                <Group position="apart" align="center">
                    <Group className={classes.links}>
                        <Button className={classes.button}>Home</Button>
                        <Button className={classes.button}>About</Button>
                        <Button className={classes.button}>Contact</Button>
                    </Group>
                </Group>
            </Container>
        </Header>
    );
};

export default NavigationBar;
