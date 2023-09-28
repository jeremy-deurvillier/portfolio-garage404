const m = require('mithril');
const Navigation = require('./components/navigation/Navigation');
const Layout = require('./components/layout/Layout');

function App() {
    return {
        view: () => (
            <Layout>
                <header>
                    <Navigation />
                </header>
            </Layout>
        ),
    };
}

m.render(document.querySelector('div#root'), <App />);