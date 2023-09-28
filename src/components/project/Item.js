const m = require("mithril");

function Item() {
    return {
        view: (vnode) => {
          let project = vnode.attrs.project;

          let preview = project.urls.preview;
          let source = project.urls.github;
          let imgSrc = 'assets/medias/projects/' + project.image;
          let imgAlt = 'Image du projet "' + project.name + '"' ;

          return (
            <div class="item-project">
                <img src={ imgSrc } alt={ imgAlt } />
                <div class="content">
                  <h4>
                    { project.name }
                  </h4>
                  <ul class="item-project-links">
                    <li>
                      <a href={ preview } target="_blank">
                        <i class="fa fa-external-link" aria-hidden="true"></i>
                        Voir la démo
                      </a>
                    </li>
                    <li>
                      <a href={ source } target="_blank">
                        <i class="fa fa-github" aria-hidden="true"></i>
                        Voir le code source
                      </a>
                    </li>
                  </ul>
                </div>
            </div>
          );
        }
    };
}

module.exports = Item;
