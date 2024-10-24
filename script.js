document.getElementById('reloadButton').addEventListener('click', function () {
  document.getElementById('container-main').innerHTML = '';
  fetch('./views/home.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('container-main').innerHTML = data;
    });
});
document.getElementById('reloadButton1').addEventListener('click', function () {
  document.getElementById('container-main').innerHTML = '';
  fetch('./views/transact.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('container-main').innerHTML = data;
    });
});
document.getElementById('reloadButton2').addEventListener('click', function () {
  document.getElementById('container-main').innerHTML = '';
  fetch('./views/timeline.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('container-main').innerHTML = data;
    });
});

window.onload = function () {
  fetch('./views/home.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('container-main').innerHTML = data;
    });
};
