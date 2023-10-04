const m = require("mithril");
const Navigation = require('../navigation/Navigation');

function Layout() {
    return {
        view: (vnode) => (
            <main id="layout">
                <header>
                    <Navigation />
                </header>
                {vnode.children}
            </main>
        )
    };
}

module.exports = Layout;