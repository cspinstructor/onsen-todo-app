var todoStorage = {
  collection: []
};

todoStorage.init = function() {
  this.collection = JSON.parse(localStorage.getItem('todo') || '[]');
};
todoStorage.hasItem = function(label) {
  return this.collection.some(function(item) {
    return item.label === label;
  });
};
todoStorage.save = function() {
  localStorage.setItem('todo', JSON.stringify(this.collection));
};

todoStorage.add = function(label) {
  if (this.hasItem(label)) {
    return false;
  }
  this.collection.push({
    label: label,
    status: 'uncompleted'
  });
  this.save();
  return true;
};
todoStorage.remove = function(label) {
  if (!this.hasItem(label)) {
    return false;
  }
  this.collection.forEach(function(item, i) {
    if (item.label === label) {
      this.collection.splice(i, 1);
    }
  });
};
todoStorage.toggleStatus = function(label) {};
todoStorage.filter = function(status) {};
