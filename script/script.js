let darkMode = false;

function changeDarkMode() {
  if (darkMode) {
    //light mode
    darkMode = false;
    document.documentElement.style.setProperty("color", "black");
    document.documentElement.style.setProperty("background-color", "#e4e4e4");
    document.getElementById("dark-light-mode").innerHTML = "Dark Mode";
    var elements = document.getElementsByClassName("nav-right");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.setProperty("color", "black");
    }
    var elements = document.getElementsByClassName("nav-global");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.setProperty("background-color", "#e4e4e4");
    }
  } else {
    //dark mode
    darkMode = true;
    document.documentElement.style.setProperty("color", "#e4e4e4");
    document.documentElement.style.setProperty("background-color", "#333");
    document.getElementById("dark-light-mode").innerHTML = "Light Mode";
    var elements = document.getElementsByClassName("nav-right");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.setProperty("color", "#e4e4e4");
    }
    var elements = document.getElementsByClassName("nav-global");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.setProperty("background-color", "#333");
    }
  }
}
