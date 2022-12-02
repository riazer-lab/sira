var storedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
if (storedTheme)
  document.documentElement.setAttribute("data-theme", storedTheme);

function toggleDarkMode() {
  var currentTheme = document.documentElement.getAttribute("data-theme");
  var targetTheme = "light";

  const toggle = document.querySelector("#theme-toggle");
  if (currentTheme === "light") {
    targetTheme = "dark";
    toggle.classList.remove("from-rose-500", "to-fuchsia-500");
    toggle.classList.add("from-indigo-700", "to-purple-600");
  } else {
    toggle.classList.remove("from-indigo-700", "to-purple-600");
    toggle.classList.add("from-rose-500", "to-fuchsia-500");
  }
  console.debug("toggleDarkMode", targetTheme);
  document.documentElement.setAttribute("data-theme", targetTheme);
  localStorage.setItem("theme", targetTheme);
  toggle.innerText = `Click to toggle theme ${
    targetTheme === "dark" ? "🌙" : "☀"
  }`;
}
