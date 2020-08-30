var styleTag = document.createElement("style");
styleTag.textContent = `
@media (prefers-color-scheme: dark) {
    :root {
        --sbs-primary-bg-color: #121212;
        --sbs-secondary-bg-color: #313231;
        --sbs-tertiary-bg-color: #161716;
        --sbs-quaternary-bg-color: #141514;
        --sbs-primary-text-color: white;
        --sbs-secondary-text-color: #8e8e93;
        --sbs-primary-link-color: #66bbff;
    }

    html, body, .featured, .section-background {
        background-color: var(--sbs-primary-bg-color) !important;
        color: var(--sbs-primary-text-color) !important;
    }

    h1, h2, h3, h4, h5, h6 {
        color: var(--sbs-primary-text-color) !important;
    }

    #main a {
        color: var(--sbs-primary-link-color) !important;
    }

    /* TOP MENU */

    #ac-globalnav {
        background-color: var(--sbs-primary-bg-color) !important;
    }

    #ac-globalnav .ac-gn-link {
        color: var(--sbs-primary-text-color) !important;
    }

    #ac-globalnav .ac-gn-link-apple-developer {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjY5cHgiIGhlaWdodD0iNTZweCIgdmlld0JveD0iMCAwIDI2OSA1NiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNjAuMSAoODgxMzMpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPHRpdGxlPkFydGJvYXJkPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFydGJvYXJkIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iZGV2IiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU0LjAwMDAwMCwgMTEuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMuMDA2MDUwMSwwLjQ1MDUwMTQgQzIzLjQ3OTY4MjksMC40NTA1MDE0IDI5LjY4MDg1NDgsNi44OTU4MTI5IDI5LjY4MDg1NDgsMTguMDA0MjEyMyBDMjkuNjgwODU0OCwyOS4xMzcwMjQ4IDIzLjUwNDA5NywzNS42ODA0ODE4IDEzLjAwNjA1MDEsMzUuNjgwNDgxOCBMMC41NzkyODg1LDM1LjY4MDQ4MTggTDAuNTc5Mjg4NSwwLjQ1MDUwMTQgTDEzLjAwNjA1MDEsMC40NTA1MDE0IFogTTYuMDQ4MDM4NSwzMC45NDM2NjQ2IEwxMi40OTMzNTQ4LDMwLjk0MzY2NDYgQzE5Ljk2NDA1NzksMzAuOTQzNjY0NiAyNC4wOTAwMzQ1LDI2LjM3ODIzNDkgMjQuMDkwMDM0NSwxOC4wNTMwMzk2IEMyNC4wOTAwMzQ1LDkuNzUyMjU4NCAxOS45Mzk2NDM5LDUuMTYyNDE0NiAxMi40OTMzNTQ4LDUuMTYyNDE0NiBMNi4wNDgwMzg1LDUuMTYyNDE0NiBMNi4wNDgwMzg1LDMwLjk0MzY2NDYgTDYuMDQ4MDM4NSwzMC45NDM2NjQ2IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTU1LjYxNzg2NjUsMjguMTM2MDQ3NCBDNTQuOTA5ODU4NywzMi43OTkxMzMzIDUwLjM2ODg0MzEsMzUuOTk3ODYzOCA0NC41NTgyOTYyLDM1Ljk5Nzg2MzggQzM3LjA4NzU5MzEsMzUuOTk3ODYzOCAzMi40NDg5MjEyLDMwLjk5MjQ5MjcgMzIuNDQ4OTIxMiwyMi45NjAyNjYxIEMzMi40NDg5MjEyLDE0LjkwMzYyNTUgMzcuMTEyMDA3MSw5LjY3OTAxNjEgNDQuMzM4NTY5Niw5LjY3OTAxNjEgQzUxLjQ0MzA2MTgsOS42NzkwMTYxIDU1LjkxMDgzNTIsMTQuNTYxODI4NiA1NS45MTA4MzUyLDIyLjM0OTkxNDUgTDU1LjkxMDgzNTIsMjQuMTU2NTU1MSBMMzcuNzcxMTg2OCwyNC4xNTY1NTUxIEwzNy43NzExODY4LDI0LjQ3MzkzNzkgQzM3Ljc3MTE4NjgsMjguODY4NDY5MSA0MC41Mjk5NzU5LDMxLjc0OTMyODUgNDQuNjgwMzY2NSwzMS43NDkzMjg1IEM0Ny42MTAwNTQsMzEuNzQ5MzI4NSA0OS45MDQ5NzU5LDMwLjM1NzcyNjkgNTAuNjEyOTgzNywyOC4xMzYwNDczIEw1NS42MTc4NjY1LDI4LjEzNjA0NzMgTDU1LjYxNzg2NjUsMjguMTM2MDQ3NCBaIE0zNy43OTU2MDA5LDIwLjQ3MDAzMTcgTDUwLjYzNzM5NzgsMjAuNDcwMDMxNyBDNTAuNTE1MzI3NSwxNi41MzkzNjc2IDQ4LjAwMDY3OSwxMy45NTE0NzcgNDQuMzM4NTY5NywxMy45NTE0NzcgQzQwLjcwMDg3NDMsMTMuOTUxNDc3IDM4LjA2NDE1NTYsMTYuNTg4MTk1OCAzNy43OTU2MDA5LDIwLjQ3MDAzMTcgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUGF0aCIgcG9pbnRzPSI3Mi4wNTc4MDc5IDM1LjY4MDQ4MSA2Ni4zOTM3NDU0IDM1LjY4MDQ4MSA1Ny4xNDA4MTU3IDkuOTk2Mzk5IDYyLjc1NjA1MDEgOS45OTYzOTkgNjkuMjAxMzYyNiAzMC41Mjg2MjU2IDY5LjI5OTAxODggMzAuNTI4NjI1NiA3NS43NDQzMjM3IDkuOTk2Mzk5IDgxLjI2MTkwMTggOS45OTYzOTkiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMDUuMTYwMzM5LDI4LjEzNjA0NzQgQzEwNC40NTIzMzIsMzIuNzk5MTMzMyA5OS45MTEzMTYsMzUuOTk3ODYzOCA5NC4xMDA3NjkxLDM1Ljk5Nzg2MzggQzg2LjYzMDA2NiwzNS45OTc4NjM4IDgxLjk5MTM5NDEsMzAuOTkyNDkyNyA4MS45OTEzOTQxLDIyLjk2MDI2NjEgQzgxLjk5MTM5NDEsMTQuOTAzNjI1NSA4Ni42NTQ0OCw5LjY3OTAxNjEgOTMuODgxMDQyNSw5LjY3OTAxNjEgQzEwMC45ODU1MzUsOS42NzkwMTYxIDEwNS40NTMzMDgsMTQuNTYxODI4NiAxMDUuNDUzMzA4LDIyLjM0OTkxNDUgTDEwNS40NTMzMDgsMjQuMTU2NTU1MSBMODcuMzEzNjU5NywyNC4xNTY1NTUxIEw4Ny4zMTM2NTk3LDI0LjQ3MzkzNzkgQzg3LjMxMzY1OTcsMjguODY4NDY5MSA5MC4wNzI0NDg4LDMxLjc0OTMyODUgOTQuMjIyODM5NCwzMS43NDkzMjg1IEM5Ny4xNTI1MjY5LDMxLjc0OTMyODUgOTkuNDQ3NDQ4OCwzMC4zNTc3MjY5IDEwMC4xNTU0NTcsMjguMTM2MDQ3MyBMMTA1LjE2MDMzOSwyOC4xMzYwNDczIEwxMDUuMTYwMzM5LDI4LjEzNjA0NzQgWiBNODcuMzM4MDczNywyMC40NzAwMzE3IEwxMDAuMTc5ODcxLDIwLjQ3MDAzMTcgQzEwMC4wNTc4LDE2LjUzOTM2NzYgOTcuNTQzMTUxOCwxMy45NTE0NzcgOTMuODgxMDQyNSwxMy45NTE0NzcgQzkwLjI0MzM0NzIsMTMuOTUxNDc3IDg3LjYwNjYyODQsMTYuNTg4MTk1OCA4Ny4zMzgwNzM3LDIwLjQ3MDAzMTcgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUGF0aCIgcG9pbnRzPSIxMDkuNzI1NzY5IDAuNDUwNTAxNCAxMTQuOTk5MjA3IDAuNDUwNTAxNCAxMTQuOTk5MjA3IDM1LjY4MDQ4MSAxMDkuNzI1NzY5IDM1LjY4MDQ4MSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTExOC44NzIyNTMsMjIuODM4MTk1OCBDMTE4Ljg3MjI1MywxNC43NTcxNDExIDEyMy42MzI5OTYsOS42NzkwMTYxIDEzMS4wNTQ4NzEsOS42NzkwMTYxIEMxMzguNTAxMTYsOS42NzkwMTYxIDE0My4yMzc0ODgsMTQuNzU3MTQxMSAxNDMuMjM3NDg4LDIyLjgzODE5NTggQzE0My4yMzc0ODgsMzAuOTQzNjY0NiAxMzguNTI1NTc0LDM1Ljk5Nzg2MzggMTMxLjA1NDg3MSwzNS45OTc4NjM4IEMxMjMuNTg0MTY4LDM1Ljk5Nzg2MzggMTE4Ljg3MjI1MywzMC45NDM2NjQ2IDExOC44NzIyNTMsMjIuODM4MTk1OCBaIE0xMzcuODY2Mzk0LDIyLjgzODE5NTggQzEzNy44NjYzOTQsMTcuMjk2MjAzNiAxMzUuMzI3MzMyLDE0LjAyNDcxOTIgMTMxLjA1NDg3MSwxNC4wMjQ3MTkyIEMxMjYuNzgyNDEsMTQuMDI0NzE5MiAxMjQuMjQzMzQ3LDE3LjMyMDYxNzYgMTI0LjI0MzM0NywyMi44MzgxOTU4IEMxMjQuMjQzMzQ3LDI4LjQwNDYwMiAxMjYuNzgyNDEsMzEuNjUxNjcyNCAxMzEuMDU0ODcxLDMxLjY1MTY3MjQgQzEzNS4zMjczMzIsMzEuNjUxNjcyNCAxMzcuODY2Mzk0LDI4LjQwNDYwMjEgMTM3Ljg2NjM5NCwyMi44MzgxOTU4IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE3MS4wMDg5NzIsMjIuODM4MTk1OCBDMTcxLjAwODk3MiwzMC44MjE1OTQyIDE2Ni43MzY1MTEsMzUuOTQ5MDM1NiAxNjAuMjkxMTk5LDM1Ljk0OTAzNTYgQzE1Ni42MjkwODksMzUuOTQ5MDM1NiAxNTMuNzIzODE2LDM0LjMxMzI5MzQgMTUyLjIxMDE0NCwzMS40NTYzNTk4IEwxNTIuMDg4MDc0LDMxLjQ1NjM1OTggTDE1Mi4wODgwNzQsNDQuMTc2NTc0NiBMMTQ2LjgxNDYzNiw0NC4xNzY1NzQ2IEwxNDYuODE0NjM2LDkuOTk2Mzk4OSBMMTUxLjkxNzE3NSw5Ljk5NjM5ODkgTDE1MS45MTcxNzUsMTQuMjY4ODU5OCBMMTUyLjAxNDgzMiwxNC4yNjg4NTk4IEMxNTMuNDc5Njc1LDExLjUxMDA3MDcgMTU2LjYwNDY3NSw5LjcyNzg0NDIgMTYwLjE5MzU0Miw5LjcyNzg0NDIgQzE2Ni43MTIwOTcsOS43Mjc4NDQyIDE3MS4wMDg5NzIsMTQuODc5MjExNCAxNzEuMDA4OTcyLDIyLjgzODE5NTggWiBNMTY1LjU4OTA1LDIyLjgzODE5NTggQzE2NS41ODkwNSwxNy42MzgwMDA1IDE2Mi45MDM1MDMsMTQuMjIwMDMxNyAxNTguODAxOTQxLDE0LjIyMDAzMTcgQzE1NC43NzM2MjEsMTQuMjIwMDMxNyAxNTIuMDYzNjYsMTcuNzExMjQyNiAxNTIuMDYzNjYsMjIuODM4MTk1OCBDMTUyLjA2MzY2LDI4LjAxMzk3NyAxNTQuNzczNjIxLDMxLjQ4MDc3MzkgMTU4LjgwMTk0MSwzMS40ODA3NzM5IEMxNjIuOTAzNTAzLDMxLjQ4MDc3MzkgMTY1LjU4OTA1LDI4LjA4NzIxOTIgMTY1LjU4OTA1LDIyLjgzODE5NTggWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTk2Ljg4Mjk5NiwyOC4xMzYwNDc0IEMxOTYuMTc0OTg4LDMyLjc5OTEzMzMgMTkxLjYzMzk3MiwzNS45OTc4NjM4IDE4NS44MjM0MjUsMzUuOTk3ODYzOCBDMTc4LjM1MjcyMiwzNS45OTc4NjM4IDE3My43MTQwNSwzMC45OTI0OTI3IDE3My43MTQwNSwyMi45NjAyNjYxIEMxNzMuNzE0MDUsMTQuOTAzNjI1NSAxNzguMzc3MTM2LDkuNjc5MDE2MSAxODUuNjAzNjk5LDkuNjc5MDE2MSBDMTkyLjcwODE5MSw5LjY3OTAxNjEgMTk3LjE3NTk2NCwxNC41NjE4Mjg2IDE5Ny4xNzU5NjQsMjIuMzQ5OTE0NSBMMTk3LjE3NTk2NCwyNC4xNTY1NTUxIEwxNzkuMDM2MzE2LDI0LjE1NjU1NTEgTDE3OS4wMzYzMTYsMjQuNDczOTM3OSBDMTc5LjAzNjMxNiwyOC44Njg0NjkxIDE4MS43OTUxMDUsMzEuNzQ5MzI4NSAxODUuOTQ1NDk2LDMxLjc0OTMyODUgQzE4OC44NzUxODMsMzEuNzQ5MzI4NSAxOTEuMTcwMTA1LDMwLjM1NzcyNjkgMTkxLjg3ODExMywyOC4xMzYwNDczIEwxOTYuODgyOTk2LDI4LjEzNjA0NzMgTDE5Ni44ODI5OTYsMjguMTM2MDQ3NCBaIE0xNzkuMDYwNzMsMjAuNDcwMDMxNyBMMTkxLjkwMjUyNywyMC40NzAwMzE3IEMxOTEuNzgwNDU3LDE2LjUzOTM2NzYgMTg5LjI2NTgwOCwxMy45NTE0NzcgMTg1LjYwMzY5OSwxMy45NTE0NzcgQzE4MS45NjYwMDMsMTMuOTUxNDc3IDE3OS4zMjkyODUsMTYuNTg4MTk1OCAxNzkuMDYwNzMsMjAuNDcwMDMxNyBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMDEuMDAzMTEzLDkuOTk2Mzk4OSBMMjA2LjAzMjQxLDkuOTk2Mzk4OSBMMjA2LjAzMjQxLDE0LjM2NjUxNjEgTDIwNi4xNTQ0OCwxNC4zNjY1MTYxIEMyMDYuOTYwMTQ0LDExLjQ2MTI0MjcgMjA5LjMwMzg5NCw5LjcyNzg0NDIgMjEyLjMzMTIzOCw5LjcyNzg0NDIgQzIxMy4wODgwNzQsOS43Mjc4NDQyIDIxMy43MjI4MzksOS44MjU1MDA0IDIxNC4xMzc4NzgsOS45MjMxNTY3IEwyMTQuMTM3ODc4LDE0Ljg1NDc5NzMgQzIxMy43MjI4MzksMTQuNjgzODk4OSAyMTIuNzk1MTA1LDE0LjUzNzQxNDUgMjExLjc2OTcxNCwxNC41Mzc0MTQ1IEMyMDguMzc2MTYsMTQuNTM3NDE0NSAyMDYuMjc2NTUsMTYuODMyMzM2NCAyMDYuMjc2NTUsMjAuNDQ1NjE3NiBMMjA2LjI3NjU1LDM1LjY4MDQ4MSBMMjAxLjAwMzExMywzNS42ODA0ODEgTDIwMS4wMDMxMTMsOS45OTYzOTg5IEwyMDEuMDAzMTEzLDkuOTk2Mzk4OSBaIiBpZD0iUGF0aCI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxnIGlkPSJYTUxJRF81XyI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjYuNDYwMTY1LDcuNTEzMzgxIEMyOC4wNzcxOTQyLDUuNDkwODI5NSAyOS4xNzQ1MDE0LDIuNzc1MTIwNSAyOC44ODUwOTc1LDAgQzI2LjUxNzk4ODIsMC4xMTc3MDM5IDIzLjYyOTM4NjksMS41NjE2NjE3IDIxLjk1NzAyMzYsMy41ODU4MDE0IEMyMC40NTU0MjMzLDUuMzE5MTY0MyAxOS4xMjYzODg1LDguMTQ4NTcxMyAxOS40NzI4NjAzLDEwLjgwNzM1OSBDMjIuMTMwMDYwMiwxMS4wMzc4NTggMjQuNzg0ODA1Myw5LjQ3OTE5MjcgMjYuNDYwMTY1LDcuNTEzMzgxIiBpZD0iWE1MSURfMTRfIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjguODU0OTAyMywxMS4zMjY0OTkgQzI0Ljk5NjAwNDEsMTEuMDk2NjM1OCAyMS43MTUwMDIxLDEzLjUxNjYwNDQgMTkuODcyMTc1MiwxMy41MTY2MDQ0IEMxOC4wMjgzMzk0LDEzLjUxNjYwNDQgMTUuMjA2Mzc5OSwxMS40NDIzMzAzIDEyLjE1NDE5NjcsMTEuNDk4MjMgQzguMTgxNTkxLDExLjU1NjU3NzcgNC40OTU0Njg2LDEzLjgwMjcyNzcgMi40Nzk1NDA4LDE3LjM3NTE0MzEgQy0xLjY2Njg4NDQsMjQuNTIxNzM4MSAxLjM4NTI5NzYsMzUuMTIyNjUwMiA1LjQxNzQ3NTQsNDAuOTQzMTYxMSBDNy4zNzU1OTQ4LDQzLjgyMjc0NjQgOS43MzU0NTE5LDQ2Ljk5MzM4OTIgMTIuODQ0OTM4NSw0Ni44Nzk1MDE0IEMxNS43ODI4NzM0LDQ2Ljc2NDIwOTggMTYuOTM0NDE5OSw0NC45NzcxMzg2IDIwLjUwNTYxMzUsNDQuOTc3MTM4NiBDMjQuMDc0MTc1MSw0NC45NzcxMzg2IDI1LjExMTQ3NTIsNDYuODc5NTAxNCAyOC4yMjE0NjYyLDQ2LjgyMTg3MjggQzMxLjQ0NjYwMzksNDYuNzY0MjA5OCAzMy40NjI4OTA4LDQzLjk0MDg0NTYgMzUuNDIwOTcxMSw0MS4wNTg0NTI3IEMzNy42NjczMDE0LDM3Ljc3NTg2NzYgMzguNTg2ODY0NywzNC42MDYyNjk5IDM4LjY0NDcwNjksMzQuNDMyMjcwMSBDMzguNTg2ODY0NiwzNC4zNzQ2NDE1IDMyLjQyNTczNTYsMzIuMDExMDc3OSAzMi4zNjg2MTA2LDI0LjkyMzg3NCBDMzIuMzEwNDQ0MSwxOC45ODk2NTY1IDM3LjIwNTc4MDIsMTYuMTY3MDEzMyAzNy40MzYxODAzLDE1Ljk5MTk3MDIgQzM0LjY3MTc0MTUsMTEuOTAzMzUxOCAzMC4zNTIzNjE3LDExLjQ0MjMzMDQgMjguODU0OTAyMywxMS4zMjY0OTkiIGlkPSJYTUxJRF82XyI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=") !important;
    }

    /* MAIN */

    .topic-summary,
    .eyebrow,
    .datalist-term,
    .datalist-description dt,
    .datalist-description dt code,
    .copy {
        color: var(--sbs-secondary-text-color) !important;
    }

    .symbol-name-decorated .decorator, .symbol-name-decorated .label {
        color: var(--sbs-secondary-text-color) !important;
    }

    .label {
        color: var(--sbs-primary-text-color) !important;
    }

    #main .svg-icon-small {
        fill: var(--sbs-secondary-text-color) !important;
    }

    /* Separator below title and summary */
    #main .topic-content::before {
        border-top: 1px solid var(--sbs-secondary-text-color) !important;
    }

    /* Separator below "See Also" */
    #main .contenttable-container {
        border-top: 1px solid var(--sbs-secondary-text-color) !important;
    }

    #main .category:not(:last-child) {
        border-bottom: 1px solid var(--sbs-secondary-text-color) !important;
    }

    .doc-topic {
        background: unset !important;
    }

    .contenttable-section, .primary-content:before {
        border-top-color: var(--sbs-secondary-bg-color) !important;
    }

    div.summary-section.frameworks>p, div.summary-section.availability>p, #on-this-page-title {
        color: var(--sbs-secondary-text-color) !important;
    }

    .form-dropdown, .filter__delete-button-wrapper {
        background: var(--sbs-tertiary-bg-color) !important;
    }

    .filter__wrapper {
        border-color: var(--sbs-tertiary-bg-color) !important;
    }

    .card:not(.changed), .filter__suggested-tags {
        border-color: #333 !important;
    }

    .form-dropdown~.form-icon {
        color: #333 !important;
    }
    
    .tag button:not(:hover) {
        background-color: var(--sbs-secondary-bg-color) !important;
        color: var(--sbs-primary-text-color) !important;
    }
    
    .card:not(.featured-card) > .details {
        background-color: var(--sbs-tertiary-bg-color) !important;
    }
    
    .details .title {
        color: var(--sbs-primary-text-color) !important;
    }
    
    .details .content {
        color: var(--sbs-secondary-text-color) !important;
    }
    
    .resources {
        background-color: var(--sbs-tertiary-bg-color) !important;
    }

    /* `Download` button */
    #main>div.row.container>div.col.description.large-9.medium-9.small-12>a:any-link {
        color: #fff !important;
    }

    /* CODE */

    .source, .code-listing {
        background: var(--sbs-tertiary-bg-color) !important;
        border-color: var(--sbs-tertiary-bg-color) !important;
    }

    .formatted-content .code-listing .code-source,
    .declaration .code-listing .code-source {
        border: 1px solid #444444 !important;
        color: var(--sbs-primary-text-color) !important;
        background-color: var(--sbs-secondary-bg-color) !important;
    }

    .syntax-param-name {
        color: var(--sbs-primary-text-color) !important;
    }

    .syntax-comment, .syntax-quote {
        color: #6C7986 !important;
    }

    .syntax-keyword, .syntax-keyword .symbolref, .syntax-literal, .syntax-selector-tag {
        color: #FC5FA3 !important;
    }

    .syntax-bullet, .syntax-meta, .syntax-number, .syntax-symbol, .syntax-tag, .syntax-title {
        color: #D0BF69 !important;
    }

    .symbolref, .syntax-attr, .syntax-built_in, .syntax-builtin-name, .syntax-class, .syntax-params, .syntax-section, .syntax-title, .syntax-type, .syntax-type .symbolref {
        color: #D0A8FF !important;
    }

    .syntax-string {
        color: #FC6A5D !important;
    }

    .syntax-attribute, .syntax-identifier, .syntax-subst {
        color: #41A1C0 !important;
    }

    .source, .code-listing, .card__title, .code-line {
        color: #fff !important;
    }

    /* NOTE, TIP & IMPORTANT */

    .aside {
        background-color: var(--sbs-secondary-bg-color) !important;
        color: var(--sbs-primary-text-color) !important;
    }

    .aside-name {
        color: var(--sbs-primary-text-color) !important;
    }

    .aside-note, .aside-tip {
        border-left: 6px solid var(--sbs-secondary-text-color) !important;
    }

    .note, .important {
        background: var(--sbs-tertiary-bg-color) !important;
    }

    .note {
        border-left-color: #222 !important;
    }

    .important {
        border-left-color: #fee450 !important;
    }

    /* VIOLATORS */

    .violator {
        border-color: var(--sbs-secondary-text-color) !important;
        color: var(--sbs-secondary-text-color) !important;
    }

    /* BETA */

    .betainfo {
        background-color: var(--sbs-quaternary-bg-color) !important;
    }

    .changed.code-listing .code-source, .changed .code-listing .code-source {
        background-color: transparent !important;
        border: 0 !important;
    }

    .changed::before {
        background: transparent !important;
    }

    /* FOOTER */

    .alt-light {
        background-color: var(--sbs-primary-bg-color) !important;
    }

    #globalfooter-wrapper {
        background-color: var(--sbs-tertiary-bg-color) !important;
    }

    #globalfooter-wrapper a {
        color: var(--sbs-primary-link-color) !important;
    }

    #globalfooter-wrapper h3 a {
        color: var(--sbs-primary-text-color) !important;
    }

    #globalfooter-wrapper ul li a {
        color: var(--sbs-secondary-text-color) !important;
    }

    #globalfooter-wrapper home {
        color: var(--sbs-primary-text-color) !important;
    }

    #globalfooter-wrapper .breadcrumbs-home {
        background-color: transparent !important;
        color: var(--sbs-primary-text-color) !important;
    }
    
    .ac-gf-footer-news {
        border-bottom-color: #222 !important;
    }

    .footer-breadory .breadcrumbs-home {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjY5cHgiIGhlaWdodD0iNTZweCIgdmlld0JveD0iMCAwIDI2OSA1NiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNjAuMSAoODgxMzMpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPHRpdGxlPkFydGJvYXJkPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFydGJvYXJkIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iZGV2IiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU0LjAwMDAwMCwgMTEuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMuMDA2MDUwMSwwLjQ1MDUwMTQgQzIzLjQ3OTY4MjksMC40NTA1MDE0IDI5LjY4MDg1NDgsNi44OTU4MTI5IDI5LjY4MDg1NDgsMTguMDA0MjEyMyBDMjkuNjgwODU0OCwyOS4xMzcwMjQ4IDIzLjUwNDA5NywzNS42ODA0ODE4IDEzLjAwNjA1MDEsMzUuNjgwNDgxOCBMMC41NzkyODg1LDM1LjY4MDQ4MTggTDAuNTc5Mjg4NSwwLjQ1MDUwMTQgTDEzLjAwNjA1MDEsMC40NTA1MDE0IFogTTYuMDQ4MDM4NSwzMC45NDM2NjQ2IEwxMi40OTMzNTQ4LDMwLjk0MzY2NDYgQzE5Ljk2NDA1NzksMzAuOTQzNjY0NiAyNC4wOTAwMzQ1LDI2LjM3ODIzNDkgMjQuMDkwMDM0NSwxOC4wNTMwMzk2IEMyNC4wOTAwMzQ1LDkuNzUyMjU4NCAxOS45Mzk2NDM5LDUuMTYyNDE0NiAxMi40OTMzNTQ4LDUuMTYyNDE0NiBMNi4wNDgwMzg1LDUuMTYyNDE0NiBMNi4wNDgwMzg1LDMwLjk0MzY2NDYgTDYuMDQ4MDM4NSwzMC45NDM2NjQ2IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTU1LjYxNzg2NjUsMjguMTM2MDQ3NCBDNTQuOTA5ODU4NywzMi43OTkxMzMzIDUwLjM2ODg0MzEsMzUuOTk3ODYzOCA0NC41NTgyOTYyLDM1Ljk5Nzg2MzggQzM3LjA4NzU5MzEsMzUuOTk3ODYzOCAzMi40NDg5MjEyLDMwLjk5MjQ5MjcgMzIuNDQ4OTIxMiwyMi45NjAyNjYxIEMzMi40NDg5MjEyLDE0LjkwMzYyNTUgMzcuMTEyMDA3MSw5LjY3OTAxNjEgNDQuMzM4NTY5Niw5LjY3OTAxNjEgQzUxLjQ0MzA2MTgsOS42NzkwMTYxIDU1LjkxMDgzNTIsMTQuNTYxODI4NiA1NS45MTA4MzUyLDIyLjM0OTkxNDUgTDU1LjkxMDgzNTIsMjQuMTU2NTU1MSBMMzcuNzcxMTg2OCwyNC4xNTY1NTUxIEwzNy43NzExODY4LDI0LjQ3MzkzNzkgQzM3Ljc3MTE4NjgsMjguODY4NDY5MSA0MC41Mjk5NzU5LDMxLjc0OTMyODUgNDQuNjgwMzY2NSwzMS43NDkzMjg1IEM0Ny42MTAwNTQsMzEuNzQ5MzI4NSA0OS45MDQ5NzU5LDMwLjM1NzcyNjkgNTAuNjEyOTgzNywyOC4xMzYwNDczIEw1NS42MTc4NjY1LDI4LjEzNjA0NzMgTDU1LjYxNzg2NjUsMjguMTM2MDQ3NCBaIE0zNy43OTU2MDA5LDIwLjQ3MDAzMTcgTDUwLjYzNzM5NzgsMjAuNDcwMDMxNyBDNTAuNTE1MzI3NSwxNi41MzkzNjc2IDQ4LjAwMDY3OSwxMy45NTE0NzcgNDQuMzM4NTY5NywxMy45NTE0NzcgQzQwLjcwMDg3NDMsMTMuOTUxNDc3IDM4LjA2NDE1NTYsMTYuNTg4MTk1OCAzNy43OTU2MDA5LDIwLjQ3MDAzMTcgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUGF0aCIgcG9pbnRzPSI3Mi4wNTc4MDc5IDM1LjY4MDQ4MSA2Ni4zOTM3NDU0IDM1LjY4MDQ4MSA1Ny4xNDA4MTU3IDkuOTk2Mzk5IDYyLjc1NjA1MDEgOS45OTYzOTkgNjkuMjAxMzYyNiAzMC41Mjg2MjU2IDY5LjI5OTAxODggMzAuNTI4NjI1NiA3NS43NDQzMjM3IDkuOTk2Mzk5IDgxLjI2MTkwMTggOS45OTYzOTkiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMDUuMTYwMzM5LDI4LjEzNjA0NzQgQzEwNC40NTIzMzIsMzIuNzk5MTMzMyA5OS45MTEzMTYsMzUuOTk3ODYzOCA5NC4xMDA3NjkxLDM1Ljk5Nzg2MzggQzg2LjYzMDA2NiwzNS45OTc4NjM4IDgxLjk5MTM5NDEsMzAuOTkyNDkyNyA4MS45OTEzOTQxLDIyLjk2MDI2NjEgQzgxLjk5MTM5NDEsMTQuOTAzNjI1NSA4Ni42NTQ0OCw5LjY3OTAxNjEgOTMuODgxMDQyNSw5LjY3OTAxNjEgQzEwMC45ODU1MzUsOS42NzkwMTYxIDEwNS40NTMzMDgsMTQuNTYxODI4NiAxMDUuNDUzMzA4LDIyLjM0OTkxNDUgTDEwNS40NTMzMDgsMjQuMTU2NTU1MSBMODcuMzEzNjU5NywyNC4xNTY1NTUxIEw4Ny4zMTM2NTk3LDI0LjQ3MzkzNzkgQzg3LjMxMzY1OTcsMjguODY4NDY5MSA5MC4wNzI0NDg4LDMxLjc0OTMyODUgOTQuMjIyODM5NCwzMS43NDkzMjg1IEM5Ny4xNTI1MjY5LDMxLjc0OTMyODUgOTkuNDQ3NDQ4OCwzMC4zNTc3MjY5IDEwMC4xNTU0NTcsMjguMTM2MDQ3MyBMMTA1LjE2MDMzOSwyOC4xMzYwNDczIEwxMDUuMTYwMzM5LDI4LjEzNjA0NzQgWiBNODcuMzM4MDczNywyMC40NzAwMzE3IEwxMDAuMTc5ODcxLDIwLjQ3MDAzMTcgQzEwMC4wNTc4LDE2LjUzOTM2NzYgOTcuNTQzMTUxOCwxMy45NTE0NzcgOTMuODgxMDQyNSwxMy45NTE0NzcgQzkwLjI0MzM0NzIsMTMuOTUxNDc3IDg3LjYwNjYyODQsMTYuNTg4MTk1OCA4Ny4zMzgwNzM3LDIwLjQ3MDAzMTcgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUGF0aCIgcG9pbnRzPSIxMDkuNzI1NzY5IDAuNDUwNTAxNCAxMTQuOTk5MjA3IDAuNDUwNTAxNCAxMTQuOTk5MjA3IDM1LjY4MDQ4MSAxMDkuNzI1NzY5IDM1LjY4MDQ4MSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTExOC44NzIyNTMsMjIuODM4MTk1OCBDMTE4Ljg3MjI1MywxNC43NTcxNDExIDEyMy42MzI5OTYsOS42NzkwMTYxIDEzMS4wNTQ4NzEsOS42NzkwMTYxIEMxMzguNTAxMTYsOS42NzkwMTYxIDE0My4yMzc0ODgsMTQuNzU3MTQxMSAxNDMuMjM3NDg4LDIyLjgzODE5NTggQzE0My4yMzc0ODgsMzAuOTQzNjY0NiAxMzguNTI1NTc0LDM1Ljk5Nzg2MzggMTMxLjA1NDg3MSwzNS45OTc4NjM4IEMxMjMuNTg0MTY4LDM1Ljk5Nzg2MzggMTE4Ljg3MjI1MywzMC45NDM2NjQ2IDExOC44NzIyNTMsMjIuODM4MTk1OCBaIE0xMzcuODY2Mzk0LDIyLjgzODE5NTggQzEzNy44NjYzOTQsMTcuMjk2MjAzNiAxMzUuMzI3MzMyLDE0LjAyNDcxOTIgMTMxLjA1NDg3MSwxNC4wMjQ3MTkyIEMxMjYuNzgyNDEsMTQuMDI0NzE5MiAxMjQuMjQzMzQ3LDE3LjMyMDYxNzYgMTI0LjI0MzM0NywyMi44MzgxOTU4IEMxMjQuMjQzMzQ3LDI4LjQwNDYwMiAxMjYuNzgyNDEsMzEuNjUxNjcyNCAxMzEuMDU0ODcxLDMxLjY1MTY3MjQgQzEzNS4zMjczMzIsMzEuNjUxNjcyNCAxMzcuODY2Mzk0LDI4LjQwNDYwMjEgMTM3Ljg2NjM5NCwyMi44MzgxOTU4IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE3MS4wMDg5NzIsMjIuODM4MTk1OCBDMTcxLjAwODk3MiwzMC44MjE1OTQyIDE2Ni43MzY1MTEsMzUuOTQ5MDM1NiAxNjAuMjkxMTk5LDM1Ljk0OTAzNTYgQzE1Ni42MjkwODksMzUuOTQ5MDM1NiAxNTMuNzIzODE2LDM0LjMxMzI5MzQgMTUyLjIxMDE0NCwzMS40NTYzNTk4IEwxNTIuMDg4MDc0LDMxLjQ1NjM1OTggTDE1Mi4wODgwNzQsNDQuMTc2NTc0NiBMMTQ2LjgxNDYzNiw0NC4xNzY1NzQ2IEwxNDYuODE0NjM2LDkuOTk2Mzk4OSBMMTUxLjkxNzE3NSw5Ljk5NjM5ODkgTDE1MS45MTcxNzUsMTQuMjY4ODU5OCBMMTUyLjAxNDgzMiwxNC4yNjg4NTk4IEMxNTMuNDc5Njc1LDExLjUxMDA3MDcgMTU2LjYwNDY3NSw5LjcyNzg0NDIgMTYwLjE5MzU0Miw5LjcyNzg0NDIgQzE2Ni43MTIwOTcsOS43Mjc4NDQyIDE3MS4wMDg5NzIsMTQuODc5MjExNCAxNzEuMDA4OTcyLDIyLjgzODE5NTggWiBNMTY1LjU4OTA1LDIyLjgzODE5NTggQzE2NS41ODkwNSwxNy42MzgwMDA1IDE2Mi45MDM1MDMsMTQuMjIwMDMxNyAxNTguODAxOTQxLDE0LjIyMDAzMTcgQzE1NC43NzM2MjEsMTQuMjIwMDMxNyAxNTIuMDYzNjYsMTcuNzExMjQyNiAxNTIuMDYzNjYsMjIuODM4MTk1OCBDMTUyLjA2MzY2LDI4LjAxMzk3NyAxNTQuNzczNjIxLDMxLjQ4MDc3MzkgMTU4LjgwMTk0MSwzMS40ODA3NzM5IEMxNjIuOTAzNTAzLDMxLjQ4MDc3MzkgMTY1LjU4OTA1LDI4LjA4NzIxOTIgMTY1LjU4OTA1LDIyLjgzODE5NTggWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTk2Ljg4Mjk5NiwyOC4xMzYwNDc0IEMxOTYuMTc0OTg4LDMyLjc5OTEzMzMgMTkxLjYzMzk3MiwzNS45OTc4NjM4IDE4NS44MjM0MjUsMzUuOTk3ODYzOCBDMTc4LjM1MjcyMiwzNS45OTc4NjM4IDE3My43MTQwNSwzMC45OTI0OTI3IDE3My43MTQwNSwyMi45NjAyNjYxIEMxNzMuNzE0MDUsMTQuOTAzNjI1NSAxNzguMzc3MTM2LDkuNjc5MDE2MSAxODUuNjAzNjk5LDkuNjc5MDE2MSBDMTkyLjcwODE5MSw5LjY3OTAxNjEgMTk3LjE3NTk2NCwxNC41NjE4Mjg2IDE5Ny4xNzU5NjQsMjIuMzQ5OTE0NSBMMTk3LjE3NTk2NCwyNC4xNTY1NTUxIEwxNzkuMDM2MzE2LDI0LjE1NjU1NTEgTDE3OS4wMzYzMTYsMjQuNDczOTM3OSBDMTc5LjAzNjMxNiwyOC44Njg0NjkxIDE4MS43OTUxMDUsMzEuNzQ5MzI4NSAxODUuOTQ1NDk2LDMxLjc0OTMyODUgQzE4OC44NzUxODMsMzEuNzQ5MzI4NSAxOTEuMTcwMTA1LDMwLjM1NzcyNjkgMTkxLjg3ODExMywyOC4xMzYwNDczIEwxOTYuODgyOTk2LDI4LjEzNjA0NzMgTDE5Ni44ODI5OTYsMjguMTM2MDQ3NCBaIE0xNzkuMDYwNzMsMjAuNDcwMDMxNyBMMTkxLjkwMjUyNywyMC40NzAwMzE3IEMxOTEuNzgwNDU3LDE2LjUzOTM2NzYgMTg5LjI2NTgwOCwxMy45NTE0NzcgMTg1LjYwMzY5OSwxMy45NTE0NzcgQzE4MS45NjYwMDMsMTMuOTUxNDc3IDE3OS4zMjkyODUsMTYuNTg4MTk1OCAxNzkuMDYwNzMsMjAuNDcwMDMxNyBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMDEuMDAzMTEzLDkuOTk2Mzk4OSBMMjA2LjAzMjQxLDkuOTk2Mzk4OSBMMjA2LjAzMjQxLDE0LjM2NjUxNjEgTDIwNi4xNTQ0OCwxNC4zNjY1MTYxIEMyMDYuOTYwMTQ0LDExLjQ2MTI0MjcgMjA5LjMwMzg5NCw5LjcyNzg0NDIgMjEyLjMzMTIzOCw5LjcyNzg0NDIgQzIxMy4wODgwNzQsOS43Mjc4NDQyIDIxMy43MjI4MzksOS44MjU1MDA0IDIxNC4xMzc4NzgsOS45MjMxNTY3IEwyMTQuMTM3ODc4LDE0Ljg1NDc5NzMgQzIxMy43MjI4MzksMTQuNjgzODk4OSAyMTIuNzk1MTA1LDE0LjUzNzQxNDUgMjExLjc2OTcxNCwxNC41Mzc0MTQ1IEMyMDguMzc2MTYsMTQuNTM3NDE0NSAyMDYuMjc2NTUsMTYuODMyMzM2NCAyMDYuMjc2NTUsMjAuNDQ1NjE3NiBMMjA2LjI3NjU1LDM1LjY4MDQ4MSBMMjAxLjAwMzExMywzNS42ODA0ODEgTDIwMS4wMDMxMTMsOS45OTYzOTg5IEwyMDEuMDAzMTEzLDkuOTk2Mzk4OSBaIiBpZD0iUGF0aCI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxnIGlkPSJYTUxJRF81XyI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjYuNDYwMTY1LDcuNTEzMzgxIEMyOC4wNzcxOTQyLDUuNDkwODI5NSAyOS4xNzQ1MDE0LDIuNzc1MTIwNSAyOC44ODUwOTc1LDAgQzI2LjUxNzk4ODIsMC4xMTc3MDM5IDIzLjYyOTM4NjksMS41NjE2NjE3IDIxLjk1NzAyMzYsMy41ODU4MDE0IEMyMC40NTU0MjMzLDUuMzE5MTY0MyAxOS4xMjYzODg1LDguMTQ4NTcxMyAxOS40NzI4NjAzLDEwLjgwNzM1OSBDMjIuMTMwMDYwMiwxMS4wMzc4NTggMjQuNzg0ODA1Myw5LjQ3OTE5MjcgMjYuNDYwMTY1LDcuNTEzMzgxIiBpZD0iWE1MSURfMTRfIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjguODU0OTAyMywxMS4zMjY0OTkgQzI0Ljk5NjAwNDEsMTEuMDk2NjM1OCAyMS43MTUwMDIxLDEzLjUxNjYwNDQgMTkuODcyMTc1MiwxMy41MTY2MDQ0IEMxOC4wMjgzMzk0LDEzLjUxNjYwNDQgMTUuMjA2Mzc5OSwxMS40NDIzMzAzIDEyLjE1NDE5NjcsMTEuNDk4MjMgQzguMTgxNTkxLDExLjU1NjU3NzcgNC40OTU0Njg2LDEzLjgwMjcyNzcgMi40Nzk1NDA4LDE3LjM3NTE0MzEgQy0xLjY2Njg4NDQsMjQuNTIxNzM4MSAxLjM4NTI5NzYsMzUuMTIyNjUwMiA1LjQxNzQ3NTQsNDAuOTQzMTYxMSBDNy4zNzU1OTQ4LDQzLjgyMjc0NjQgOS43MzU0NTE5LDQ2Ljk5MzM4OTIgMTIuODQ0OTM4NSw0Ni44Nzk1MDE0IEMxNS43ODI4NzM0LDQ2Ljc2NDIwOTggMTYuOTM0NDE5OSw0NC45NzcxMzg2IDIwLjUwNTYxMzUsNDQuOTc3MTM4NiBDMjQuMDc0MTc1MSw0NC45NzcxMzg2IDI1LjExMTQ3NTIsNDYuODc5NTAxNCAyOC4yMjE0NjYyLDQ2LjgyMTg3MjggQzMxLjQ0NjYwMzksNDYuNzY0MjA5OCAzMy40NjI4OTA4LDQzLjk0MDg0NTYgMzUuNDIwOTcxMSw0MS4wNTg0NTI3IEMzNy42NjczMDE0LDM3Ljc3NTg2NzYgMzguNTg2ODY0NywzNC42MDYyNjk5IDM4LjY0NDcwNjksMzQuNDMyMjcwMSBDMzguNTg2ODY0NiwzNC4zNzQ2NDE1IDMyLjQyNTczNTYsMzIuMDExMDc3OSAzMi4zNjg2MTA2LDI0LjkyMzg3NCBDMzIuMzEwNDQ0MSwxOC45ODk2NTY1IDM3LjIwNTc4MDIsMTYuMTY3MDEzMyAzNy40MzYxODAzLDE1Ljk5MTk3MDIgQzM0LjY3MTc0MTUsMTEuOTAzMzUxOCAzMC4zNTIzNjE3LDExLjQ0MjMzMDQgMjguODU0OTAyMywxMS4zMjY0OTkiIGlkPSJYTUxJRF82XyI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=") !important;
    }
}
`;
document.documentElement.appendChild(styleTag);


