const m = require("mithril");

function Layout() {
    return {
        view: (vnode) => (
           <main id="layout">
                { vnode.children }
           </main>
        )
    };
}

module.exports = Layout;