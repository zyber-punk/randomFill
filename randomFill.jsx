var doc = app.activeDocument;
var colorPalette = [
    [15, 56, 15],
    [48, 98, 48],
    [76, 175, 80],
    [102, 187, 106]
];

function getRandomColor() {
    var rgbValues = colorPalette[Math.floor(Math.random() * colorPalette.length)];
    var color = new RGBColor();
    color.red = rgbValues[0];
    color.green = rgbValues[1];
    color.blue = rgbValues[2];
    return color;
}

for (var i = 0; i < doc.pathItems.length; i++) {
    var item = doc.pathItems[i];

    if (item.filled && !item.locked && !item.guides) { // Checks that the object can be modified
        var randomColor = getRandomColor();
        item.fillColor = randomColor;
        item.strokeColor = randomColor; // Apply the same color to the contours
    }
}

alert("Random filling complete");

