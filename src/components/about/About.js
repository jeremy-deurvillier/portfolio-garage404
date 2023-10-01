const m = require("mithril");
const Layout = require('../layout/Layout');
const Navigation = require('../navigation/Navigation');

let resume = require('../../../datas/resume.json');
let about = resume.about;

function About() {
    return {
        view: () => (
            <Layout>
                <header>
                    <Navigation />
                </header>
                <section id="about">
                    <h2>A propos</h2>
                    { about.map(text => <p class="text-long">{ text }</p>) }
                    <p class="about-cta">
                        <m.route.Link href="/projects" class="button">Voir mes projets</m.route.Link>
                    </p>
                </section>
            </Layout>
        )
    };
}

module.exports = About;