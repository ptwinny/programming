const elems = ["title-change-color-one", "title-change-color-two", "title-change-color-three", "title-change-color-four", "title-change-color-five", "title-change-color-six"];
const subElems = ["subtitle-change-color-one", "subtitle-change-color-two", "subtitle-change-color-three", "subtitle-change-color-four", "subtitle-change-color-five", "subtitle-change-color-six"]
const colors = [["--main-red-orange", "#ff5e00"], ["--main-darkgreen", "#318c11"], ["--main-red", "#ff0000"], ["--main-purple", "#6F0B8D"], ["--main-pink", "#ff00c8"], ["--main-blue", "#002aff"]];
const subColors = [["--main-red-orange", "#ff5e00"], ["--main-darkgreen", "#318c11"], ["--main-red", "#ff0000"], ["--main-purple", "#6F0B8D"], ["--main-pink", "#ff00c8"], ["--main-blue", "#002aff"]];
let elemCount = 0;
let colorCount = 0;
let subElemCount = 0;
let subColorCount = 0;

window.onload = setInterval(changeColor, 100);
window.onload = setInterval(changeSubColor, 100);

function changeColor() {
  document.getElementById(elems[elemCount]).style.stroke = colors[colorCount][1];
  elemCount++;
  colorCount++;
  let offset = 1;
  
  if (elemCount === elems.length) {
    elemCount = 0;
  }
  if (colorCount === colors.length - 1) {
    offset++;
    if (offset + colorCount > colors.length) {
      offset = 0;
    }
    colorCount = 0 + offset;
  }
}

function changeSubColor() {
  document.getElementById(subElems[subElemCount]).style.stroke = subColors[subColorCount][1];
  subElemCount++;
  subColorCount++;
  let offset = 1;

  if (subElemCount === subElems.length) {
    subElemCount = 0;
  }
  if (subColorCount === subColors.length - 1) {
    offset++;
    if (offset + subColorCount > subColors.length) {
      offset = 0;
    }
    subColorCount = 0 + offset;
  }
}