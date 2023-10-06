function loadHTML(id, file) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        document.getElementById(id).innerHTML = xhr.responseText;
      } else {
        console.error("Failed to load HTML: " + xhr.status);
      }
    }
  };
  xhr.open("GET", file, true);
  xhr.send();
}

loadHTML("page__home", "html/components/header.html");
