const m = require('mithril');
const Home = require('./components/home/Home');
const NotFound = require('./components/not-found/NotFound');
const About = require('./components/about/About');
const Projects = require('./components/project/List');
const Contact = require('./components/contact/Contact');

m.route(document.querySelector('div#app'), '/', {
    '/': Home,
    '/about': About,
    '/projects': Projects,
    '/contact': Contact,
    '/:404': NotFound
});
