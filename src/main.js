const m = require('mithril');
const Home = require('./components/home/Home');
const NotFound = require('./components/not-found/NotFound');
const About = require('./components/about/About');

const home = {
    render: () => <Home />
}

const about = {
    render: () => <About />
}

const notFound = {
    render: () => <NotFound />
}

m.route(document.querySelector('div#root'), '/', {
    '/': home,
    '/about': about,
    '/:404': notFound
});