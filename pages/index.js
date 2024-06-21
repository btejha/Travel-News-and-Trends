// pages/index.js by TejhaBollu

import {useState, useEffect} from 'react';
import {fetchTravelNews, searchArticles} from '../lib/api';
import NavigationBar from '../components/NavigationBar.js';
import ArticleList from '../components/ArticleList';
import Footer from '../components/Footer.js'
import AppLoader from '../components/Loader';
import {createStyles, MantineProvider, Text, Title} from '@mantine/core';
import SearchBar from "../components/SearchBar.js";

const useStyles = createStyles((theme) => ({
    header: {
        paddingTop: '2rem',
        paddingLeft: '2rem',
        backgroundColor: '#052e16',
        marginBottom: '10px',
    },
    title: {
        color: '#fff', fontFamily: 'Verdana, sans-serif'
    },
    text: {
        color: '#fff', fontFamily: 'Verdana, sans-serif'
    }
}));

const Home = () => {
    const {classes} = useStyles();
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getArticles = async () => {
            const news = await fetchTravelNews();
            setArticles(news);
            setLoading(false);
        };
        getArticles();
    }, []);

    if (loading) {
        return <AppLoader/>;
    }

    const handleSearch = async (query) => {
        setLoading(true);
        const results = await searchArticles(query);
        setArticles(results);
        setLoading(false);
    };

    return (
        <MantineProvider>
            <NavigationBar/>
            <div className={classes.header}>
                <Title order={1} align="center" mb="lg" className={classes.title}>
                    Travel News and Trends
                </Title>
                <Text order={3} align="center" mb="sm" className={classes.text}>Stay
                    updated with the latest travel and aviation news
                </Text>
                <SearchBar className={classes.search} onSearch={handleSearch}/>
                <ArticleList articles={articles}/>
            </div>
            <Footer/>

        </MantineProvider>
    );

};

export default Home;
