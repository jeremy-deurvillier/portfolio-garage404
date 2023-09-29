const m = require('mithril');
const Home = require('./components/home/Home');
const NotFound = require('./components/not-found/NotFound');
const About = require('./components/about/About');
const Projects = require('./components/project/List');

// m.route.prefix = ''; // For debug

m.route(document.querySelector('div#root'), '/', {
    '/': Home,
    '/about': About,
    '/projects': Projects,
    '/:404': NotFound
});
