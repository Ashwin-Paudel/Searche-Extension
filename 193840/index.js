var styleTag = document.createElement("style");
styleTag.textContent = `
@font-face {
    font-family: "Open Sans";
    src: url("../assets/fonts/OpenSans-Regular.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: "Open Sans";
    src: url("../assets/fonts/OpenSans-SemiBold.ttf") format("truetype");
    font-weight: bold;
    font-style: normal;
}
@font-face {
    font-family: "Open Sans";
    src: url("../assets/fonts/OpenSans-Light.ttf") format("truetype");
    font-weight: 100;
    font-style: normal;
}
.button {
    background-color: #141e24;
    border: 0.125rem solid #316e7d;
    box-sizing: content-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    height: 1.5rem;
    line-height: 0.75rem;
    min-width: 1.5rem;
    outline: none;
    overflow: hidden;
    padding: 0;
    text-align: center;
    transition: background-color 250ms;
    -moz-user-select: none;
    user-select: none;
}
.button:hover {
    background-color: #193945;
    transition: background-color 125ms;
}
.button:active {
    background-color: #316e7d;
}
.button__wrapper {
    height: 100%;
    width: 100%;
}
.checkbox {
    align-items: stretch;
    background-color: #141e24;
    border: 0.125rem solid #316e7d;
    cursor: pointer;
    display: inline-flex;
    flex: none;
    flex-direction: row;
    height: 1.5rem;
    transition: background-color 250ms;
    width: 1.5rem;
}
.checkbox:hover {
    background-color: #193945;
    transition: background-color 125ms;
}
.checkbox__input {
    display: none;
}
.checkbox__checkmark {
    display: inline-block;
    height: 100%;
    position: relative;
    width: 1.5rem;
}
.checkbox__checkmark::before,
.checkbox__checkmark::after {
    background-color: #316e7d;
    content: "";
    display: inline-block;
    height: 0.1875rem;
    left: 0.1875rem;
    position: absolute;
    top: 0.6375rem;
    transition: all 125ms;
    width: 1.125rem;
}
.checkbox__checkmark::before {
    transform: skewY(45deg);
}
.checkbox__checkmark::after {
    transform: skewY(-45deg);
}
.checkbox__input:checked + .checkbox__checkmark::before,
.checkbox__input:checked + .checkbox__checkmark::after {
    background-color: #ffffff;
}
.checkbox__input:checked + .checkbox__checkmark::before {
    top: 0.825rem;
    width: 0.375rem;
}
.checkbox__input:checked + .checkbox__checkmark::after {
    left: 0.5625rem;
    width: 0.75rem;
}
.dropdown {
    display: inline-block;
    height: 1.5rem;
    position: relative;
    -moz-user-select: none;
    user-select: none;
    width: 100%;
}
.dropdown__selected {
    align-items: center;
    background-color: #316e7d;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><path fill="white" d="M1,2 l3,3 l3,-3 v1.5 l-3,3 l-3,-3 z"/></svg>');
    background-position: center right 0.25rem;
    background-repeat: no-repeat;
    background-size: 1rem;
    border-radius: 0.625rem;
    color: #ffffff;
    display: inline-flex;
    height: 1.25rem;
    justify-content: center;
    line-height: 1.25rem;
    margin-top: 0.125rem;
    position: absolute;
    text-align: center;
    width: 100%;
}
.dropdown__selected__text {
    display: inline-block;
    max-width: calc(100% - 2.5rem);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.dropdown__list {
    background-color: #141e24;
    border: 0.125rem solid #316e7d;
    border-top: none;
    border-radius: 0.625rem;
    box-shadow: 0 0 0.25rem black;
    box-sizing: border-box;
    display: none;
    margin-top: 0.125rem;
    overflow: hidden;
    position: absolute;
    width: 100%;
}
.dropdown__list__item {
    align-items: center;
    background-color: #141e24;
    color: #ffffff;
    display: inline-flex;
    justify-content: center;
    min-height: 1.25rem;
    text-align: center;
    width: 100%;
}
.dropdown__list__item:hover {
    background-color: #193945;
    transition: background-color 125ms;
}
.dropdown__list__item--selected {
    overflow: hidden;
    visibility: hidden;
    white-space: nowrap;
}
.dropdown--open .dropdown__list {
    border-radius: 0.75rem;
    display: inline-block;
    margin-top: 0rem;
    z-index: 1;
}
.dropdown--open .dropdown__list__item {
    min-height: 1.5rem;
}
.dropdown--open .dropdown__selected {
    border-radius: 0.75rem;
    height: 1.5rem;
    margin-top: 0rem;
    z-index: 2;
}
.preview .dropdown {
    cursor: pointer;
}
.message-box {
    background-color: #141e24;
    border-bottom: 0.125rem solid #316e7d;
    border-top: 0.125rem solid #316e7d;
    display: flex;
    flex-direction: column;
    padding: 0.75rem;
}
.message-box__caption {
    text-align: center;
}
.message-box__buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 0.5rem;
}
.message-box__button {
    min-width: 4rem;
}
.message-box__button:not(:first-child) {
    margin-left: 0.5rem;
}
.message-box__button-ok {
    border-color: gray;
}
.multi-switch {
    background-color: #141e24;
    border: 0.125rem solid #316e7d;
    box-sizing: content-box;
    color: #ffffff;
    display: inline-flex;
    height: 1.5rem;
    position: relative;
    -moz-user-select: none;
    user-select: none;
}
.multi-switch__option {
    align-items: center;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    height: 100%;
    overflow: hidden;
    position: relative;
    transition: background-color 250ms;
    white-space: nowrap;
    width: 50%;
}
.multi-switch__option:hover:not(.multi-switch__option--selected) {
    background-color: #193945;
}
.multi-switch__highlight {
    background-color: #316e7d;
    display: inline-block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: left 125ms, width 125ms;
    width: 0;
}
.overlay {
    align-items: center;
    background-color: rgba(20, 30, 36, 0.5);
    flex-direction: column;
    display: inline-flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
}
.overlay:empty {
    display: none;
}
.shortcut {
    color: #53a1b3;
    cursor: pointer;
    display: inline-block;
    font-size: 0.625rem;
    line-height: 0.875rem;
    outline: none;
    text-align: center;
    text-decoration: none;
    white-space: pre;
}
.shortcut:hover {
    text-decoration: underline;
}
.shortcut--edit {
    color: #ffffff;
}
.shortcut::before {
    content: "✎";
    direction: rtl;
    display: inline-block;
    line-height: 0.875rem;
    visibility: hidden;
    width: 0;
}
.shortcut:hover::before,
.shortcut--edit::before {
    visibility: visible;
}
.tab-panel {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    min-height: 0;
}
.tab-panel__button {
    border-bottom: 0.125rem solid #316e7d;
    border-left: none;
    border-right: none;
    border-top: none;
    box-sizing: border-box;
    color: #316e7d;
    font-size: 0.875rem;
    font-weight: bold;
    height: 1.625rem;
    padding: 0 0.625rem;
    white-space: pre;
}
.tab-panel__button:hover {
    color: #53a1b3;
}
.tab-panel__button:active {
    background-color: #193945;
}
.tab-panel__button--active {
    border-bottom: none;
    border-left: 0.125rem solid #316e7d;
    border-right: 0.125rem solid #316e7d;
    border-top: 0.125rem solid #316e7d;
    color: #e96c4c;
    padding: 0 0.5rem;
}
.tab-panel__button--active:hover {
    color: #e96c4c;
}
.tab-panel__buttons {
    display: flex;
    flex: none;
    flex-direction: row;
    justify-content: center;
}
.tab-panel__buttons::before,
.tab-panel__buttons::after {
    border-bottom: 0.125rem solid #316e7d;
    content: "";
    flex: auto;
}
.tab-panel__tabs {
    display: flex;
    flex: auto;
    flex-direction: row;
    margin-top: 0.75rem;
    min-height: 0;
}
.tab-panel__tab {
    background-color: #141e24;
    display: flex;
    opacity: 0;
    overflow: hidden;
    pointer-events: none;
    transition: width 250ms, opacity 125ms;
    width: 0;
}
.tab-panel__tab--active {
    opacity: 1;
    pointer-events: all;
    transition: width 250ms, opacity 250ms;
    width: 100%;
}
.select {
    display: inline-flex;
    flex-direction: column;
    position: relative;
}
.select__line {
    display: inline-flex;
    flex-direction: row;
}
.select__textbox.textbox {
    border-right: none;
    flex: auto;
    width: 100%;
}
.select__expand {
    border-left: none;
    flex: none;
}
.select__expand__icon {
    display: inline-block;
    height: 100%;
    position: relative;
    width: 100%;
}
.select__expand__icon::before,
.select__expand__icon::after {
    background-color: #ffffff;
    content: "";
    display: inline-block;
    height: 0.1875rem;
    position: absolute;
    top: 0.75rem;
    width: 0.5625rem;
    z-index: 1;
}
.select__expand__icon::before {
    left: 0.1875rem;
    transform: skewY(45deg);
}
.select__expand__icon::after {
    left: 0.75rem;
    transform: skewY(-45deg);
}
.select__list {
    background-color: #141e24;
    border-bottom: 0.125rem solid #316e7d;
    border-left: 0.125rem solid #316e7d;
    border-right: 0.125rem solid #316e7d;
    box-sizing: border-box;
    left: 0;
    max-height: 0;
    overflow-x: hidden;
    overflow-y: auto;
    position: absolute;
    top: calc(100% - 0.125rem);
    transition: max-height 125ms;
    width: 100%;
    z-index: 999;
}
.select__list--expanded {
    max-height: 12rem;
    transition: max-height 500ms;
}
.select__list--short {
    overflow: hidden;
}
.select__option {
    align-items: center;
    background-color: #141e24;
    cursor: pointer;
    display: flex;
    flex: none;
    height: 1.5rem;
    flex-direction: row;
    padding-left: 0.375rem;
}
.select__option:hover {
    background-color: #193945;
}
.slider {
    display: inline-block;
    height: 1.5rem;
    position: relative;
    width: 100%;
}
.slider__track {
    background-color: #193945;
    display: inline-block;
    height: 0.875rem;
    margin-left: 0.625rem;
    margin-top: 0.3125rem;
    position: absolute;
    width: calc(100% - 1.25rem);
}
.slider__track__fill {
    background-color: #316e7d;
    display: inline-block;
    height: 100%;
    position: absolute;
}
.slider__track__fill::before {
    background-color: #316e7d;
    border-bottom-left-radius: 0.4375rem;
    border-top-left-radius: 0.4375rem;
    content: "";
    height: 0.875rem;
    position: absolute;
    right: 100%;
    width: 0.4375rem;
}
.slider__track::before,
.slider__track::after {
    background-color: #193945;
    content: "";
    height: 0.875rem;
    position: absolute;
    width: 0.4375rem;
}
.slider__track::before {
    border-bottom-left-radius: 0.4375rem;
    border-top-left-radius: 0.4375rem;
    right: 100%;
}
.slider__track::after {
    border-bottom-right-radius: 0.4375rem;
    border-top-right-radius: 0.4375rem;
    left: 100%;
}
.slider__thumb-wrapper {
    margin-left: 0.625rem;
    position: absolute;
    width: calc(100% - 1.25rem);
}
.slider__thumb {
    background-color: #ffffff;
    border-radius: 50%;
    cursor: pointer;
    display: inline-block;
    height: 1.25rem;
    margin-left: -0.625rem;
    margin-top: 0.125rem;
    position: absolute;
    width: 1.25rem;
}
.slider__thumb__value {
    color: #ffffff;
    cursor: default;
    left: calc(100% + 0.75rem / 2);
    line-height: 1.25rem;
    position: absolute;
    -moz-user-select: none;
    user-select: none;
}
.slider__thumb__value--flip {
    left: initial;
    right: calc(100% + 0.75rem / 2);
}
.slider--active .slider__thumb {
    box-shadow: 0 0 0.25rem black;
    height: 1.5rem;
    margin-left: -0.75rem;
    margin-top: 0rem;
    width: 1.5rem;
}
.slider--active .slider__thumb__value {
    line-height: 1.5rem;
}
.text-list {
    border-top: 0.125rem solid #316e7d;
    margin-bottom: 0.0625rem;
    min-width: 1.5rem;
    overflow-x: hidden;
    overflow-y: auto;
}
.text-list__textbox.textbox {
    border-bottom: 0.0625rem solid #316e7d;
    border-left: 0.125rem solid #316e7d;
    border-right: 0.125rem solid #316e7d;
    border-top: none;
    box-sizing: border-box;
    flex: none;
    height: 1.5625rem;
    width: 100%;
}
.text-list__textbox.textbox:last-child {
    border-bottom: 0.125rem solid #316e7d;
}
.text-list::-webkit-scrollbar {
    width: 1.25rem;
}
.text-list::-webkit-scrollbar-thumb {
    border-left: 0.5rem solid #141e24;
}
.textbox {
    background-color: #141e24;
    border: 0.125rem solid #316e7d;
    box-sizing: content-box;
    color: #53a1b3;
    height: 1.5rem;
    line-height: 1.5rem;
    outline: none;
    overflow: hidden;
    padding: 0;
    text-indent: 0.375rem;
    transition: background-color 250ms;
}
.textbox:hover,
.textbox:focus {
    background-color: #193945;
    transition: background-color 125ms;
}
.textbox:focus {
    color: #ffffff;
}
.textbox::placeholder {
    color: #316e7d;
}
.time-range-picker {
    display: inline-flex;
}
.time-range-picker__input {
    flex: auto;
    text-align: center;
    text-indent: 0;
    width: 100%;
}
.time-range-picker__input--start {
    border-right: none;
}
.time-range-picker__input--end {
    border-left: 0.0625rem solid #316e7d;
}
.toggle {
    background-color: #141e24;
    border: 0.125rem solid #316e7d;
    box-sizing: content-box;
    color: #ffffff;
    display: inline-flex;
    height: 1.5rem;
    position: relative;
    -moz-user-select: none;
    user-select: none;
}
.toggle__btn {
    align-items: center;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    height: 100%;
    overflow: hidden;
    position: relative;
    transition: background-color 250ms;
    white-space: nowrap;
    width: 50%;
}
.toggle__btn:hover:not(.toggle__btn--active) {
    background-color: #193945;
}
.toggle::before {
    background-color: #316e7d;
    content: "";
    display: inline-block;
    height: 100%;
    left: 50%;
    position: absolute;
    top: 0;
    transition: left 125ms;
    width: 50%;
}
.toggle--checked::before {
    left: 0;
}
.updown {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    -moz-user-select: none;
    user-select: none;
}
.updown__line {
    display: flex;
    flex-direction: row;
}
.updown__line > :not(:first-child) {
    margin-left: 0.5rem;
}
.updown__icon {
    display: inline-block;
    height: 100%;
    position: relative;
    width: 100%;
}
.updown__icon::before,
.updown__icon::after {
    background-color: #ffffff;
    content: "";
    display: inline-block;
    height: 0.5625rem;
    position: absolute;
    width: 0.1875rem;
}
.updown__icon::before {
    top: 0.1875rem;
}
.updown__icon::after {
    top: 0.75rem;
}
.updown__icon-up::before {
    left: 0.75rem;
    transform: skewX(45deg);
}
.updown__icon-up::after {
    left: 0.75rem;
    transform: skewX(-45deg);
}
.updown__icon-down::before {
    left: 0.5625rem;
    transform: skewX(-45deg);
}
.updown__icon-down::after {
    left: 0.5625rem;
    transform: skewX(45deg);
}
.updown__button--disabled {
    pointer-events: none;
}
.updown__button--disabled:hover,
.updown__button--disabled:active {
    background-color: #141e24;
}
.updown__button--disabled .updown__icon::before,
.updown__button--disabled .updown__icon::after {
    background-color: #316e7d;
}
.updown__value-text {
    font-size: 0.625rem;
    line-height: 0.875rem;
    text-align: center;
    white-space: nowrap;
}
.track {
    align-items: center;
    background-color: #141e24;
    border: 0.125rem solid #316e7d;
    box-sizing: content-box;
    display: inline-flex;
    flex: auto;
    flex-direction: row;
    height: 1.5rem;
    justify-content: center;
    overflow: hidden;
    position: relative;
    transition: background-color 250ms;
    -moz-user-select: none;
    user-select: none;
}
.track:hover {
    background-color: #193945;
    transition: background-color 125ms;
}
.track--clickable {
    cursor: pointer;
}
.track__value {
    background-color: #316e7d;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: width 125ms;
}
.track__label {
    color: #ffffff;
    display: inline-block;
    line-height: 0.75rem;
    pointer-events: none;
    position: relative;
    white-space: nowrap;
    z-index: 1;
}
.hsb-picker {
    display: flex;
    flex-direction: row;
    padding: 0.5rem;
    touch-action: none;
}
.hsb-picker__sb-container {
    cursor: pointer;
    height: 7.5rem;
    position: relative;
    -webkit-tap-highlight-color: transparent;
    width: 7.5rem;
}
.hsb-picker__hue-container {
    cursor: pointer;
    height: 7.5rem;
    margin-left: 0.5rem;
    position: relative;
    -webkit-tap-highlight-color: transparent;
    width: 0.75rem;
}
.hsb-picker__sb-canvas {
    height: 100%;
    width: 100%;
}
.hsb-picker__hue-canvas {
    height: 100%;
    width: 100%;
}
.hsb-picker__hue-cursor,
.hsb-picker__sb-cursor {
    border-radius: 50%;
    box-shadow: 0 0 0 0.125rem #ffffff;
    display: inline-block;
    height: 0.75rem;
    margin-top: -0.375rem;
    position: absolute;
    width: 0.75rem;
    z-index: 2;
}
.hsb-picker__sb-cursor {
    margin-left: -0.375rem;
}
.color-picker {
    height: 1.5rem;
    position: relative;
    width: 100%;
}
.color-picker__wrapper {
    background-color: #141e24;
    border-radius: 0.75rem;
    display: inline-flex;
    flex-direction: column;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
}
.color-picker--focused .color-picker__wrapper {
    border: 0.125rem solid #316e7d;
    box-sizing: border-box;
    z-index: 1;
}
.color-picker__input {
    background-color: #316e7d;
    border: none;
    border-radius: 0.625rem;
    box-sizing: border-box;
    color: #ffffff;
    height: 1.25rem;
    margin-top: 0.125rem;
    text-align: center;
    width: 100%;
}
.color-picker--focused .color-picker__input {
    margin-top: 0;
}
.color-picker__preview {
    border-radius: 50%;
    cursor: pointer;
    display: inline-block;
    height: 1rem;
    left: 0.25rem;
    position: absolute;
    top: 0.25rem;
    width: 1rem;
}
.color-picker--focused .color-picker__preview {
    left: 0.125rem;
    top: 0.125rem;
}
.color-picker__reset {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><path fill="white" d="M4,1 v-1 l1.5,1.5 l-1.5,1.5 v-1 a2,2 0 1 0 2,2 h1 a3,3 0 1 1 -3,-3 z"/></svg>');
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 1rem;
    border-radius: 50%;
    cursor: pointer;
    display: inline-block;
    height: 1rem;
    position: absolute;
    right: 0.25rem;
    top: 0.25rem;
    width: 1rem;
}
.color-picker--focused .color-picker__reset {
    right: 0.125rem;
    top: 0.125rem;
}
.color-picker__textbox-line {
    width: 100%;
}
.color-picker__hsb-line {
    display: none;
    width: 100%;
}
.color-picker--focused .color-picker__hsb-line {
    border-color: #316e7d;
    display: block;
}
.color-dropdown {
    height: 1.5rem;
    position: relative;
    width: 100%;
}
.color-dropdown__options {
    width: 100%;
}
.color-dropdown__picker {
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
}
.color-dropdown__picker--hidden {
    display: none;
}
.nav-button {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><path fill="white" d="M2,1 h1.5 l3,3 l-3,3 h-1.5 l3,-3 z"/></svg>');
    background-position: center right 0.25rem;
    background-repeat: no-repeat;
    background-size: 1rem;
    border-radius: 0.875rem;
    width: calc(100% - 2 * 0.125rem);
}
.nav-button__content {
    align-items: center;
    display: inline-flex;
    flex-direction: row;
    height: 100%;
}
.reset-button {
    border-radius: 0.875rem;
    width: calc(100% - 2 * 0.125rem);
}
.reset-button__content {
    align-items: center;
    display: inline-flex;
    flex-direction: row;
    height: 100%;
}
.reset-button__icon {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><path fill="white" d="M4,1 v-1 l1.5,1.5 l-1.5,1.5 v-1 a2,2 0 1 0 2,2 h1 a3,3 0 1 1 -3,-3 z"/></svg>');
    background-position: 0 0;
    background-size: 1rem;
    display: inline-block;
    height: 1rem;
    margin-right: 0.125rem;
    width: 1rem;
}
html {
    background-color: #141e24;
    color: #53a1b3;
    font-family: Open Sans, Segoe UI, Helvetica Neue, Ubuntu, sans-serif;
    font-size: 16px;
}
body {
    font-family: Open Sans, Segoe UI, Helvetica Neue, Ubuntu, sans-serif;
    font-size: 0.75rem;
}
input,
button {
    font-family: Open Sans, Segoe UI, Helvetica Neue, Ubuntu, sans-serif;
    font-size: 0.75rem;
}
::-moz-selection {
    background-color: #e96c4c;
    color: #ffffff;
}
::selection {
    background-color: #e96c4c;
    color: #ffffff;
}
::-webkit-scrollbar {
    background-color: #141e24;
    width: 0.75rem;
}
::-webkit-scrollbar-thumb {
    background-color: #193945;
}
::-webkit-scrollbar-thumb:hover {
    background-color: #255461;
}
::-webkit-scrollbar-thumb:active {
    background-color: #316e7d;
}
::-webkit-scrollbar-corner {
    background-color: #141e24;
}
* {
    scrollbar-color: #193945 #141e24;
}
html {
    height: 100%;
}
body {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0 auto;
}
header {
    align-items: stretch;
    display: flex;
    flex: none;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    margin-top: 0.75rem;
}
#logo {
    display: inline-block;
    font-size: 0.875rem;
    height: 1.5rem;
    width: 15rem;
}
#title {
    align-items: stretch;
    display: inline-flex;
    flex-direction: row;
    font-size: 2rem;
    font-weight: 100;
    line-height: 1.5rem;
    height: 1.5rem;
    margin: 0 0 0 0.5rem;
    text-transform: uppercase;
    transform: translateY(-0.0625rem);
}
#sub-title {
    font-size: 0.75rem;
    font-weight: normal;
    margin: 0.75rem 0 0 0;
    text-transform: uppercase;
}
#editor {
    background-color: #141e24;
    border: 0.125rem solid #316e7d;
    box-sizing: border-box;
    color: #53a1b3;
    flex: auto;
    font-family: monospace;
    font-size: 0.75rem;
    min-width: 9rem;
    outline: none;
    padding: 0.375rem;
    resize: none;
    white-space: pre;
    width: 100%;
}
#editor::placeholder {
    color: #316e7d;
}
#editor:hover {
    background-color: #15252c;
}
#editor:hover::-webkit-scrollbar,
#editor:hover::-webkit-scrollbar-corner {
    background-color: #15252c;
}
#editor:focus {
    background-color: #15252c;
    color: #7eb9c6;
}
#editor:focus::-webkit-scrollbar,
#editor:focus::-webkit-scrollbar-corner {
    background-color: #15252c;
}
#error-text {
    color: #db4245;
    font-family: monospace;
    white-space: pre;
}
#buttons {
    display: flex;
    flex: none;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 0.75rem;
    margin-top: 0.5rem;
    width: 100%;
}
#buttons > :not(:first-child) {
    margin-left: 0.5rem;
}
#buttons .button {
    min-width: 3rem;
    max-width: 6rem;
    width: 100%;
}
#buttons .preview-design-button {
    border-color: gray;
    max-width: 8rem;
}
#description {
    margin: 0 0 0.75rem 0;
    text-align: center;
    white-space: wrap;
}
#description a {
    color: #53a1b3;
}
@media screen and (max-width: 33rem) {
    #title {
        display: none;
    }
}
@media screen and (max-height: 33rem) {
    header,
    #description {
        display: none;
    }
    #sub-title {
        margin-top: 0.5rem;
    }
    #buttons {
        margin-bottom: 0.5rem;
    }
}

}
`
document.documentElement.appendChild(styleTag);
