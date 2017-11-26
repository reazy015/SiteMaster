const blockList = document.querySelectorAll('div[data-spec]');
const breadcrumbsMenu = document.querySelector('.breadcrumbs');
const breadcrumbsMenuPointers = document.querySelectorAll('span[data-pointer]');
const gallery = document.querySelector('.movie-gallery');
const galleryMainImg = document.querySelector('.main-gallery-img');


// Объекьт дополнительной навигации с  переключением между вкладками Мода ТВ Кино
function AsideMenu(menu, blockList) {
  this.menu = menu;
  this.blockList = blockList;
  this.menu.addEventListener('click', switchApropBlock);

  function switchApropBlock(e){
    var pointer = e.target.dataset.pointer;
    var pointerColor = getComputedStyle(e.target).backgroundColor;

    breadcrumbsMenuPointers.forEach(function(x){
      if (x.dataset.pointer === pointer) {
        x.classList.add('breadcrumbs-item__active-indicator--active');
        x.style.borderTopColor = pointerColor;
      } else {
        x.classList.remove('breadcrumbs-item__active-indicator--active');
      }
    });

    blockList.forEach(function(x){
      if (x.dataset.spec === pointer) {
        x.classList.remove('block-list--hidden');
      } else {
        x.classList.add('block-list--hidden');
      }
    });
  }
}

// Объект галлерии с переключением между миниатюрами
function Gallery(gallery, galleryMain) {
  const self = this;
  this.gallery = gallery;
  this.galleryMain = galleryMain;
  this.gallery.addEventListener('click', changeImg);


  function changeImg(e) {
    if (e.target.matches('.gallery-img')) {
      var currentHeight = self.galleryMain.offsetHeight;
      self.galleryMain.src = e.target.src;
      self.galleryMain.style.height = currentHeight + 'px';
    }
  }
}

// Инициализация объектов
new AsideMenu(breadcrumbsMenu, blockList);
new Gallery(gallery, galleryMainImg);
