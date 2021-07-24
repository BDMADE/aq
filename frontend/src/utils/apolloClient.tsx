// import Apollo services
import {
    ApolloClient,
    createHttpLink,
    InMemoryCache
} from '@apollo/client';

// create a http link
const httpLink = createHttpLink({
    uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`
});

// create cache
const memoryCache = new InMemoryCache();

// create ApolloClient instance
const client = new ApolloClient({
    link: httpLink,
    cache: memoryCache
});

export default client;
