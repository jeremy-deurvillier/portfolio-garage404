const m = require("mithril");
const Layout = require('../layout/Layout');
const Navigation = require('../navigation/Navigation');
const Item = require('./Item');

let rawProjects = require('../../../datas/projects.json');
let projects = rawProjects.projects;

function List() {
    return {
        view: () => (
            <Layout>
                <header>
                    <Navigation />
                </header>
                <section id="projects">
                    <h2>Projets</h2>
                    <div>
                      { projects.map(project => <Item project={ project } />) }
                    </div>
                </section>
            </Layout>
        )
    };
}

module.exports = List;