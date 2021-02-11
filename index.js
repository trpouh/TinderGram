"use strict";
var b = chrome || browser

b.contextMenus.create({
    id: "search-instagram",
    title: "Look it up on Instagram!",
    contexts: ["selection"]
});

b.contextMenus.onClicked.addListener((info, _) => {
    if (info.menuItemId == "search-instagram") {
        b.tabs.create({
            active: !0,
            url: `https://www.instagram.com/${info.selectionText.trim()}/`
        })
    }
})
