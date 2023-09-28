const m = require("mithril");
const Layout = require('../layout/Layout');
const Navigation = require('../navigation/Navigation');

function List() {
    return {
        view: () => (
            <Layout>
                <header>
                    <Navigation />
                </header>
                <section id="not-found">
                    <h2>Projets</h2>
                    <p>Projects list</p>
                </section>
            </Layout>
        )
    };
}

module.exports = List;