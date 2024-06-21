// components/ArticleDetail.js by TejhaBollu
import React from 'react';
import {MantineProvider, Container, Button, Text, Title, Image, Grid, createStyles} from '@mantine/core';

const useDetailStyle = createStyles((theme) => ({
    container: {
        marginRight: theme.spacing.md,
        marginBottom: theme.spacing.lg,
        paddingBottom: '150px',
    },
    backButtons: {
        backgroundColor: '#b58530',
        borderRadius: '20px',
        display: 'right',
        align: 'center',
        '&:hover': {
            backgroundColor: theme.colors.yellow[8],
            textColor: '#fff',
        },
    },
    grid: {
        padding: '20px',
        margin: '15px',
        borderRadius: '10px',
        border: `1px solid ${theme.colors.gray[3]}`,
        boxShadow: '0 1px 34px 5px rgba(0, 0, 0, 0.1)',
        backgroundColor: theme.colors.gray[1],
    },
    image: {
        width: '100%',
        height: 'auto', // Set a fixed height for the image
        objectFit: 'cover', // Ensure the image covers the area
    },
    detailButtons: {
        backgroundColor: '#b58530',
        color: '#fff',
        borderRadius: '20px',
        marginLeft: '12px',
        marginTop: '10px',
        marginBottom: '10px',
        padding: '0.625em',
        width: '10em',
        '&:hover': {
            backgroundColor: theme.colors.yellow[8],
            textColor: '#fff',
        },
    },
    detailStyle: {
        margin: '1em',
        fontFamily: 'Verdana, sans-serif',
    }
}));
const ArticleDetail = ({article, onBack}) => {
    const {classes} = useDetailStyle();
    return (
        <MantineProvider>
            <Container className={classes.container}>
                <Button onClick={onBack} variant="filled" className={classes.backButtons}>
                    Back to list
                </Button>
                <Grid shadow="sm" padding="lg" radius="md" variant="dashed" className={classes.grid}>
                    <Grid.Col span={6}>
                        {article.multimedia[0].url && (
                            <Image src={article.multimedia[0].url} alt={article.multimedia[0].url}
                                   className={classes.image}/>
                        )}
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Title size="md" order={3} size="lg" className={classes.detailStyle}>{article.title}</Title>
                        <Text size="sm"
                              className={classes.detailStyle}>{new Date(article.published_date).toLocaleDateString()}</Text>
                        <Text className={classes.detailStyle}>{article.abstract}</Text>
                        <Text size="sm" className={classes.detailStyle}>{article.byline}</Text>

                        <Button component="a" href={article.url} target="_blank" rel="noopener noreferrer"
                                variant="default" className={classes.detailButtons}>
                            Read Full Article
                        </Button>
                    </Grid.Col>
                </Grid>
            </Container>
        </MantineProvider>
    );
};

export default ArticleDetail;

