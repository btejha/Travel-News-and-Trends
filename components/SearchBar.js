import {useState} from 'react';
import {Container, Input, TextInput, Button, createStyles} from '@mantine/core';


const useStyles = createStyles((theme) => ({
    container: {
        backgroundColor: '#052e16',
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    searchInput: {
        // width: '50%',
        padding: '0 10px 15px 0',
        border: '1px solid #b58530',
        borderRadius: '20px',
        height: '20px',
        lineHeight: '20px',
        outline: 'none',
        backgroundColor: '#fff',
    },
    searchButton: {
        backgroundColor: '#b58530',
        color: theme.colors.white,
        borderRadius: '20px',
        margin: '10px 0 10px 12px',
        border: `1px solid ${theme.colors.white}`,
        padding: '0.625em',
        width: '10em',
        '&:hover': {
            backgroundColor: theme.colors.yellow[8],
        },
    }

}));

const SearchBar = ({onSearch}) => {
    const {classes} = useStyles();
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div className={classes.container}>
            <Container>
                <div>
                    <Input className={classes.searchInput}
                           value={query}
                           variant="unstyled"
                           onChange={(e) => setQuery(e.target.value)}
                           placeholder="Search articles..."
                    />
                </div>
                <div>
                    <Button variant="filled" onClick={handleSearch} className={classes.searchButton}>
                        Search
                    </Button>
                </div>
            </Container>
        </div>
    )
        ;
};

export default SearchBar;
