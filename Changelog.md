## 5/14/2024
- The converted website is finished: [SparXSS.Pages.Dev](https://sparxss.pages.dev)
- Because of the new SPARKvue update, the .spklabs do not work anymore either

## 5/13/2024
- The patch from 2/26/2024 meant custom links could not work and they won't be able to work, so I will remove the custom links section of the code
- A new patch has also came out meaning I am converting this from github to a website, so that it doesn't need javascript execution from SPARKvue itself to run

## 2/26/2024
- New method means custom links does not work anymore have to get that fixed
- Other than that it does not seem like anything else is broken, although it might be impossible to make the links stay now because of how many different sparklabs there are and how many different div id's/names there could possibly be
- So the removal of the links staying when you export is now probably impossible/ion wanna develop it anymore

## 10/29/2023
- When the javascript fails to execute it is logged to the console, so you can see it in Eruda
- Also deleted the Testing folder because I don't really need to test anything anymore

## 10/28/2023
- I did in fact find a way to save the textbox .value with manually clicking it, so that's a good thing

## 10/27/2023
- Added a third button in the hyperlinks menu that lets you copy the text in the textbox, so you can keep adding links incase you either dont want to export the file, or want to keep adding links in the future<br>
  If you do hit the copy button, all you have to do is paste the stuff copied to your clipboard in the textbox when reopening the app
- Added cancel feature to the menu that you type the hyper link URL's in, so you don't have to when you click the button
- Might have found a way to save the textbox .value without manually clicking it, contrary to what I had previously thought you had to do

## 10/26/2023
- Found out you have to click the textbox to update it before exporting to make the links actually save
- Made the javascript box load with the script instead of everytime the button is clicked - ngl I don't remember what this means

## 10/25/2023
- Basic link saving functionality added
- The hyperlink button now accepts pressing enter to add a hyperlink

## 10/24/2023
- The checkpoint2 and getFaviconUrl functions have been combined into 1 function (only checkpoint2 now)
- The Hyperlink URL can now have https:// when it could not before
- Uploaded New SparXSS.spklab file to reflect the updates made so far
