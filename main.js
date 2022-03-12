import "./style.css";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.min.css";

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  smartphone: {
    smooth: false,
  },
});

// Theme Toggle

const toggleThemeLabel = document.querySelector("#theme-toggle");
const toggleThemeCheckbox = toggleThemeLabel.querySelector("input");

const lightTheme = "pastel";
const darkTheme = "dracula";

if (localStorage.daisyTheme) {
  if (localStorage.daisyTheme === lightTheme) {
    document.documentElement.dataset.theme = lightTheme;
    toggleThemeCheckbox.setAttribute("checked", true);
  } else {
    document.documentElement.dataset.theme = darkTheme;
    toggleThemeCheckbox.setAttribute("checked", false);
  }
} else {
  localStorage.daisyTheme = lightTheme;
  toggleThemeCheckbox.setAttribute("checked", true);
}

toggleThemeCheckbox.onchange = function (e) {
  if (toggleThemeCheckbox.checked) {
    document.documentElement.dataset.theme = lightTheme;
    localStorage.daisyTheme = lightTheme;
  } else {
    document.documentElement.dataset.theme = darkTheme;
    localStorage.daisyTheme = darkTheme;
  }
};
