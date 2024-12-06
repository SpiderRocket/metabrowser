localStorage.removeItem("?passcode");
let index = 0;
const title = document.createElement("title");
const titleNode = document.createTextNode("MetaBrowser");
title.appendChild(titleNode);
const meta = document.createElement("meta");
meta.setAttribute("charset", "utf-8");
const head = document.createElement("head");
head.appendChild(title);
head.appendChild(meta);
const passBox = document.createElement("button");
passBox.style.backgroundColor = "#ffffff";
passBox.style.border = "none";
const pass1Node = document.createTextNode("ENTER PASSCODE: ");
const pass2Node = document.createElement("br");
const pass3Node = document.createElement("input");
pass3Node.value = "";
const pass4Node = document.createElement("br");
const passSubmitNode = document.createTextNode("SUBMIT");
const passSubmit = document.createElement("button");
pass3Node.type = "text";
passBox.appendChild(pass1Node);
passBox.appendChild(pass2Node);
passBox.appendChild(pass3Node);
passBox.appendChild(pass4Node);
passSubmit.appendChild(passSubmitNode);
passSubmit.setAttribute("onclick", "submitCode()");
passBox.appendChild(passSubmit);
passBox.style.width = "100%";
passBox.style.height = "1000px";
passBox.style.zIndex = "3";
document.body.appendChild(passBox);
function submitCode() {
if (pass3Node.value === "passNode") {
passTrue();
passBox.remove();
localStorage.setItem("?passcode","true");
} else {
passFalse();
}
}

function passTrue() {
const createTabButton = document.createElement("button");
const createTabNode = document.createTextNode("Add New Tab +");
createTabButton.appendChild(createTabNode);
createTabButton.id = "createTabButton";
createTabButton.style.zIndex = "2";
createTabButton.setAttribute("onclick", "createNewTab()");
document.body.appendChild(createTabButton);
const bookmarkDropdown = document.createElement("button");
const bookmarkDropNode = document.createTextNode("Bookmarks");
bookmarkDropdown.appendChild(bookmarkDropNode);
bookmarkDropdown.id = "bookmarkDropdown";
bookmarkDropdown.style.float = "right";
bookmarkDropdown.addEventListener("click", function() {
toggleBookmarks();
});
const bookmarkContentDiv = document.createElement("div");
bookmarkContentDiv.id = "bookmarkContentDiv";
bookmarkContentDiv.style.display = "none";
bookmarkContentDiv.style.maxWidth = "120px";
bookmarkDropdown.appendChild(bookmarkContentDiv);
document.body.appendChild(bookmarkDropdown);
const createAppendHost = document.createElement("button");
createAppendHost.id = "appendHost";
document.body.appendChild(createAppendHost);
}
function passFalse() {
const passErrorBox = document.createElement("button");
passErrorBox.id = "passErrorBox";
const passErrorNode = document.createTextNode("! Passcode incorrect !");
const passErrorBreak = document.createElement("br");
passErrorBox.style.color = "white";
passErrorBox.style.backgroundColor = "red";
passErrorBox.appendChild(passErrorNode);
passBox.appendChild(passErrorBreak);
passBox.appendChild(passErrorBox);
}

function createNewTab(element) {
const tab = document.createElement("div");
tab.id = "tab";
const searchBar = document.createElement("input");
searchBar.id = "searchBar";
searchBar.type = "text";
searchBar.placeholder = "Search...";
searchBar.value = "";
let answer = searchBar.value;
const searchResult = document.createElement("embed");
searchResult.id = "searchResult";
searchResult.type = "text/html";
searchResult.id = "active";
const searchButton = document.createElement("button");
const searchNode = document.createTextNode(" Search");
searchButton.appendChild(searchNode);
searchButton.id = "searchButton";
searchButton.addEventListener("click", function() {
answer = searchBar.value; searchResult.src = "https://" + answer;
});
const queryButton = document.createElement("button");
const queryNode = document.createTextNode(" Search by Query");
queryButton.appendChild(queryNode);
queryButton.id = "queryButton";
queryButton.addEventListener("click", function() {
answer = searchBar.value; searchResult.src = "https://bing.com/search?q=" + answer;
});
const closeButton = document.createElement("button");
const closeNode = document.createTextNode("Close");
closeButton.id = "closeButton";
closeButton.appendChild(closeNode);
console.log(element);
const breaker = document.createElement("br");
const minimizer = document.createElement("button");
const minimizerNode = document.createTextNode("Minimize / Maximize");
minimizer.id = "minimizer";
minimizer.appendChild(minimizerNode);
const fullscreenButton = document.createElement("button");
const fullscreenNode = document.createTextNode("Fullscreen");
fullscreenButton.appendChild(fullscreenNode);
fullscreenButton.id = "fullscreenButton";
fullscreenButton.setAttribute("onclick", "toggleFullScreen()");
const bookmarkButton = document.createElement("button");
const bookmarkNode = document.createTextNode("Bookmark");
bookmarkButton.appendChild(bookmarkNode);
bookmarkButton.id = "bookmarkButton";
bookmarkButton.addEventListener("click", function() {
bookmarkItem(searchBar.value, searchBar.value)
});
const appendHost = document.getElementById("appendHost");
appendHost.appendChild(searchBar);
appendHost.appendChild(searchButton);
appendHost.appendChild(searchResult);
closeButton.addEventListener("click", function() {searchBar.remove();searchResult.remove();searchButton.remove();closeButton.remove();minimizer.remove();breaker.remove();fullscreenButton.remove();queryButton.remove();bookmarkButton.remove();});
minimizer.addEventListener("click", function() {if (searchResult.style.width === "800px" && searchResult.style.height === "800px") {searchResult.style.width = "0px";searchResult.style.height = "0px";searchResult.id = ""} else {searchResult.style.width = "800px";searchResult.style.height = "800px";searchResult.id = "active"}} );
appendHost.appendChild(closeButton);
appendHost.appendChild(queryButton);
appendHost.appendChild(minimizer);
appendHost.appendChild(fullscreenButton);
appendHost.appendChild(bookmarkButton);
appendHost.appendChild(breaker);
if (element !== undefined) {
searchResult.src = "https://" + element;
}
appendHost.style.display = "block";
appendHost.className = "active";
}
function toggleFullScreen(el) {
if (!el) {
el = document.getElementById('active');
}
let isInFullScreen = (document.fullScreenElement && document.fullScreenElement !== null) ||  (document.mozFullScreen || document.webkitIsFullScreen);

if (isInFullScreen) {
{
let ele = document;
let requestMethod = ele.cancelFullScreen||ele.webkitCancelFullScreen||ele.mozCancelFullScreen||ele.exitFullscreen||ele.webkitExitFullscreen;
if (requestMethod) {
requestMethod.call(el);
} else if (typeof window.ActiveXObject !== "undefined") {
let wscript = new ActiveXObject("WScript.Shell");
if (wscript !== null) {
wscript.SendKeys("{F11}");
}
}
}
} else {
let requestMethod = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
if (requestMethod) { // Native full screen.
requestMethod.call(el);
} else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
let wscript = new ActiveXObject("WScript.Shell");
if (wscript !== null) {
wscript.SendKeys("{F11}");
}
}
return false;
}
return false;
}
function toggleBookmarks() {
index % 2 === 0 ? bookmarkContentDiv.style.display = "block" : bookmarkContentDiv.style.display = "none";
console.log(index);
index++;
index > 29 ? index = 0 : "";
}
function bookmarkItem(key, value) {
localStorage.setItem(key, value);
const bookmarkSave = document.createElement("button");
const bookmarkSaveNode = document.createTextNode(key);
bookmarkSave.appendChild(bookmarkSaveNode);
bookmarkSave.appendChild(document.createElement("br"));
bookmarkSave.addEventListener("click", function() {
createNewTab(key);
});
bookmarkContentDiv.appendChild(bookmarkSave);
console.log(key);
}
