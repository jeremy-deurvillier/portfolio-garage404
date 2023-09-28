const m = require('mithril');
const Home = require('./components/home/Home');

const home = {
    render: () => <Home />
}

m.route.prefix = '';

m.route(document.querySelector('div#root'), '/', {
    '/': home,
});