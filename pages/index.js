// pages/index.js by TejhaBollu

import {useState, useEffect} from 'react';
import {fetchTravelNews} from '../lib/api';
import NavigationBar from '../components/NavigationBar.js';
import ArticleList from '../components/ArticleList';
import Footer from '../components/Footer.js'
import AppLoader from '../components/Loader';
import {MantineProvider, Text, Title} from '@mantine/core';


const Home = () => {
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
    return (
        <MantineProvider>
            <NavigationBar/>
            <div style={{paddingTop: '2rem', paddingLeft: '2rem', backgroundColor: '#052e16', marginBottom: '10px'}}>
                <Title order={1} align="center" mb="lg" style={{color: '#fff', fontFamily: 'Verdana, sans-serif'}}>
                    Travel News and Trends
                </Title>
                <Text order={3} align="center" mb="sm" style={{color: '#fff', fontFamily: 'Verdana, sans-serif'}}>Stay
                    updated with the latest travel and aviation news
                </Text>
                <ArticleList articles={articles}/>
            </div>
            <Footer/>

        </MantineProvider>
    );

};

export default Home;
