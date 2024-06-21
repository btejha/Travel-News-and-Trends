// components/ArticleList.js by TejhaBollu
import {useState} from 'react';
import {MantineProvider, Grid, Text, Button, Container, Title, Image, createStyles} from '@mantine/core';
import ArticleDetail from './ArticleDetail';
import PropTypes from 'prop-types';

const useStyles = createStyles((theme) => ({
    container: {
        marginRight: theme.spacing.md,
        marginBottom: theme.spacing.md,
    },
    grid: {
        padding: '20px',
        margin: '15px',
        borderRadius: '10px',
        border: `1px solid ${theme.colors.gray[3]}`,
        boxShadow: '0 1px 34px 5px rgba(0, 0, 0, 0.1)',
        backgroundColor: theme.colors.gray[1],
    },
    girdTitle: {
        fontFamily: 'Verdana, sans-serif',
        marginBottom: '15px',
        color: '#052e16',
    },
    gridText: {
        fontSize: theme.fontSizes.sm,
        marginBottom: theme.spacing.sm,
        fontFamily: 'Verdana, sans-serif',
        color: '#052e16',
    },
    image: {
        width: '270px',
        height: '180px',
        objectFit: 'cover',
        border: `1px solid black`,
    },
    buttons: {
        backgroundColor: '#b58530',
        color: theme.colors.white,
        borderRadius: '20px',
        marginLeft: '12px',
        marginTop: '10px',
        marginBottom: '10px',
        border: `1px solid ${theme.colors.white}`,
        padding: '0.625em',
        width: '10em',
        '&:hover': {
            backgroundColor: theme.colors.yellow[8],
        },
    },
    flexContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
    },
    paginationText: {
        margin: '15px',
        color: 'white',
    },
}));

const ITEMS_PER_PAGE = 5; // Define the number of items per page

const ArticleList = ({articles}) => {
    const {classes} = useStyles();
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE); // Calculate total pages
    const currentArticles = articles.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <MantineProvider>
            <Container>
                {selectedArticle ? (
                    <ArticleDetail article={selectedArticle} onBack={() => setSelectedArticle(null)}/>
                ) : (
                    <>
                        <Title order={2} align="center" mb="lg">
                            Latest Travel News and Trends
                        </Title>
                    </>,
                        currentArticles.length > 0 ? (
                            currentArticles.map(article => (
                                article.url !== "" ? (
                                    <Grid key={article.url} shadow="sm" variant="dashed"
                                          className={classes.grid}>
                                        <Grid.Col span={4}>
                                            {article.multimedia[1].url && (
                                                <Image src={article.multimedia[1].url} alt={article.multimedia[1].url}
                                                       className={classes.image}/>
                                            )}
                                        </Grid.Col>
                                        <Grid.Col span={8}>
                                            <Title size="md" order={3}
                                                   className={classes.girdTitle}>{article.title}</Title>
                                            <Text lineClamp={2} size="sm" mb="sm"
                                                  className={classes.girdText}>{article.abstract}</Text>
                                            <Button variant="filled"
                                                    className={classes.buttons}
                                                    onClick={() => setSelectedArticle(article)}>Read
                                                More</Button>
                                        </Grid.Col>
                                    </Grid>

                                ) : null
                            ))
                        ) : (
                            <Text align="center">No articles available</Text>
                        )
                )}
                {!selectedArticle ? (
                    <div className={classes.flexContainer}>
                        <Button className={classes.buttons}
                                onClick={() => setCurrentPage(page => Math.max(page - 1, 1))}
                                disabled={currentPage === 1}>
                            Previous
                        </Button>
                        <Text className={classes.paginationText}>
                            Page {currentPage} of {totalPages}
                        </Text>
                        <Button className={classes.buttons}
                                onClick={() => handlePageChange(page => Math.min(page + 1, totalPages))}
                                disabled={currentPage === totalPages}>
                            Next
                        </Button>
                    </div>) : (null)}
                {selectedArticle ? (
                    <div>
                        <h2>{selectedArticle.title}</h2>
                        <p>{selectedArticle.byline}</p>
                        <p>{selectedArticle.published_date}</p>
                        <p>{selectedArticle.abstract}</p>
                        {selectedArticle.multimedia && selectedArticle.multimedia.map((media, index) => (
                            <div key={index}>
                                <img src={media.url} alt={media.caption}/>
                                <p>{media.caption}</p>
                            </div>
                        ))}
                        <Button onClick={() => setSelectedArticle(null)}>Close</Button>
                    </div>) : (null)}
            </Container>
        </MantineProvider>
    );
};

ArticleList.propTypes = {
    article: PropTypes.array.isRequired,
};

export default ArticleList;
