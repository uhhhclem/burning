var elements = document.getElementsByTagName('*');

var replacements = [
  [/Burning Man/gi, 'Self-Centered Asshole Fiesta'],
  [/Black Rock City/gi, 'Entitlement Central'],
  [/radical self-reliance/g, 'entitlement'],
  [/radical self-reliance/gi, 'Entitlement'],
  [/radical inclusion/g, 'fun for the rich'],
  [/radical inclusion/gi, 'Fun For The Rich'],
  [/radical self-expression/g, 'self-centeredness'],
  [/radical self-expression/gi, 'Self-Centeredness']
];

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
        if (node.nodeType != 3) {
            continue;
        }
        var text = node.nodeValue;
        var replacedText = text;
        for (var k = 0; k < replacements.length; k++) {
            var r = replacements[k];
            replacedText = replacedText.replace(r[0], r[1]);
        }
        if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
        }
    }
}