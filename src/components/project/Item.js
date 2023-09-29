const m = require("mithril");

function Item() {
  return {
    view: (vnode) => {
      let project = vnode.attrs.project;

      let preview = project.urls.preview;
      let source = project.urls.github;
      let imgSrc = 'assets/medias/projects/' + project.image;
      let imgAlt = 'Image du projet "' + project.name + '"';
      let tags = project.tags;

      return (
        <div class="item-project">
          <img src={imgSrc} alt={imgAlt} />
          <div class="content">
            <div class="header-item">
              <h4>{project.name}</h4>
              <a href={'#content-plus-' + vnode.attrs.key} class="button-plus">
                <i class="fa fa-plus" aria-hidden="true"></i>
              </a>
            </div>
            <ul class="item-project-links">
              <li>
                <a href={preview} target="_blank">
                  <i class="fa fa-external-link" aria-hidden="true"></i>
                  Voir la démo
                </a>
              </li>
              <li>
                <a href={source} target="_blank">
                  <i class="fa fa-github" aria-hidden="true"></i>
                  Voir le code source
                </a>
              </li>
            </ul>
          </div>
          <div id={'content-plus-' + vnode.attrs.key} class="content-plus">
            <a href="#">
              <i class="fa fa-times" aria-hidden="true"></i>
              Fermer
            </a>
            <div>
              <p>{project.description}</p>
              <ul>
                {tags.map((tag) => <li>{tag}</li>)}
              </ul>
            </div>
          </div>
        </div>
      );
    }
  };
}

module.exports = Item;
