function changeView(name) {
  var classShows = 'project-show-' + name;
  var selected1 = document.getElementsByClassName('selected').item(0);
  var changeTo = document.getElementsByClassName(classShows).item(0);
  selected1.classList.remove('selected');
  selected1.classList.add('unselected');
  changeTo.classList.remove('unselected');
  changeTo.classList.add('selected');
}