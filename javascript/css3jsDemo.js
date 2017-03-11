/*
    Both block and speaker are class names
 */
function changeBlockquote(block, speaker) {
    var sheet = document.styleSheets[0];
    // var sheet = (function() {
    //     var style = document.createElement("style");
    //
    //     style.appendChild(document.createTextNode(""));
    //
    //     document.head.appendChild(style);
    //
    //     return style.sheet;
    // });
    addCSSRule(sheet, "." + block, "font-family: sans-serif; color: red", 1);
    addCSSRule(sheet, "." + speaker, "font-family: sans-serif; color: blue", 3);

}

function addCSSRule(sheet, selector, rules, index) {
    if ("insertRule" in sheet) {
        sheet.insertRule(selector + "{" + rules + "}", index);
    } else if ("addRule" in sheet) {
        sheet.addRule(selector, rules, index);
    }
}

function changeColumn(column) {
    var colClassSelector = '.col' + column;
    var rule;
    switch (column) {
        case 1:
            rule = "font-family"
    }
}