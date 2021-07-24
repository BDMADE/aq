import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import client from "./utils/apolloClient";
import { ApolloProvider } from "@apollo/client";
import './styles/theme.css';

// Declaring main part of the website
ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);