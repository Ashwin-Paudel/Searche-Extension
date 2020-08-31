var styleTag = document.createElement("style");
styleTag.textContent = `
html { margin: 50px; }

body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif }

h1 { font-weight: 800; font-size: 3.5em; }
h2 { font-weight: 800; font-size: 2.25em; }
p { font-weight: 400; font-size: 1.75em; }


/*
    Media Query para Dark Mode.
    Los valores aceptados son:
        - dark
        - light
        - no-preference
*/
@media (prefers-color-scheme: dark)
{
    body { background-color: #171717; color: #ffffff; }
    a { color: #d62f2f }
    a :visited { color: #d62f2f }
}

@media (prefers-color-scheme: light)
{
    body { background-color: #ffffff; color: #121212; }
    a { color: #ac2525 }
    a :visited { color: #ac2525 }
}
`
document.documentElement.appendChild(styleTag);
