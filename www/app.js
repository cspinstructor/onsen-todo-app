var todo = {};

document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'list') {
    fn[page.id + 'Init'](page);
  }
});

var fn = {};

fn.open = function() {
  var menu = document.querySelector('#splitter-menu');
  menu.open();
};

fn.doHello() = function() {
  ons.notification.toast('hello', { timeout: 2000 });
}

fn.listInit = function(page) {
  page.querySelector('#clickme-button').addEventListener('click', fn.doHello());
};


