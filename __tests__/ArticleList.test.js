import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ArticleList from '../components/ArticleList';
import test from "node:test";

const articles = [
    {
        title: 'Test Article',
        abstract: 'This is a test abstract.',
        byline: 'By Test Author',
        published_date: '2021-01-01',
        multimedia: [{}, { url: 'http://example.com/image1.jpg' }],
    },
];

test('renders articles and shows details on click', () => {
    render(<ArticleList articles={articles} />);
    expect(screen.getByText('Test Article')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Read More'));
    expect(screen.getByText('By Test Author')).toBeInTheDocument();
});

