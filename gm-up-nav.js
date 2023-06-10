// ==UserScript==
// @name         Navigate Up One Level
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Navigate up one level of a URL when the user presses ALT+UP
// @match        http://*/*
// @match        https://*/*
// @grant        none
// ==/UserScript==

document.addEventListener("keydown", function (event) {
  if (event.altKey && event.keyCode === 38) {
    let currentUrl = window.location.href;

    if (!currentUrl.endsWith("/")) {
      currentUrl += "/";
    }

    let urlFrags = currentUrl.split("/").slice(0, -2);

    if (urlFrags.length >= 3) {
      let newUrl = urlFrags.join("/");
      document.location.href = newUrl;
    } else {
      console.error("We're at the root.");
    }
  }
});
