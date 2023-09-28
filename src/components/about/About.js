const m = require("mithril");
const Layout = require('../layout/Layout');
const Navigation = require('../navigation/Navigation');

function About() {
    return {
        view: () => (
            <Layout>
                <header>
                    <Navigation />
                </header>
                <section id="about">
                    <h2>A propos</h2>
                    <p class="text-long">
                        Je suis Jérémy Deurvillier, Développeur Web depuis 2017. Je suis un passionné du code.
                        J'aime apprendre et découvrir de nouvelles choses, dans tous les domaines.
                        Les gros projets ne me font pas peur, j'aime les challenges
                        et me donner à cent pour cent est une habitude de tous les jours.
                        J'aime explorer les 64 cases du jeu d'échecs régulièrement,
                        le karaté depuis de nombreuses années et enfin la randonnée, activité dont je ne me lasse jamais.
                    </p>
                    <p class="about-cta">
                        <m.route.Link href="/projects" class="button">Voir mes projets</m.route.Link>
                    </p>
                </section>
            </Layout>
        )
    };
}

module.exports = About;