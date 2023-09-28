var m = require("mithril");
const Layout = require('../layout/Layout');
const Navigation = require('../navigation/Navigation');

function Home() {
    return {
        view: () => (
            <Layout>
                <header>
                    <Navigation />
                </header>
                <section id="home">
                    <p class="hi">Salut, je suis</p>
                    <h2>Jérémy Deurviller</h2>
                    <h3>Développeur Web <span>passionné</span></h3>
                    <p class="home-cta">
                        <a href="/about" class="button">Découvrir</a>
                    </p>
                </section>
            </Layout>
        )
    };
}

module.exports = Home;