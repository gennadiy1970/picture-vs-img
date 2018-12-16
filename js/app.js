const elements = {
  h1: "",
  h2: "",
  h3: "",
  h4: "",
  h5: "",
  h6: "",
  p: ""
};

const header = {
  h1: "",
  p: ""
};

const init = (obj, elem) => {
  Object.keys(obj).map(e => (obj[e] = elem.querySelector(e)));
};

init(elements, document.querySelector(".wrapper"));
init(header, document.querySelector("header"));

const showFontSize = obj => {
  obj.textContent =
    " " + "font-size: " + getComputedStyle(obj).getPropertyValue("font-size");
};

Object.keys(elements).map(e => showFontSize(elements[e]));
// Object.keys(header).map(e => showFontSize(header[e]))

window.addEventListener(
  "resize",
  _.debounce(() => {
      header.h1.innerHTML = `Use case vmin <span class="red">${getComputedStyle(
        header.h1
      ).getPropertyValue("font-size")}</span>`;
      header.p.innerHTML = `vmin &amp; vmax - это 1% от vh или vw (для экрана 800х600 vmax:8px, vmin:6px) <span class="red">${getComputedStyle(
        header.p
      ).getPropertyValue("font-size")}</span>`;
    })
);
