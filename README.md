# rpg-maker-iconset-builder


This is a Photoshop script to automate creating an Iconset file for RPG Maker. 

By default, this is set to work for RPG Maker VX Ace (24px by 24px Icons, 16 icons per row)  however should work with other RPG Makers by adjusting these settings.

## Usage

Start by putting all your icons in a folder (eg `C:\RPGIcons`) and, split the icons into Sub-Folders. (Sub folders are optional but recommended)

All icons should be PNG files, and be either a 1:1 ratio. 

Next open your Iconset file in photoshop, or create a new file.
Make sure the size of your Iconset is correct.

For VX Ace it should be 384px wide, with a hight divisible by 24 (Eg 14400px will give you 600 rows)

As an Optional step, go to View -> Guides -> New Guide Layout. set the columns to 16 and rows to the hight of your document divided by the icon size (Using the above example we'll have 600)

Now that you have the document ready, and your icons saved, go to File -> Scripts -> Browse and load [import-icons.jsx](import-icons.jsx).

Next you'll be prompted to locate the folder containing the icons.

Once you load the folder you will see Photoshop starting to Open the files, resize the image, and load the resized image into the Iconset document.
If you split your icons into Sub-Directories these will be split into folders in photoshop.

Once all icons are loaded a messagebox will say how many icons were loaded.

Ad this point you can move the icons arround to change the order as needed.

For some icons, you may also need to add a 1px stroke to make the icon clearer 
