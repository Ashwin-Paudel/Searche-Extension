var styleTag = document.createElement("style");
styleTag.textContent = `
/**
    * GitHub Dark v2.6.9
    * Copyright 2016 Quan You.
    * Mods by Lance Jordan
    * GitHub Project (https://cquanu.github.io/github-dark/)
    * Licensed under MIT (https://github.com/cquanu/github-dark/blob/master/LICENSE)
*/

/** Github Actions Start Block **/
/* Colors */

:root {
    --body-color: #1a2632;
    --accent-color: #243447;
    --depth-color: #151f29;
    --border-color: #304251;
    --link-color: #03A9F4;
    --icon-color: #8899a6;
    --primary-text-color: #ffffff;
    --secondary-text-color: #607d8b;
    --code-blob-color: #537698;
    --code-color: #6d6d72;
}
/** Github Actions End Block **/

/* HTML Global */

body {
    background-color: var(--body-color);
    color: var(--primary-text-color);
}

p {
    color: var(--secondary-text-color) !important;
}

h4 {
    color: var(--primary-text-color);
}

h4 > a {
    color: var(--primary-text-color);
}

/* Class Global */

.lead {
    color: #929292;
}

/* Main Site and New User */

.Header {
    background-color: var(--accent-color);
}

.site-header-nav .nav-item {
    color: var(--primary-text-color);
}

.jumbotron-home {
    background-image: none;
    background-color: var(--body-color);
}

.features-list .list-divider,
.setup-form .tos-info,
.setup-form .setup-organization-next {
    border-color: var(--border-color);
}

.radio-label {
    border-color: var(--border-color);
}

.tag-input-tag {
    background: var(--accent-color);
}

.tag-input-tag .remove {
    background: var(--body-color);
}

.home-hero-signup .form-control-lg {
    border-color: var(--border-color);
}

.shade-gray {
    background-color: #121b23 !important;
}

.tile-block {
    border-color: var(--border-color);
}

.tile-bordered:not(:last-child) {
    border-color: var(--border-color);
}

.js-notice {
    background-image: none;
    background-color: var(--body-color);
    border-color: var(--border-color);
}

.Box-row--hover-blue:hover {
    background-color: var(--accent-color);
}

/* Main Site Login */

.session-authentication {
    background-color: var(--body-color);
}

.session-authentication .header-logo {
    color: var(--primary-text-color);
}

.session-authentication .auth-form-body {
    border-color: var(--border-color);
}

.auth-form-body {
    background-color: var(--body-color);
}

.session-authentication .create-account-callout {
    border-color: var(--border-color);
}

.session-authentication .auth-form-header {
    color: var(--primary-text-color);
}

/* Site Wide Global */

.header {
    background-color: var(--accent-color);
    border-color: var(--border-color);
}

.header-logo-invertocat {
    color: var(--primary-text-color);
}

.header-search-scope {
    border-color: var(--border-color);
}

.header-nav-link {
    color: var(--primary-text-color);
}

/*.scoped-search .form-control .header-search-scope {
background-color: var(--body-color);
border-color: var(--border-color);
}*/

.form-control,
.form-select {
    color: var(--primary-text-color);
    background-color: var(--depth-color);
    border-color: var(--border-color);
}

.form-control.focus,
.form-control:focus,
.form-select.focus,
.form-select:focus {
    box-shadow: none;
}

.form-group .form-control:focus {
    background-color: var(--depth-color);
}

.btn {
    color: var(--primary-text-color);
    background-color: var(--body-color);
    background-image: none;
    border-color: var(--border-color);
}

.btn:hover,
.btn:active,
.btn.zeroclipboard-is-hover,
.btn.zeroclipboard-is-active {
    text-decoration: none;
    background-color: var(--depth-color);
    background-image: none;
    border-color: var(--border-color);
}

.btn:active,
.btn.selected,
.btn.zeroclipboard-is-active,
[open] > .btn {
    background-color: var(--body-color);
    background-image: none;
    border-color: var(--border-color);
}

.btn-primary {
    color: var(--primary-text-color);
    background-color: #57BB5C;
    background-image: none;
    border-color: #57BB5C;
}

.btn-theme-green {
    background-color: #6cc644;
}

.site-footer {
    border-color: var(--border-color);
}

.dropdown-menu {
    background-color: var(--body-color);
    border: 1px solid var(--border-color);
    box-shadow: none;
    color: var(--primary-text-color);
}

.header-nav-current-user .user-profile-link {
    color: var(--primary-text-color);
}

.dropdown-divider {
    background-color: var(--border-color);
}

.dropdown-item {
    color: #9e9e9e;
}

.dropdown-item:hover {
    background-color: var(--accent-color);
}

button.dropdown-item.dropdown-signout {
    color: #df3e3e;
}

/* Site Related */

.setup-header {
    border-color: var(--border-color);
}

/* Home */

.news .alert {
    border-color: var(--border-color);
}

.news .alert .octicon {
    color: var(--icon-color);
}

.news .alert .branch-link,
.news .alert .pull-info {
    color: var(--depth-color);
    background: #627790;
}

.ajax-pagination-form .ajax-pagination-d {
    background: #babdcb;
}
  
.boxed-group>h3,
.boxed-group .heading,
.Box,
.Box-header,
.dashboard .js-all-activity-header + div {
    color: var(--primary-text-color);
    background-color: var(--accent-color);
    border: 1px solid var(--border-color);
}

.protected-branch-orgs-and-repo-admins {
    background-color: var(--body-color)
}

.dashboard-rollup-items .body {
    border-color: var(--border-color) !important;
}

.dashboard .js-all-activity-header + div {
    background-color: var(--body-color) !important;
    border: 1px solid var(--border-color) !important;
}

.boxed-group-inner {
    background: var(--body-color);
    border: 1px solid var(--border-color);
}

.mini-repo-list-item {
    border-color: var(--border-color);
}

.mini-repo-list-item .repo-icon {
    color: var(--icon-color);
}

.private .mini-repo-list-item {
    background-color: var(--accent-color);
}

.private .mini-repo-list-item .repo-icon {
    color: #fff9c4;
}

.filter-bar {
    background-color: var(--body-color);
    border-bottom: 1px solid var(--border-color);
}

.boxed-group .counter {
    color: var(--primary-text-color);
    background-color: var(--body-color);
    border: 1px var(--border-color) solid;
}

.subscribe-feed {
    color: var(--code-color);
}

.protip-callout {
    border-color: var(--border-color);
}

.octofication .broadcast-icon-mask {
    background-color: var(--body-color);
}

.link-gray-dark {
    color: #4078c0 !important;
}

.more-repos {
    text-align: center;
    background-color: var(--accent-color);
    box-shadow: none;
    border-top: 1px solid var(--border-color);
}

.github-jobs-logo strong {
    filter: invert(40%);
}

/* New Repo */

.outline-box-highlighted {
    background-color: var(--body-color);
    border-color: var(--border-color);
}

.outline-box {
    border: solid 1px var(--border-color);
}

.copyable-terminal {
    background-color: var(--depth-color);
}

.reponame-suggestion {
    color: #4caf50;
}

.select-menu-item.selected, details-menu .select-menu-item[aria-checked="true"], details-menu .select-menu-item[aria-selected="true"] {
    color: var(--secondary-text-color);
}

/* Repo Page (Main) */

.repohead.experiment-repo-nav {
    background-color: var(--depth-color);
}

.pagehead {
    border-color: var(--border-color);
}

.repository-meta {
    color: #9e9e9e;
}

.social-count {
    color: var(--secondary-text-color);
    background-color: var(--depth-color);
    border: 1px solid var(--border-color);
    border-left: 0;
}

.user-mention,
.team-mention {
    color: #00aba5;
}

.reponav-item {
    color: #9e9e9e;
}

.reponav-item:hover,
.reponav-item:focus {
    color: var(--primary-text-color);
}

.counter {
    background-color: var(--depth-color);
    border: 1px var(--border-color) solid;
}

.reponav-item .counter {
    color: #f9f9f9;
}

.reponav-item.selected {
    color: var(--primary-text-color);
    background-color: var(--body-color);
    border-color: #d28e5d var(--border-color) transparent;
}

.btn.selected:hover {
    background-color: var(--depth-color);
}

.overall-summary {
    border-color: var(--border-color);
}

.text-emphasized {
    color: var(--primary-text-color);
}

.numbers-summary a,
.numbers-summary .nolink {
    color: #969ab0;
}

.repository-lang-stats-graph {
    border-color: var(--border-color);
}

.repository-lang-stats ol.repository-lang-stats-numbers li .language-color {
    border: 1px var(--border-color) solid;
}

.repository-lang-stats ol.repository-lang-stats-numbers li .lang {
    color: var(--primary-text-color);
}

table.files {
    background: var(--body-color);
}

table.files tr.navigation-focus td {
    background: var(--depth-color);
}

table.files td {
    border-color: var(--border-color);
}

table.files td.icon {
    color: var(--primary-text-color);
}

.warning {
    padding: 0.5em;
    margin-bottom: 0.8em;
    font-weight: bold;
    background-color: #d28e5d;
}

.file-wrap {
    border-color: var(--border-color);
}

.commit-author-section {
    color: #ccc;
}

.commit-tease {
    color: #8485ce;
    background-color: var(--accent-color);
    border-color: #3e5570;
}

.commits-list-item .commit-author {
    color: #00aba5;
}

.commit-tease-sha {
    color: #4078c0;
}

.commit-tease-contributors {
    background-color: var(--depth-color);
    border-color: #3e5570;
}

.commit .commit-title a {
    color: #4078c0;
}

.branch-infobar {
    background-color: var(--body-color);
    border-color: #3e5570;
}

.full-commit {
    background: var(--body-color);
    border: 1px solid var(--border-color);
}

.full-commit p.commit-title {
    color: #00aba5;
}

.full-commit .commit-meta {
    background: var(--accent-color);
    border-color: var(--border-color);
}

.full-commit .sha-block {
    color: var(--primary-text-color);
}

.full-commit .sha-block>.sha {
    color: #9e9e9e;
}

.full-commit .btn-outline,
.full-commit .btn-outline:disabled {
    border-color: var(--border-color);
}

.commits-list-item.navigation-focus {
    background: var(--depth-color);
}

.file-navigation .get-repo-btn {
    border-color: var(--border-color);
}

.file-navigation .get-repo-btn:first-child {
    border-color: var(--border-color);
}

.signed-commit-badge {
    border-color: var(--border-color);
}

.signed-commit-signer-name .signer {
    display: block;
    font-weight: bold;
    color: #00aba5;
}

.flex-table-item-primary {
    color: var(--primary-text-color);
}

span.d-block {
    color: var(--primary-text-color);
}

.signed-commit-header {
    background-color: var(--accent-color);
    border-color: var(--border-color);
}

/* Repo find file */

.tree-finder .tree-browser,
.tree-browser td {
    border-color: var(--border-color) !important;
}
.tree-browser td {
    background: var(--background-color);
}
.tree-browser tr[aria-selected="true"] td,
.tree-browser tr.navigation-focus td {
    background: var(--depth-color);
}

/* Repo Blame */

.blame-commit-title,
.blame-commit-title .message {
    color: #4078c0;
}

.blame-commit,
.blame-commit+.blame-line {
    border-color: var(--border-color);
}

.blame-blob-num {
    background-color: var(--accent-color);
}

.muted-link {
    color: #00aba5 !important;
}

/* README Markdown Live */

.readme .markdown-body,
.readme .plain {
    background-color: var(--depth-color);
    border-color: var(--border-color);
}

.markdown-body .highlight pre,
.markdown-body pre {
    background-color: var(--body-color);
    border: 1px var(--border-color) solid;
}

.markdown-body h1 {
    border-color: var(--border-color);
}

.markdown-body img {
    background-color: transparent;
}

.markdown-body h1 .octicon-link,
.markdown-body h2 .octicon-link,
.markdown-body h3 .octicon-link,
.markdown-body h4 .octicon-link,
.markdown-body h5 .octicon-link,
.markdown-body h6 .octicon-link {
    color: var(--primary-text-color);
}

.markdown-body table tr {
    background-color: var(--body-color);
}

.markdown-body table th,
.markdown-body table td {
    border-color: var(--border-color);
}

.markdown-body table tr:nth-child(2n) {
    background-color: var(--accent-color);
}

.markdown-body pre code,
.markdown-body pre tt {
    color: #969ab0;
}

.markdown-body code,
.markdown-body tt {
    color: var(--depth-color);
    background-color: #627790;
}

.blob-num {
    color: #5e6b77;
    border-color: var(--border-color);
}

.blob-code-inner, .pl-mi {
    color: var(--code-color);
}

.blob-code-hunk,
.blob-code-expandable {
    background-color: var(--accent-color);
}

.blob-num-hunk,
.blob-num-expandable {
    background-color: var(--accent-color);
}

.blob-num-expandable {
    background-color: var(--accent-color);
}

.ace_editor .ace_gutter-active-line {
    background-color: var(--code-blob-color);
}

.ace_editor .ace_marker-layer .ace_active-line {
    background-color: var(--accent-color);
}

/* Code syntax Highlighting */

.pl-pds,
.pl-s,
.pl-s .pl-pse .pl-s1,
.pl-sr,
.pl-sr .pl-cce,
.pl-sr .pl-sra,
.pl-sr .pl-sre {
    color: #4078c0;
}

.pl-s .pl-s1,
.pl-smi {
    color: #bbb;
}

.pl-k {
    color: #b73999;
}

.ace_string {
    color: #4670d8;
}

.ace_support.ace_type {
    color: #b73999;
}

.ace_keyword {
    color: #8485ce;
}

.ace_variable {
    color: #d28e5d;
}

.ace_focus {
    background-color: #000;
}

.ace_markup.ace_heading {
    color: #4670d8;
}

/* Markdown Standalone */

.markdown-body h2 {
    border-color: var(--border-color);
}

.markdown-body hr {
    background-color: var(--border-color);
}

.markdown-body blockquote {
    border-color: var(--border-color);
}

/* Repo Code Tab Live | Markdown */

.file {
    border-color: var(--border-color);
}

.file-header {
    background-color: var(--body-color);
    border-color: var(--border-color);
}

.breadcrumb strong.final-path {
    color: #929292;
}

.ace_gutter {
    background: var(--body-color);
    border-color: var(--border-color);
}

.ace-github-light {
    color: #9e9e9e;
    background-color: var(--body-color);
}

.file-commit-form .commit-form {
    border-color: var(--border-color);
}

.commit-sha {
    background-color: inherit;
    border-color: var(--border-color);
}

/* Repo | Issues Tab */

.table-list-header {
    background-color: var(--body-color);
    border-color: var(--border-color);
}

.Box-body-row--highlight .Box-row-link {
    color: #00aba5;
}

.Box-body-row {
    border-top: 1px solid var(--border-color);
}

.Box-body-row--highlight.navigation-focus,
.Box-body-row--highlight:hover {
    background-color: var(--depth-color);
}

.issues-listing .table-list-issues .navigation-focus {
    background-color: var(--body-color);
}

.table-list {
    border-color: var(--border-color);
}

.table-list-cell {
    border-top-color: var(--border-color);
}

.table-list-bordered .table-list-cell:first-child {
    border-left-color: var(--border-color);
}

.table-list-bordered .table-list-cell:last-child {
    border-right-color: var(--border-color);
}

.table-list-header-toggle .btn-link {
    color: #9e9e9e;
}

.table-list-header-toggle .btn-link:hover {
    color: var(--primary-text-color);
}

.table-list-header-toggle .btn-link.selected,
.table-list-header-toggle .btn-link.selected:hover {
    color: var(--primary-text-color);
}

.issue-title-link {
    color: #00aba5;
}

.protip {
    color: var(--code-color);
}

.milestone-title-link a {
    color: #cecece;
}

.Box-body {
    border-color: var(--border-color);
}

/* Dropdown Menu */

.select-menu-modal {
    border-color: var(--border-color);
    box-shadow: none;
}

.select-menu-header {
    background: var(--accent-color);
    border-color: var(--border-color);
}

.select-menu-header .select-menu-title {
    color: #9e9e9e;
    text-shadow: none;
}

.select-menu-header {
    background: var(--accent-color);
    border-bottom: 1px solid var(--border-color);
}

.select-menu-item {
    background-color: var(--body-color);
    border-color: var(--border-color);
}

.select-menu-item.selected {
    color: var(--primary-text-color);
}

.select-menu-filters {
    background-color: var(--body-color);
}

.select-menu-text-filter:first-child:last-child {
    border-color: var(--border-color);
}

.select-menu-text-filter input {
    border-color: var(--border-color);
}

.select-menu-item[aria-checked="true"] .select-menu-item-heading,
.select-menu-item[aria-checked="true"] svg {
    color: var(--primary-text-color) !important;
}

/* Repo | Pull Request Tab */

.border-left,
.border-right,
.border-bottom {
    border-color: var(--border-color) !important;
}

.pr-toolbar.is-stuck::after {
    border-color: var(--border-color);
    box-shadow: none;
}

/* Repo Issues & Pull Request Convo */

.js-comment-edit-history > .details-overlay > summary {
    background-color: var(--accent-color);
}

.gh-header {
    background-color: var(--body-color)
}
.gh-header .gh-header-sticky.is-stuck + .gh-header-shadow {
  background-color: var(--accent-color);
}
.gh-header-edit .edit-issue-title,
.gh-header-edit .edit-issue-title:focus {
    background-color: var(--depth-color);
}

.gh-header-meta {
    border-color: var(--border-color);
}

.gh-header-meta .author {
    color: #00aba5;
}

.commit-ref {
    color: var(--depth-color);
    background-color: #627790;
}

.commit-ref .user {
    color: var(--depth-color);
}

.tabnav {
    border-color: var(--border-color);
}

.tabnav-tab.selected {
    color: var(--primary-text-color);
    border-color: var(--border-color);
    background-color: var(--body-color);
}

.tabnav-pr .tabnav-tab.selected {
    color: var(--primary-text-color);
    border-color: var(--border-color);
}

.tabnav-tab.selected, .tabnav-tab[aria-selected="true"] {
    background-color: var(--body-color);
    color: var(--primary-text-color);
    border-color: var(--border-color);
}

.tabnav-pr {
    border-color: var(--border-color);
}

.tabnav-tab:hover {
    color: var(--primary-text-color)
}

.timeline-comment-wrapper {
    border: 0;
}

.timeline-comment-header {
    background-color: var(--accent-color);
    border-color: var(--border-color);
}

.timeline-comment-header .author {
    color: #00aba5;
}

.timeline-comment,
.timeline-comment .Box {
    background-color: var(--body-color);
    border-color: var(--border-color);
}

.timeline-comment-wrapper>.timeline-comment::before,
.timeline-new-comment .timeline-comment::before {
    border-right-color: var(--border-color);
}

.timeline-comment {
    color: var(--primary-text-color)
}

timeline-comment::before {
    border-right-color: var(--accent-color) !important;
}

.timeline-comment::after {
    border-right-color: var(--accent-color) !important;
}

.timeline-comment.current-user .timeline-comment-header {
    background-color: var(--accent-color);
    border-color: var(--border-color);
}

.timeline-comment.current-user {
    border-color: var(--border-color);
}

.timeline-comment.current-user .timeline-comment-label {
    border-color: var(--border-color);
}

.timeline-comment-wrapper .timeline-comment.current-user::before {
    border-width: 8px;
    border-right-color: var(--border-color);
}

.timeline-comment-label {
    border-color: var(--border-color);
}

.comment-reactions.has-reactions {
    border-color: var(--border-color);
}

.reaction-summary-item {
    border-color: var(--border-color);
}

.timeline-commits .commit-message>code a {
    color: #8485ce;
}

.discussion-timeline::before {
    width: 1px;
    background-color: var(--border-color);
}

.discussion-timeline-actions {
    background-color: var(--body-color);
    border: 0;
}

.discussion-item-ref-title .title-link {
    color: #8485ce;
}

.discussion-item-entity {
    color: #4078c0;
}

.discussion-item+.discussion-item {
    border-color: var(--border-color);
}

.discussion-sidebar-item+.discussion-sidebar-item {
    border-color: var(--border-color);
}

.discussion-item-icon {
    color: var(--icon-color);
    background-color: var(--accent-color);
    border-color: var(--border-color);
}

.discussion-item+.discussion-item-review {
    border-color: var(--border-color);
}

.discussion-item-review .file-header {
    background-color: var(--body-color);
    border-color: var(--border-color);
}

.discussion-item-review+.discussion-item {
    border-top: 1px solid var(--border-color);
}

.discussion-item-review .blob-wrapper {
    border-color: var(--border-color);
}

.review-comment-contents::after,
.review-comment.is-comment-editing::after {
    background-color: var(--border-color);
}

.previewable-comment-form .comment-form-head.tabnav {
    background-color: var(--accent-color);
}

.new-discussion-timeline .previewable-comment-form .comment-form-head.tabnav {
    background: var(--accent-color);
}

.new-discussion-timeline .previewable-comment-form .comment-body {
    border-color: var(--border-color);
}

.new-discussion-timeline .closed-banner {
    background: var(--border-color);
    border-bottom: 18px solid var(--body-color);
}

.discussion-item .renamed-was,
.discussion-item .renamed-is {
    color: #ccc;
}

.suggester {
    background: var(--accent-color);
    border-color: var(--border-color);
}

.suggester li {
    border-color: var(--border-color);
}

.previewable-comment-form textarea {
    background-color: var(--body-color);
}

.input-contrast:focus {
    background: var(--depth-color);
}

.upload-enabled textarea {
    border-color: var(--border-color);
}

.drag-and-drop {
    background-color: var(--body-color);
    border-color: var(--border-color);
}

.commit-icon .octicon {
    background-color: var(--body-color);
}

.issues-listing .table-list-issues .navigation-focus {
    background-color: var(--depth-color);
}

.branch-action-state-clean .branch-action-body::after {
    border-right-color: #6cc644;
}

.branch-action-state-unstable .branch-action-body::after {
    border-right-color: #cea61b;
}

.branch-action-body {
    background-color: var(--body-color);
}

.branch-action-body .merge-message,
.branch-action-body .merge-branch-form {
    background-color: var(--accent-color);
    border-top: solid 1px var(--border-color);
}

.merge-branch-heading {
    color: var(--primary-text-color);
}

.branch-action-state-merged .branch-action-body {
    border-color: #6e5494;
}

.merge-status-list {
    border-color: var(--border-color);
}

.merge-status-item {
    background-color: var(--accent-color);
    border-color: var(--border-color);
}

.branch-group-heading {
    background: var(--accent-color);
    border-color: var(--border-color);
}

.branch-action-item+.branch-action-item {
    border-color: var(--border-color);
}

.status-heading {
    color: var(--secondary-text-color);
}

.review-summary-form-wrapper {
    background-color: var(--body-color)
}

.TimelineItem-break {
    background-color: var(--body-color);
    border-top: 4px solid var(--accent-color);
}

/* Site | Issue Tab */

.Box-row--focus-gray.navigation-focus {
    background-color: var(--accent-color);
}

.Box-row:first-of-type {
    border-color: var(--border-color);
}

.Box-row {
    border-color: var(--border-color);
}

a.Box-row-link.h4.js-navigation-open {
    color: #4078c0;
}

/* Code Tab | Branches */

.branch-summary,
.branch-group-heading+.branch-summary,
.branch-summary {
    border-color: var(--border-color);
}

.branch-a-b-count .meter {
    background-color: var(--accent-color);
}

.branch-a-b-count .count-half:last-child {
    border-color: var(--border-color);
}

.count-value.count-behind {
    color: #dc3c3c;
}

.count-value.count-ahead {
    color: #52bd58;
}

a.branch-name {
    color: var(--depth-color);
    background-color: #627790;
}

.table-of-contents li+li {
    border-color: var(--border-color);
}

.commit-desc+.commit-branches {
    border-color: var(--border-color);
}

/* File Changed | Compare | Reviews */

.diffbar {
    background-color: var(--body-color);
}

.diff-table tr:not(:last-child) .line-comments {
    border-color: var(--border-color);
}

.pr-toolbar {
    background-color: var(--body-color);
}

.range-editor {
    background-color: var(--body-color);
    border-color: var(--border-color);
}

.compare-pr-placeholder {
    background-color: var(--body-color);
    border-color: #cea61b;
}

ul.comparison-list {
    background: var(--body-color);
    border-color: var(--border-color);
}

ul.comparison-list>li.title {
    color: #9e9e9e;
    background: var(--accent-color);
}

ul.comparison-list>li {
    border-color: var(--border-color);
}

.file-diff-split .empty-cell {
    background-color: var(--body-color);
    border-right-color: var(--border-color);
}

.feature-callout-octicon {
    border-color: var(--border-color);
}

.feature-callout {
    border-color: var(--border-color);
}

.review-thread {
    border-color: var(--border-color);
}

.review-thread-reply {
    background-color: var(--accent-color);
    border-color: var(--border-color);
}

.review-thread-reply .inline-comment-form {
    background-color: var(--body-color);
}

.review-comment .reaction-summary-item:not(.add-reaction-btn) {
    border-color: var(--border-color);
}

.last-review-thread {
    border-color: var(--border-color);
}

.inline-comment-form {
    border-color: var(--border-color);
}

/* Release & Tags */

.release-timeline {
    border-color: var(--border-color);
    border-width: 1px;
}

.release-body {
    border-color: var(--border-color);
    border-width: 1px;
}

.releases-tag-list {
    border-color: var(--border-color);
}

.releases-tag-list tr {
    border-color: var(--border-color);
}

.release-show {
    border-color: var(--border-color);
}

.tabnav-extra {
    padding-right: 15px;
    color: #9e9e9e;
}

.tag-info h3 a .tag-name {
    color: #4078c0;
}

.release-downloads {
    border-color: var(--border-color);
}

.release-downloads li {
    border-color: var(--border-color);
}

/* Commits Tab */

.commit-group-title .octicon-git-commit {
    margin-right: 17px;
    color: var(--border-color);
    background: var(--body-color);
}

.commits-listing::before {
    background-color: var(--border-color);
}

/* Nav */

.subnav-item {
    border-color: var(--border-color);
}

.subnav-item:hover,
.subnav-item:focus {
    background-color: var(--depth-color);
}

mark {
    color: var(--secondary-text-color);
}

.jump-to-field-active {
    color: var(--primary-text-color) !important;
}

.Box>#jump-to-results>.navigation-item>.jump-to-suggestions-path {
    color: var(--primary-text-color);
}

.Box>#jump-to-results>.navigation-item>.jump-to-suggestions-path:hover {
    color: var(--secondary-text-color);
}

.Box .jump-to-suggestions-results-container [aria-selected="true"] .jump-to-suggestions-path,
.jump-to-suggestions-results-container .navigation-focus .jump-to-suggestions-path {
    background-color: var(--depth-color);
}

/* Repo Wiki Tab */

.blankslate {
    background-color: var(--depth-color) !important;
    border-color: var(--border-color);
    box-shadow: none;
}

.wiki-wrapper .wiki-auxiliary-content {
    background: var(--accent-color);
}

.wiki-rightbar .boxed-group.collapsed>h3 {
    border-color: var(--border-color);
}

.wiki-wrapper .wiki-auxiliary-content-no-bg {
    background: var(--body-color);
}

.wiki-wrapper .wiki-custom-sidebar {
    border-color: var(--border-color);
}

.boxed-group-table td {
    border-color: var(--border-color);
}

.boxed-group-table td {
    border-color: var(--border-color);
}

/* Repo Project Tab */

.border {
    border-color: var(--border-color) !important;
}

.bg-gray {
    background-color: var(--body-color) !important;
}

.project-header {
    background-color: var(--body-color);
}

.project-columns {
    background-color: var(--body-color);
}

.project-column {
    background-color: #151f29;
}

.project-issue-body-blur {
    background: linear-gradient(0deg, var(--accent-color), hsla(0, 0%, 100%, 0));
}

.bg-white {
    background-color: var(--accent-color) !important;
}

.bg-gray-light {
    background-color: var(--body-color) !important;
}

.bg-blue-light {
    background-color: var(--accent-color) !important;
}

.js-project-column-cards {
    -ms-overflow-style: none;
}

.js-project-column-cards::-webkit-scrollbar {
    display: none;
}

/* Repo Pulse Tab */

.pulse-graph:first-child {
    border-color: var(--border-color);
}

.pulse-graph {
    border-bottom-color: var(--border-color);
}

.conversation-list-heading .inner {
    background: var(--body-color);
}

.conversation-list-heading {
    border-color: var(--border-color);
}

.simple-conversation-list>li {
    border-color: var(--border-color);
}

.summary-stats li {
    border-left-color: var(--border-color);
}

.summary-stats li .num {
    color: #969ab0;
}

.summary-stats li a:hover {
    background: var(--depth-color);
}

.diffstat-summary strong {
    color: #84aaf7;
}

.axis line {
    stroke: var(--border-color);
}

.subhead {
    border: 0;
}

.Box {
    background-color: var(--body-color);
    border-color: var(--border-color);
}

.Box-header {
    background-color: var(--accent-color);
    border-color: var(--border-color);
}

/* Repo Graph | Contributors */

.tint-box {
    background: var(--body-color);
}

.capped-card {
    border-color: var(--border-color);
}

.capped-card-content {
    background: var(--body-color);
}

.graphs .area {
    fill: #00aba5;
}

.capped-card h3 {
    border-color: var(--border-color);
}

/* Repo Graph | Punch Card */

.day-name {
    fill: var(--icon-color);
}

circle.day {
    fill: #969ab0;
    stroke-width: 0;
}

:not(img) text,
circle.day {
    fill: #969ab0;
}

line.axis {
    stroke: var(--border-color);
}

line.axis.even {
    stroke: var(--border-color);
}

:not(img) text,
circle.day {
    fill: var(--icon-color);
}

/* Repo Graph | Traffic */

table.capped-list td {
    border-color: var(--border-color);
}

table.capped-list th {
    border-color: var(--border-color);
}

table.capped-list tr:nth-child(even) {
    background-color: var(--accent-color);
}

/* Repo Graph | Code Frequency */

.code-frequency .addition {
    fill: #52bd58;
}

.code-frequency .deletion {
    fill: #dc3c3c;
}

.cadd {
    font-weight: bold;
    color: #52bd58;
}

.cdel {
    font-weight: bold;
    color: #dc3c3c;
}

.graphs .dir {
    color: #9e9e9e;
}

/* Repo Settings Tab */

.menu {
    margin-bottom: 15px;
    list-style: none;
    background-color: var(--body-color);
    border: 1px solid var(--border-color);
    border-radius: 3px;
}

.menu-item {
    text-shadow: none;
    border-bottom: 1px solid var(--border-color);
}

.menu-item:hover {
    background-color: var(--depth-color);
}

.menu-item.selected {
    color: var(--primary-text-color);
    background-color: var(--depth-color);
}

.form-group .form-control {
    background-color: var(--depth-color);
}

hr,
.rule {
    border-bottom: 1px solid var(--border-color);
}

.boxed-group.dangerzone>h3 {
    text-shadow: none;
    border-color: #df3e3e;
}

.Box {
    background-color: var(--body-color);
    border: 1px solid var(--border-color);
}

.btn:disabled,
.btn.disabled {
    color: white;
    background-color: var(--body-color);
    background-image: none;
    border-color: rgb(42, 58, 72);
    box-shadow: none;
}

.integrations-callout-standalone .integration-settings-callout {
    border-color: var(--border-color);
}

/* Repo Settings | Collaborators */

.access-form-wrapper {
    background-color: var(--depth-color);
    border-color: var(--border-color);
}
.autocomplete-results {
    background-color: var(--depth-color);
}

/* Profile */

.border-top {
    border-color: var(--border-color) !important;
}

.profilecols .filter-bar {
    background-color: var(--body-color);
}

.pinned-repo-list-item {
    border-color: var(--border-color);
}

.pinned-repo-filters {
    border-color: var(--border-color);
}

/* Not selected pinned item*/
.pinned-item-name {
    color: var(--secondary-text-color);
}

/* selected pinned item */
.pinned-item-checkbox:checked + .pinned-item-name {
    color: var(--primary-text-color);
    background-color: var(--body-color);
}

.user-profile-nav {
    background-color: var(--accent-color);
    border-color: var(--border-color);
    border-radius: 5px 5px 0px 0px;
}

.UnderlineNav-item {
    color: var(--primary-text-color);
}

.UnderlineNav-item.selected {
    color: var(--primary-text-color);
}

.UnderlineNav-item:hover {
    color: var(--secondary-text-color);
}

.border-gray-dark {
    border-color: var(--border-color) !important;
}

.underline-nav-item.selected {
    color: var(--primary-text-color);
}

.user-profile-sticky-bar::after {
    background-color: var(--accent-color);
    border-color: var(--border-color);
}

.underline-nav-item:hover {
    color: var(--secondary-text-color);
}

.profile-timeline-card-wrapper {
    border: 0;
}

.profile-timeline.discussion-timeline::before {
    left: 11px;
    background-color: var(--border-color);
}

.profile-timeline.discussion-timeline .profile-timeline-month-heading::after {
    background-color: var(--border-color);
}

.profile-rollup-wrapper+.profile-rollup-wrapper {
    border-color: var(--border-color);
}

/* Profile | Contribution */

#contributions-calendar rect[fill="#eeeeee"] {
    fill: var(--depth-color);
}

/* Profile | Repo Tab */

.profilecols .filter-bar .filter-selected {
    color: #8485ce;
}

/* Notification */

.list-group-item.navigation-focus {
    background-color: var(--depth-color);
}

.list-group-item-link {
    color: #fdfdfd;
}

.boxed-group-list>li {
    border-color: var(--border-color);
}

.flash {
    color: white;
    background-color: #364952;
    border-color: #4c85a0;
}

.notifications-list .notifications .list-group-item:not(.confirmation):first-child {
    border-top: 0px solid var(--border-color);
}

.notifications-list .notifications .list-group-item:not(.confirmation) {
    border-top: 1px solid var(--border-color);
}

/* Organisation */

.org-name {
    color: var(--primary-text-color);
}

.orghead {
    background-color: var(--depth-color);
    border-color: var(--border-color);
}

.simple-box {
    background-color: var(--body-color);
    border-color: var(--border-color);
}

.org-module-link {
    color: #00aba5;
}

.member-username {
    color: #00aba5;
}

.org-link {
    color: #00aba5;
}

.subnav-bordered {
    border-color: var(--border-color);
}

.org-module-title {
    border-color: var(--border-color);
}

.member-row {
    border-color: var(--border-color);
}

.pagehead-tabs-item.selected {
    color: var(--primary-text-color);
    background-color: var(--body-color);
    border-color: #d26911 var(--border-color) transparent;
}

/* Create Organisation */

.setup-header {
    text-shadow: none;
}

.steps {
    border-color: var(--border-color);
}

.steps li {
    background-color: var(--body-color);
    border-color: var(--border-color);
}

.steps li.current {
    color: #9e9e9e;
    background-color: var(--accent-color);
}

.setup-info-module {
    background-color: var(--body-color);
    border-color: var(--border-color);
    box-shadow: none;
}

.setup-info-module h2 {
    border-color: var(--border-color);
}

.plan-choice.open,
.plan-choice.selected {
    background-color: var(--body-color);
}

.plan-choice {
    background-color: var(--body-color);
    border-color: var(--border-color);
}

/* Personal Settings (Global) */

.menu-heading {
    color: var(--primary-text-color);
    background-color: var(--accent-color);
    border-color: var(--border-color);
}

.listgroup {
    border-color: var(--border-color);
    background-color: var(--accent-color);
}

.listgroup-overflow {
  background-color: var(--body-color);
}

.listgroup-item+.listgroup-item {
    border-color: var(--border-color);
}

.oauth-border {
    border-color: var(--border-color);
}

.saved-reply-form {
    border-color: var(--border-color);
}

.user-key-badge {
    border-color: var(--border-color);
}

dl.new-email-form {
    border-color: var(--border-color);
}

.Subhead {
    border-color: var(--border-color);
}

/* Settings | Security */

.session-device.session-current,
.session-device {
    background-color: var(--body-color);
}

.mute,
.text-gray-dark {
    color: #aeaeae !important;
}

.boxed-group-list>li:first-child {
    border-color: var(--border-color);
}

.boxed-group-inner .help {
    border-color: var(--border-color);
}

.auth-form-header {
    background-color: var(--accent-color);
    border-color: var(--border-color);
}

.Box-row--gray {
    background-color: var(--accent-color);
}

/* Settings | Billing */

.billing-section {
    border-color: var(--border-color);
}

.billing-section .section-content {
    color: #9e9e9e;
}

.radio-label {
    color: #666;
}

.boxed-group-table th {
    background-color: var(--accent-color);
}

.payment-history .refunded, .payment-history .failed {
    background-color: var(--accent-color);
}

/* Settings | Developer Settings | Personal Access Tokens */
.token-scope {
    color: var(--primary-text-color)
}

/* Modal */

.facebox-popup {
    background-color: var(--body-color);
    border: 1px solid var(--border-color);
}

.facebox-alert {
    color: #a9a495;
    background-color: #35342c;
    border-color: #6b5c20;
}

.facebox-header {
    border-color: var(--border-color);
}

.facebox-footer {
    margin: 0 -15px -15;
    background: var(--accent-color);
}

.facebox-footer {
    background: var(--accent-color);
    border-color: var(--border-color);
}

/* Scrollbar */

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-thumb {
    background-color: var(--accent-color);
    border-radius: 0;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #C4C4C4;
}

::-webkit-scrollbar-track {
    background-color: var(--body-color);
}

/* Search Results */

.repo-list-item {
    border-color: var(--border-color);
}

.codesearch-results .repo-list-name em,
.codesearch-results .repo-list-description em {
    background-color: var(--accent-color);
}

.participation-graph rect {
    fill: var(--accent-color);
}

.code-list .file-box {
    border-color: var(--border-color);
}

.code-list .code-list-item+.code-list-item {
    border-color: var(--border-color);
}

.code-list .language {
    color: #9e9e9e;
}

.codesearch-aside .menu .octicon {
    color: var(--icon-color);
}

.codesearch-aside .filter-list {
    border-color: var(--border-color);
}

.codesearch-aside .filter-list li span.bar {
    background: var(--accent-color);
}

.filter-item:hover {
    background-color: var(--accent-color);
}

/* Helper */

.timeline-commits .hidden-text-expander .ellipsis-expander {
    color: var(--icon-color);
    background: var(--accent-color);
}

.hidden-text-expander a,
.ellipsis-expander {
    color: var(--icon-color);
    background: var(--accent-color);
}

/* Experimental | Enchancement */

/* Blob Minus */

.blob-num-deletion {
    background-color: #3b2343;
}

.blob-code-deletion {
    background-color: var(--body-color);
    text-decoration: line-through;
    color: #ef9a9a;
}

/* Blob Plus */

.blob-num-addition {
    background-color: #a5d6a7;
}

.blob-code-addition {
    background-color: var(--body-color);
}

.blob-expanded .blob-num,
.blob-expanded .blob-code {
    background-color: var(--accent-color);
}

/* End of Experimental */

/* GitHub Gists */

.header-logo-wordmark {
    color: var(--primary-text-color);
}

.gist-snippet-meta .description {
    color: var(--code-color);
}

/* Rework Buttons | Icons */

.ajax-pagination-form .ajax-pagination-btn {
    color: #9e9e9e;
    background: var(--accent-color);
    border-color: var(--border-color);
}

.ajax-pagination-form .ajax-pagination-btn:hover {
    background-color: var(--depth-color);
}

.btn-outline {
    background-color: var(--body-color);
}

.btn-outline:disabled,
.btn-outline:disabled:hover,
.btn-outline.disabled,
.btn-outline.disabled:hover {
    border-color: var(--border-color);
}

.btn-octicon {
    color: var(--icon-color);
}

.toolbar-item {
    color: var(--icon-color);
}

.toolbar-item .menu-target {
    color: var(--icon-color);
}

.timeline-comment-actions {
    color: var(--icon-color);
}

.discussion-sidebar-toggle .octicon {
    color: var(--icon-color);
}

h2 span {
    color: var(--secondary-text-color);
}

div.search-form.big button, div.search-form.big input {
    background-color: var(--accent-color);
}

/* Github Pricing */

.shade-gradient {
    background-image: none;
}

.display-heading-1,
.display-heading-2,
.display-heading-3,
.display-heading-4 {
    color: var(--primary-text-color);
}

.bg-white {
    background-color: var(--body-color) !important;
}

.pricing-card {
    background-color: var(--body-color);
    border-color: var(--border-color);
    box-shadow: none;
}

.pricing-card-vertical .pricing-card-name {
    border-color: var(--border-color);
}

.pricing-card-vertical .pricing-card-cta {
    border-color: var(--border-color);
}

/* GitHub Explore */

.sort-bar {
    border-color: var(--border-color);
}

.pagehead-nav-item {
    color: #00aba5;
}

.pagehead-nav-item:hover {
    color: #8485ce;
}

.pagehead-nav-item.selected {
    color: #8485ce;
    border-color: #d28e5d;
}

.pagehead.explore-head {
    border-bottom-color: var(--border-color);
}

.exploregrid-item-title {
    color: var(--primary-text-color);
}

.exploregrid-item {
    color: #969ab0;
    border-color: var(--border-color);
    box-shadow: none;
}

.thread-subscription-status {
    background-color: var(--body-color);
    border: 1px solid var(--border-color);
}

.explore-section {
    border-color: var(--border-color);
}

.explore-section:nth-child(even) {
    background: var(--accent-color);
}

.explore-collection h2 {
    color: var(--primary-text-color);
}

.repo-collection>ul {
    background: var(--depth-color);
    border-color: var(--border-color);
}

.showcase-page-header {
    border-color: var(--border-color);
}

.showcase-page-repo-list {
    border-color: var(--border-color);
}

.showcase-page-pattern::after {
    background: none var(--body-color);
}

.intgrs-lstng-item {
    border-color: var(--border-color);
}

div.application-main > div.border-bottom,
div.application-main div.container-xl > div.position-relative div[style] {
    background: var(--body-color) !important;
}

/* GitHub Blog */

.blog-title {
    color: var(--primary-text-color);
}

/* Octotree Addon */

.octotree_github_sidebar .octotree_views {
    background-color: var(--body-color);
    border-color: var(--border-color);
}

.octotree_github_sidebar .octotree_views .octotree_view .octotree_view_header {
    background-color: var(--body-color);
    border-color: var(--border-color);
    border-right-color: var(--border-color) !important;
    border-bottom-color: var(--border-color) !important;
}

.octotree_sidebar .ui-resizable-e {
    background-color: var(--border-color);
}

.markdown-body .task-list-item.hovered {
    background: #424a7e !important;
}

.discussion-item .renamed-was,
.discussion-item .renamed-is {
    color: #607d8b;
}

.octotree-sidebar.octotree-github-sidebar .octotree-views {
    background-color: var(--body-color);
}

.octotree-sidebar.octotree-github-sidebar .octotree-views .octotree-tree-view .jstree-default .jstree-wholerow-clicked,
.octotree-sidebar.octotree-github-sidebar .octotree-views .octotree-tree-view .jstree-default .jstree-wholerow-hovered {
    color: var(--primary-text-color);
    background-color: var(--accent-color) !important;
}

.octotree-sidebar.octotree-github-sidebar .octotree-views .octotree-tree-view .jstree-anchor,
.octotree-sidebar.octotree-github-sidebar .octotree-views .octotree-view .jstree-anchor {
    color: var(--primary-text-color);
}

/** arrows for folders **/
.octotree-sidebar.octotree-github-sidebar .octotree-views .octotree-tree-view .jstree-default .jstree-no-dots .jstree-open > .jstree-ocl::before,
.octotree-sidebar.octotree-github-sidebar .octotree-views .octotree-tree-view .jstree-default .jstree-no-dots .jstree-closed > .jstree-ocl::before {
    color: var(--icon-color) !important;
}

.octotree-sidebar.octotree-github-sidebar .octotree-footer {
    background-color: var(--accent-color);
}

.octotree-sidebar.octotree-github-sidebar .octotree-footer .octotree-ad-small a {
    color: var(--secondary-text-color) !important;
}
/* End */

/* Fix new additions to github. */

.topic-tag {
    background-color: var(--border-color);
}

.topic-tag-action {
    background-color: var(--accent-color);
}

.delete-topic-button {
    background-color: var(--accent-color);
    border-left-color: var(--border-color);
}

.simple-box-footer {
    background-color: var(--border-color);
    border-top: var(--border-color);
}

.pagehead-tabs-item:hover {
    color: var(--primary-text-color);
    text-decoration: none;
}

.pagehead-tabs-item .counter {
    color: var(--primary-text-color);
    opacity: .85;
}

.reaction-summary-item {
    background-color: var(--body-color) !important;
}

/* calender */

.calendar-graph rect[fill="#ebedf0"],
.calendar-graph rect[fill="#c6e48b"],
.calendar-graph rect[fill="#7bc96f"],
.calendar-graph rect[fill="#239a3b"],
.calendar-graph rect[fill="#196127"],
.heat {
    background-color: #4183C4 !important;
    fill: #4183C4 !important;
    opacity: .15;
}

.contrib-legend {
    display: none !important;
}

.calendar-graph .days-selected rect.day.active {
    stroke: #ddd !important;
}

.calendar-graph rect.day:hover {
    stroke: #fff !important;
}

/* reg colors */

.calendar-graph rect[fill="#c6e48b"] {
    opacity: .3;
}

.calendar-graph rect[fill="#7bc96f"] {
    opacity: .5;
}

.calendar-graph rect[fill="#239a3b"] {
    opacity: .7;
}

.calendar-graph rect[fill="#196127"] {
    opacity: 1;
}

/* user fix */

.underline-nav-item {
    color: #6a737d;
}

.underline-nav-item .counter {
    color: var(--primary-text-color);
    opacity: .65;
}

.underline-nav-item:hover {
    color: var(--primary-text-color);
}

.notification-indicator .mail-status {
    background-color: #00aba5 !important;
    background-image: none !important;
}

.vcard-username {
    color: var(--primary-text-color);
    opacity: .65;
}

/* User Circled Images */

.vcard-avatar img {
    border-radius: 100% !important;
    border: 3px solid var(--border-color) !important;
}

/* settings user fix */

.Box .Box-row .listgroup-item-body {
    color: var(--secondary-text-color) !important;
}

.Box .Box-row .listgroup-item-title {
    opacity: .85;
}

/* feed fix, user & owner color */

.simple .title a:first-child,
.body .title a:first-child,
.public .author a,
.owner {
    color: #00aba5 !important;
}

.member-name {
    color: #FFF;
    opacity: .75;
}

.member-name:hover {
    opacity: 1;
}

/* org fix */

.UnderlineNav {
    border-color: var(--border-color);
}

.unstyled-members-count,
.js-repositories-count {
    color: #FFF;
}

.js-stat-label {}

.note-emphasis {
    color: #FFF !important;
}

.team-actions,
.team-info-card,
.stats-group-stat {
    border-color: var(--border-color) !important;
}

/* blog */

.blog-post-title a {
    color: #FFF !important;
    opacity: .85;
}

.blog-post-body h2 {
    border-color: var(--border-color) !important;
}

.blog-post-body h2,
.blog-post-body h3 {
    color: #FFF;
}

.blog-post-body ul,
.blog-post-body ol {
    color: var(--secondary-text-color);
}

.pagination,
.pagination a,
.pagination span {
    border-color: var(--border-color) !important;
    background-color: var(--body-color) !important;
}

.pagination a,
.pagination .next_page,
.pagination .previous_page {
    color: #FFF;
}

.meta-item:nth-child(2) a {
    color: #00aba5 !important;
}

.site-footer-marketing-col ul li a {
    color: #0366d6 !important;
}

/* fix #39 */

.code-list .divider .blob-num,
.code-list .divider .blob-code {
    background-color: var(--depth-color);
}

/* codemirror vs ace fix */

.CodeMirror,
.CodeMirror-lines,
.CodeMirror-gutters {
    background-color: var(--body-color) !important;
}

/* editor: line nums */

.CodeMirror-linenumber {
    color: #5e6b77 !important;
    border-color: var(--border-color);
}

/* editor: syntax */

.CodeMirror-line span {
    color: var(--code-color);
}

.cm-string {
    color: #4078c0 !important;
}

.cm-keyword {
    color: #b73999 !important;
}

.cm-property,
.cm-atom,
.cm-number,
.cm-meta {
    color: #0086b3 !important;
}

.cm-qualifier,
.cm-variable-3 {
    color: #795da3 !important;
}

.cm-tag {
    color: #63a35c !important;
}

/** Marketplace **/

.MarketplaceSideNav {
    background-color: var(--body-color);
    border-right: 1px solid var(--accent-color);
}

.MarketplaceBackground-buffer {
    background-color: var(--body-color);
}

div.application-main > div.border-bottom,
div.application-main div.container-xl > div.position-relative div[style] {
    background: var(--body-color) !important;
}
`
document.documentElement.appendChild(styleTag);
