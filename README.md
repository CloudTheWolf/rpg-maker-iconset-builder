# rpg-maker-iconset-builder


This is a Photoshop script to automate creating an Iconset file for RPG Maker. 

By default, this is set to work for RPG Maker VX Ace (24px by 24px Icons, 16 icons per row)  however should work with other RPG Makers by adjusting these settings.

To change the settings, open the file in Notepad or VSCode and change the iconSize and iconsPerRow settings as needed

```jsx
...
// CONFIGURATION
var iconSize = 24;
var margin = 1;
var scaledSize = iconSize - (margin * 2);
var iconsPerRow = 16;
var startCol = 0;
var startRow = 0;
...
```

## Usage

Download the script and either place in your Photoshop install path (e.g. `C:\Program Files\adobe\Adobe Photoshop 2025\Presets\Scripts`) or somewhere safe (If you need to edit the config)

Start by putting all your icons in a folder (e.g. `C:\RPGIcons`) and split the icons into Sub-Folders. (Sub folders are optional but recommended)

All icons should be PNG files and be a 1:1 ratio. 

Next open your Icon set file in Photoshop or create a new file.
Make sure the size of your Icon set is correct.

For VX Ace it should be 384px wide, with a height divisible by 24 (e.g. 14400px will give you 600 rows)

As an Optional step, go to View -> Guides -> New Guide Layout. set the columns to 16 and rows to the height of your document divided by the icon size (Using the above example we'll have 600)

Now that you have the document ready, and your icons saved, go to File -> Scripts -> Browse and load [import-icons.jsx](import-icons.jsx). (If you saved to Presets\Scripts it'll be in Scripts list)

Next, you'll be prompted to locate the folder containing the icons.

Once you load the folder you will see Photoshop starting to Open the files, resize the image, and load the resized image into the Icon set document.
If you split your icons into Sub-Directories these will be split into folders in photoshop.

Once all icons are loaded a message box will say how many icons were loaded.

At this point you can move the icons around to change the order as needed.

For some icons, you may also need to add a 1px stroke to make the icon clearer

