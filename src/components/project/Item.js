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
        <article class="item-project">
          <div class="content">
            <div>
              <h4>{project.name}</h4>
              <ul class="tags">
                {tags.map((tag) => <li>{tag}</li>)}
              </ul>
            </div>
            <p>{project.description}</p>
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
          <img src={imgSrc} alt={imgAlt} />
        </article>
      );
    }
  };
}

module.exports = Item;
