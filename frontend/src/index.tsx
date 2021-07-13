import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import client from "./utils/apolloClient";
import { ApolloProvider } from "@apollo/client";

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);
