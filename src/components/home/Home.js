const m = require("mithril");
const Layout = require('../layout/Layout');
const Navigation = require('../navigation/Navigation');

let resume = require('../../../datas/resume.json');
let identity = resume.identity;
let job = resume.job;

function Home() {
    return {
        view: () => (
            <Layout>
                <header>
                    <Navigation />
                </header>
                <section id="home">
                    <p class="hi">Salut, je suis</p>
                    <h2>{ identity.name.first + ' ' + identity.name.last }</h2>
                    <h3>{ job.title } <span>passionné</span></h3>
                    <p class="home-cta">
                        <m.route.Link href="/about" class="button">Découvrir</m.route.Link>
                    </p>
                </section>
            </Layout>
        )
    };
}

module.exports = Home;