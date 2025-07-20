#target photoshop
app.bringToFront();

// CONFIGURATION
var iconSize = 24;
var margin = 1;
var iconsPerRow = 16;
var startCol = 0;
var startRow = 0;

// DON'T EDIT PAST HERE

var scaledSize = iconSize - (margin * 2);
var doc = app.activeDocument;

var baseFolder = Folder.selectDialog("Select folder with PNG icons");

function getPngFiles(folder, relativePath) {
    relativePath = relativePath || "";
    var files = [];
    var items = folder.getFiles();
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item instanceof Folder) {
            var subPath = relativePath + item.name + "/";
            files = files.concat(getPngFiles(item, subPath));
        } else if (item.name.match(/\.png$/i)) {
            files.push({ file: item, folder: relativePath });
        }
    }
    return files;
}

function getOrCreateGroup(name) {
    for (var i = 0; i < doc.layerSets.length; i++) {
        if (doc.layerSets[i].name === name) {
            return doc.layerSets[i];
        }
    }
    return doc.layerSets.add();
}

function getGridPosition(index) {
    var col = (startCol + index) % iconsPerRow;
    var row = startRow + Math.floor((startCol + index) / iconsPerRow);
    return {
        x: col * iconSize,
        y: row * iconSize
    };
}

function placeIcon(icon, index) {
    var pos = getGridPosition(index);

    var tempDoc = open(icon.file);

    tempDoc.resizeImage(UnitValue(scaledSize, "px"), UnitValue(scaledSize, "px"), null, ResampleMethod.BICUBIC);
    tempDoc.resizeCanvas(iconSize, iconSize, AnchorPosition.MIDDLECENTER);
    tempDoc.selection.selectAll();
    tempDoc.selection.copy();
    tempDoc.close(SaveOptions.DONOTSAVECHANGES);

    app.activeDocument.paste();
    var layer = doc.activeLayer;

    var bounds = layer.bounds;
    var currentX = bounds[0].as("px");
    var currentY = bounds[1].as("px");
    layer.translate(pos.x - currentX, pos.y - currentY);

    var groupName = icon.folder.replace(/\/$/, "") || "Root";
    var group = getOrCreateGroup(groupName);
    group.name = groupName;
    layer.move(group, ElementPlacement.INSIDE);
}

// MAIN
if (baseFolder) {
    var icons = getPngFiles(baseFolder);
    for (var i = 0; i < icons.length; i++) {
        placeIcon(icons[i], i);
    }
    alert("Placed " + icons.length + " icons grouped by subfolder.");
}
