const m = require("mithril");
const Layout = require('../layout/Layout');
const Item = require('./Item');

let rawProjects = require('../../../datas/projects.json');
let projects = rawProjects.projects.reverse();

function List() {
    return {
        view: () => (
            <Layout>
                <section id="projects">
                    <h2>Projets</h2>
                    <div>
                      { projects.map((project, index) => <Item key={ index } project={ project } />) }
                    </div>
                </section>
            </Layout>
        )
    };
}

module.exports = List;
