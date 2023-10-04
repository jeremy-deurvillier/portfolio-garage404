const m = require("mithril");
const Layout = require('../layout/Layout');

let rawContact = require('../../../datas/resume.json');
let contact = rawContact.contact;

function List() {
    return {
        view: () => (
            <Layout>
                <section id="contact">
                    <h2>Contact</h2>
                    <div class="content">
                        <p>
                            <div>
                                <i class="fa fa-phone" aria-hidden="true"></i>
                            </div>
                            <a href={'tel:' + contact.tel}>{contact.tel}</a>
                        </p>
                        <p>
                            <div>
                                <i class="fa fa-at" aria-hidden="true"></i>
                            </div>
                            <a href={'mailto:' + contact.mailto}>{contact.mailto}</a>
                        </p>
                        <ul>
                            {contact.links.map(network => {
                                return (
                                    <li>
                                        <a href={network.url} class="button" target="_blank">
                                            {network.name}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </section>
            </Layout>
        )
    };
}

module.exports = List;
