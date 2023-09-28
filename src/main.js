const m = require('mithril');
const Home = require('./components/home/Home');
const NotFound = require('./components/not-found/NotFound');

const home = {
    render: () => <Home />
}

const notFound = {
    render: () => <NotFound />
}

m.route.prefix = '';

m.route(document.querySelector('div#root'), '/', {
    '/': home,
    '/:404': notFound
});