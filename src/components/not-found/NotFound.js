const m = require("mithril");
const Layout = require('../layout/Layout');

function NotFound() {
    return {
        view: () => (
            <Layout>
                <section id="not-found">
                    <h2>Erreur 404</h2>
                    <h3>Cette page n'existe pas !</h3>
                    <p class="home-cta">
                        <m.route.Link href="/" class="button">Aller à l'accueil</m.route.Link>
                    </p>
                </section>
            </Layout>
        )
    };
}

module.exports = NotFound;