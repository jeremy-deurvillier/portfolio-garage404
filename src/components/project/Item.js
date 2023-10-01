const m = require("mithril");

/* ** Affiche le contenu supplémentaire.
*/
function showContentPlus(e) {
  e.preventDefault();

  let targetId, target;

  if (e.target.href) {
    targetId = e.target.href.split('#')[1];
  } else {
    targetId = e.target.parentNode.href.split('#')[1];
  }

  target = document.querySelector('#' + targetId);

  if (target) {
    target.style.setProperty('--content-plus-opacity', '1');
    target.style.setProperty('--content-plus-transform', 'translate(0, -349px)');
  }
}

/* ** Masque le contenu supplémentaire.
*/
function hideContentPlus(e) {
  e.preventDefault();

  let targetId, target;

  targetId = e.target.dataset.target;
  target = document.querySelector(targetId);

  if (target) {
    target.style.setProperty('--content-plus-opacity', '0');
    target.style.setProperty('--content-plus-transform', 'translate(-500px, -349px)');
  }
}

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
