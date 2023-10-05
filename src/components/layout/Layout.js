const m = require("mithril");
const Navigation = require('../navigation/Navigation');

function Layout() {
    return {
        view: (vnode) => (
            <div id="layout">
                <header>
                    <Navigation />
                </header>
                <main>
                    { vnode.children }
                </main>
            </div>
        )
    };
}

module.exports = Layout;