import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// import Apollo services
import {
    ApolloProvider,
    ApolloClient,
    createHttpLink,
    InMemoryCache
} from '@apollo/client';

// create a http link
const httpLink = createHttpLink({
    uri: 'http://localhost:1337'
});

// create ApolloClient instance
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);
