// ==UserScript==
// @name         ChatWidget
// @namespace    https://www.experio.co.za/
// @version      0.1
// @description  Embed chat widget on Fullhouse Furniture Website
// @author       Mechanical Ink
// @match        https://fullhousefurniture.co.za
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const widgetURL = "https://uxwill.github.io/chatinc/";
    const iframe = document.createElement('iframe');
    iframe.src = widgetURL;

    iframe.style.width = "500px";
    iframe.style.height = "600px";
    iframe.style.position = "fixed";
    iframe.style.bottom = "0";
    iframe.style.right = "0";
    iframe.style.border = "0";
    // ensure the widget is above everything else
    iframe.style.zIndex = "99999";

    document.documentElement.appendChild(iframe);
})();
