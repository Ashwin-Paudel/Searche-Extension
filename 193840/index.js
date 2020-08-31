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
.custom-settings-toggle {
    color: #53a1b3;
    white-space: normal;
}
.custom-settings-toggle--checked,
.custom-settings-toggle:active,
.custom-settings-toggle--checked:hover {
    background-color: #316e7d;
    color: #75b4c2;
    transition: background-color 125ms, color 125ms;
}
.custom-settings-toggle--disabled {
    opacity: 0.5;
    pointer-events: none;
}
.custom-settings-toggle__url {
    color: #ffffff;
    -moz-user-select: none;
    user-select: none;
}
.custom-settings-toggle .button__wrapper {
    align-items: center;
    display: inline-flex;
    justify-content: center;
    min-width: 14.75rem;
}
.engine-switch {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    position: relative;
}
.engine-switch__description {
    font-size: 0.625rem;
    line-height: 0.875rem;
    text-align: center;
    white-space: nowrap;
}
.engine-switch__css-edit-button {
    background-color: #e96c4c;
    border-radius: 0.4375rem;
    color: #ffffff;
    cursor: pointer;
    display: none;
    font-size: 0.625rem;
    line-height: 0.875rem;
    min-width: 0.875rem;
    position: absolute;
    right: 25%;
    text-align: center;
    top: -0.21875rem;
}
.engine-switch__css-edit-button_active {
    display: inline-block;
}
.engine-switch__css-edit-button::before {
    content: "✎";
    line-height: 0.875rem;
}
.engine-switch__css-edit-button:hover {
    box-shadow: 0 0 0.75rem #ffffff;
}
.filter-settings {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    width: 100%;
}
.filter-settings > :not(:first-child) {
    margin-top: 0.5rem;
}
.mode-toggle {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    -moz-user-select: none;
    user-select: none;
}
.mode-toggle__line {
    display: flex;
    flex-direction: row;
}
.mode-toggle__line > :not(:first-child) {
    margin-left: 0.5rem;
}
.mode-toggle .toggle {
    flex: auto;
}
.mode-toggle__label {
    font-size: 0.625rem;
    line-height: 0.875rem;
    text-align: center;
}
.mode-toggle__button--active {
    background: #316e7d;
}
.mode-toggle__button--active:hover {
    background: #316e7d;
}
.icon {
    background-size: contain;
    display: inline-block;
    height: 100%;
    width: 100%;
}
.icon--dark-mode {
    background-image: url(../assets/images/mode-dark-32.svg);
}
.icon--light-mode {
    background-image: url(../assets/images/mode-light-32.svg);
}
.font-settings {
    display: flex;
    flex-direction: column;
    width: 100%;
}
.font-settings__font-select-container {
    display: flex;
    flex-direction: column;
}
.font-settings__font-select-container__line {
    display: flex;
    flex-direction: row;
}
.font-settings__font-select-container__line > :not(:first-child) {
    margin-left: 0.5rem;
}
.font-settings__font-select-container__line .select {
    flex: auto;
}
.font-settings__font-select-container__label {
    font-size: 0.625rem;
    line-height: 0.875rem;
    text-align: center;
    white-space: nowrap;
}
.font-settings > :not(:first-child) {
    margin-top: 0.5rem;
}
.header {
    display: grid;
    grid: "logo logo" "site-toggle app-toggle" / 5.5fr 4.5fr;
    grid-gap: 0.5rem;
    width: 100%;
}
.header__logo {
    background-image: url("../assets/images/darkreader-type.svg");
    background-size: 100%;
    grid-area: logo;
    height: 1.5rem;
    outline: none;
    text-indent: -999rem;
    width: 15rem;
}
.header__logo:hover {
    filter: brightness(1.05);
}
.header__control {
    display: flex;
    flex-direction: column;
}
.header__site-toggle {
    grid-area: site-toggle;
    min-width: 0;
}
.header__site-toggle__unable-text {
    color: #e96c4c;
    display: inline-block;
    font-size: 0.625rem;
    line-height: 0.875rem;
    text-align: center;
    white-space: pre;
}
.header__app-toggle {
    grid-area: app-toggle;
    min-width: 0;
    position: relative;
}
.header__app-toggle__more-button {
    background-color: #141e24;
    color: #53a1b3;
    cursor: pointer;
    display: inline-block;
    height: 1.75rem;
    left: 100%;
    opacity: 0.7;
    position: absolute;
    top: 0;
    transition: opacity 250ms, background-color 250ms, color 250ms;
    width: 0.75rem;
}
.header__app-toggle__more-button:hover {
    background-color: #193945;
    color: #ffffff;
}
.header__app-toggle__more-button::before {
    content: "⋮";
    display: inline-block;
    font-size: 0.875rem;
    font-weight: bold;
    height: 100%;
    line-height: 1.5rem;
    text-align: center;
    width: 100%;
}
.header__app-toggle:hover .header__app-toggle__more-button {
    opacity: 1;
    transition: opacity 250ms 500ms, background-color 250ms, color 250ms;
}
.header__app-toggle:hover .header__app-toggle__more-button:hover {
    transition: opacity 250ms, background-color 250ms, color 250ms;
}
.header__app-toggle__time {
    background-color: #e96c4c;
    border-radius: 50%;
    color: #ffffff;
    cursor: pointer;
    display: none;
    height: 0.875rem;
    pointer-events: none;
    position: absolute;
    right: -0.21875rem;
    top: -0.21875rem;
    transition: opacity 250ms 250ms;
    width: 0.875rem;
}
.header__app-toggle__time--active {
    display: inline-block;
}
.header__app-toggle__more-settings {
    background-color: rgba(20, 30, 36, 0.9);
    border-bottom: 0.125rem solid #316e7d;
    border-top: 0.125rem solid #316e7d;
    display: flex;
    flex-direction: column;
    height: 11.875rem;
    left: 0;
    position: absolute;
    top: 4.625rem;
    transition: all 250ms;
    width: 100%;
    z-index: 999;
}
.header__app-toggle__more-settings:not(.header__app-toggle__more-settings--expanded) {
    border-bottom-width: 0;
    border-top-width: 0;
    height: 0;
    opacity: 0;
    pointer-events: none;
}
.header__app-toggle__more-settings:not(.header__app-toggle__more-settings--expanded)
    .header__app-toggle__more-settings__content {
    padding-bottom: 0;
    padding-top: 0;
}
.header__app-toggle__more-settings:not(.header__app-toggle__more-settings--expanded)
    .header__app-toggle__more-settings::after {
    height: 0;
}
.header__app-toggle__more-settings__top {
    align-items: flex-end;
    color: #e96c4c;
    display: flex;
    flex: auto;
    font-size: 0.875rem;
    height: 1.5rem;
    justify-content: space-between;
    overflow: hidden;
    padding-left: 1rem;
}
.header__app-toggle__more-settings__top__text {
    line-height: 1rem;
}
.header__app-toggle__more-settings__top__close {
    color: #e96c4c;
    cursor: pointer;
    display: inline-block;
    font-size: 1.125rem;
    height: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    user-select: none;
    width: 1.5rem;
}
.header__app-toggle__more-settings__top__close:hover {
    background-color: rgba(49, 110, 125, 0.25);
}
.header__app-toggle__more-settings__content {
    flex: auto;
    overflow: hidden;
    padding: 0.75rem 1rem;
    transition: padding 250ms;
}
.header__app-toggle__more-settings__line {
    display: flex;
    flex-direction: row;
}
.header__app-toggle__more-settings__line .checkbox {
    border-right: none;
    flex: none;
}
.header__app-toggle__more-settings__line
    .time-range-picker
    .time-range-picker__input--start {
    border-left: 0.0625rem solid #316e7d;
}
.header__app-toggle__more-settings__description {
    font-size: 0.625rem;
    line-height: 0.875rem;
    margin: 0;
    text-align: center;
    white-space: nowrap;
}
.header__app-toggle__more-settings__location-description {
    font-size: 0.625rem;
    line-height: 0.875rem;
    margin: 0;
    text-align: center;
    white-space: nowrap;
}
.header__app-toggle__more-settings::after {
    background-image: linear-gradient(
        to bottom,
        rgba(20, 30, 36, 0.9),
        rgba(20, 30, 36, 0)
    );
    content: "";
    display: block;
    height: 1.5rem;
    left: 0;
    margin-top: 0.125rem;
    pointer-events: none;
    position: absolute;
    top: 100%;
    transition: height 250ms;
    width: 100%;
}
.header__app-toggle__more-settings__location {
    margin-top: 0.5rem;
}
.header__app-toggle__more-settings__location__latitude,
.header__app-toggle__more-settings__location__longitude {
    flex: auto;
    text-align: center;
    text-indent: 0;
    width: 100%;
}
.header__app-toggle__more-settings__location__latitude {
    border-left: 0.0625rem solid #316e7d;
    border-right: none;
}
.header__app-toggle__more-settings__location__longitude {
    border-left: 0.0625rem solid #316e7d;
}
.header__app-toggle__more-settings__system-dark-mode {
    display: flex;
    flex-direction: row;
    margin-top: 0.5rem;
}
.header__app-toggle__more-settings__system-dark-mode__checkbox {
    flex: none;
}
.header__app-toggle__more-settings__system-dark-mode__button {
    border-left-width: 0.0625rem;
    flex: auto;
}
.header__app-toggle__more-settings__system-dark-mode__button:not(.header__app-toggle__more-settings__system-dark-mode__button--active) {
    color: #53a1b3;
}
.header__app-toggle__more-settings__system-dark-mode:hover
    .header__app-toggle__more-settings__system-dark-mode__button,
.header__app-toggle__more-settings__system-dark-mode:hover
    .header__app-toggle__more-settings__system-dark-mode__checkbox {
    background-color: #193945;
}
.header .shortcut {
    overflow: hidden;
}
.loader {
    background-color: #141e24;
    height: 32rem;
    left: 50%;
    pointer-events: none;
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: background-color 125ms ease-out;
    width: 17rem;
    z-index: 999;
}
.loader--complete {
    background-color: rgba(20, 30, 36, 0);
}
.loader--complete::before {
    opacity: 0;
    transition: opacity 125ms ease-in;
}
.loader--transition-end {
    display: none;
}
.loader::before {
    animation: 2s loading-slide 500ms ease-in-out infinite,
        4s 500ms loading-color linear infinite;
    background-color: #316e7d;
    content: "";
    display: block;
    height: 0.0625rem;
    left: 0%;
    position: absolute;
    top: 3rem;
    width: 0%;
}
.loader__message {
    animation: 125ms loading-fade-in 500ms ease-in forwards;
    color: #e96c4c;
    font-size: 0.625rem;
    opacity: 0;
    position: absolute;
    right: 1rem;
    bottom: 29rem;
}
.loader--complete .loader__message {
    color: rgba(233, 108, 76, 0);
    transition: color 125ms ease-out;
}
@keyframes loading-slide {
    0% {
        left: 0%;
        width: 0%;
    }
    50% {
        left: 0%;
        width: 100%;
    }
    100% {
        left: 100%;
        width: 0%;
    }
}
@keyframes loading-color {
    0%,
    49% {
        background-color: #316e7d;
    }
    50%,
    100% {
        background-color: #e96c4c;
    }
}
@keyframes loading-fade-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
.more-settings {
    display: flex;
    flex-direction: column;
    width: 100%;
}
.more-settings__description {
    font-size: 0.625rem;
    line-height: 0.875rem;
    margin: 0 0 0.125rem 0;
    min-width: 100%;
    overflow: hidden;
    text-align: center;
    white-space: pre;
}
.more-settings__description--warning {
    color: #e96c4c;
}
.more-settings__section {
    align-items: stretch;
    display: flex;
    flex-direction: column;
}
.more-settings__section:not(:first-child) {
    margin-top: 0.75rem;
}
.news {
    bottom: 2.625rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    left: 0;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    text-align: left;
    transition: all 250ms;
    width: 100%;
    z-index: 1;
}
.news--expanded {
    max-height: 12rem;
    opacity: 1;
    pointer-events: initial;
}
.news::before {
    background-image: linear-gradient(to top, #141e24, rgba(20, 30, 36, 0));
    content: "";
    display: block;
    height: 1.5rem;
    pointer-events: none;
    width: 100%;
}
.news__header {
    align-items: flex-end;
    background-image: linear-gradient(
        to bottom,
        rgba(20, 30, 36, 0.9),
        rgba(20, 30, 36, 0.95)
    );
    border-top: 0.125rem solid #316e7d;
    color: #e96c4c;
    display: flex;
    flex: none;
    font-size: 0.875rem;
    height: 1.5rem;
    justify-content: space-between;
    padding-left: 1rem;
}
.news__header__text {
    line-height: 1rem;
}
.news__close {
    color: #e96c4c;
    cursor: pointer;
    display: inline-block;
    font-size: 1.125rem;
    height: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    user-select: none;
    width: 1.5rem;
}
.news__close:hover {
    background-color: rgba(49, 110, 125, 0.25);
}
.news__list {
    background-color: rgba(20, 30, 36, 0.95);
    border-bottom: 0.125rem solid #316e7d;
    flex: auto;
    padding: 0.75rem 1rem;
    position: relative;
}
.news__list > :not(:first-child) {
    margin-top: 0.5rem;
}
.news__event {
    color: #53a1b3;
    display: block;
    flex: none;
    position: relative;
}
.news__event__date {
    display: block;
    font-size: 0.625rem;
}
.news__event__link {
    color: inherit;
    display: inline-block;
    text-decoration: none;
}
.news__event__link:hover {
    text-decoration: underline;
}
.news__event--unread {
    font-weight: bold;
}
.news__event--unread:first-child {
    color: #e96c4c;
}
.news__event--important {
    color: #e96c4c;
}
.news__event--important.news__event--unread::before {
    background-color: #e96c4c;
    content: "";
    height: 100%;
    position: absolute;
    right: calc(100% + 0.75rem / 2);
    text-align: center;
    top: 0;
    width: 0.125rem;
}
.news__read-more {
    color: inherit;
    display: block;
    text-decoration: none;
}
.news__read-more:hover {
    text-decoration: underline;
}
.news__read-more--unread {
    font-weight: bold;
}
.news-button {
    overflow: visible;
    position: relative;
}
.news-button--active {
    border-top: none;
    padding-top: 0.125rem;
    z-index: 2;
}
.news-button::after {
    background-color: #e96c4c;
    border-radius: 0.4375rem;
    color: #ffffff;
    content: attr(data-count);
    font-size: 0.625rem;
    line-height: 0.875rem;
    min-width: 0.875rem;
    position: absolute;
    right: -0.29166667rem;
    top: -0.29166667rem;
    z-index: 3;
}
.site-list-settings {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    min-height: 0;
    width: 100%;
}
.site-list-settings__toggle {
    border-bottom: none;
    flex: none;
}
.site-list-settings__shortcut {
    flex: none;
    white-space: nowrap;
}
.site-list-settings__text-list {
    flex: initial;
}
.site-toggle {
    color: #53a1b3;
    white-space: normal;
}
.site-toggle--disabled {
    opacity: 0.5;
    pointer-events: none;
}
.site-toggle__mark svg {
    fill: currentColor;
    height: 0.75rem;
    vertical-align: bottom;
    width: 0.75rem;
}
.site-toggle--active {
    color: #ffffff;
}
body {
    align-items: stretch;
    box-sizing: content-box;
    display: flex;
    flex-direction: column;
    height: 30rem;
    margin: 0 auto;
    padding: 1rem;
    position: relative;
    width: 15rem;
}
.header {
    flex: none;
}
.tab-panel {
    flex: auto;
    margin-top: 0.75rem;
}
footer {
    align-items: stretch;
    display: flex;
    flex: none;
    flex-direction: column;
    justify-content: center;
    margin-top: 0.75rem;
}
footer p {
    margin: 0 0 0.125rem 0;
    text-align: center;
    white-space: pre;
}
.footer-links {
    align-items: stretch;
    display: flex;
    flex: none;
    justify-content: center;
    margin-bottom: 0.5rem;
}
.footer-links__link {
    color: #53a1b3;
    line-height: 1rem;
    text-align: center;
    text-decoration: none;
}
.footer-links__link:hover {
    text-decoration: underline;
}
.footer-links > :not(:first-child) {
    margin-left: 0.5rem;
}
.footer-buttons {
    align-items: stretch;
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    width: 100%;
}
.footer-buttons > * {
    flex: auto;
}
.footer-buttons > :not(:first-child) {
    margin-left: 0.5rem;
}
.donate-link {
    align-items: center;
    background-color: #316e7d;
    color: #ffffff;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    margin: 0;
    position: relative;
    text-decoration: none;
    transition: all 125ms;
}
.donate-link:hover {
    box-shadow: 0 0 0.75rem #316e7d;
}
.donate-link__text {
    font-weight: bold;
    line-height: 1.5rem;
    transform: skewX(-10deg);
}
.donate-link::after {
    background-image: url(../assets/images/ladybug-32.svg);
    background-size: contain;
    content: "";
    display: inline-block;
    height: 0.75rem;
    left: 0;
    position: absolute;
    top: -0.875rem;
    width: 1.5rem;
}
.donate-link:hover::after {
    filter: drop-shadow(0 0 0.125rem #e96c4c);
}
.dev-tools-button {
    overflow: visible;
    position: relative;
}
.dev-tools-button--has-custom-fixes::after {
    background-color: #e96c4c;
    border-radius: 0.4375rem;
    color: #ffffff;
    content: "!";
    font-size: 0.625rem;
    line-height: 0.875rem;
    min-width: 0.875rem;
    position: absolute;
    right: -0.29166667rem;
    top: -0.29166667rem;
    z-index: 3;
}
.ext-disabled .site-toggle--disabled {
    opacity: 1;
}
.ext-disabled .header__site-toggle,
.ext-disabled .tab-panel {
    opacity: 0.5;
    pointer-events: none;
}
.ext-disabled .tab-panel__tab--active {
    pointer-events: none;
}
body {
    border: 2px solid white;
}
.overlay {
    height: calc(100% - 4px);
    left: 2px;
    top: 2px;
    width: calc(100% - 4px);
}
.built-in-horizontal-borders body {
    border-bottom: none;
    border-top: none;
}
.built-in-horizontal-borders .overlay {
    height: 100%;
    top: 0;
}
.built-in-borders body {
    border: none;
}
.built-in-borders .overlay {
    height: 100%;
    left: 0;
    top: 0;
    width: 100%;
}
.mobile body {
    border: none;
    box-sizing: border-box;
    height: auto;
    margin: 1rem auto;
    padding: 0;
}
.mobile .m-section,
.preview .m-section {
    width: 100%;
}
.mobile .m-section:not(:first-child),
.preview .m-section:not(:first-child) {
    margin-top: 0.75rem;
}
.mobile .m-section > :not(:first-child),
.preview .m-section > :not(:first-child) {
    margin-top: 0.5rem;
}
.mobile .pages-section,
.preview .pages-section {
    height: 24.4375rem;
}
.mobile .m-logo,
.preview .m-logo {
    background-image: url("../assets/images/darkreader-type.svg");
    background-position: center;
    background-size: 100%;
    display: inline-block;
    grid-area: logo;
    height: 1.5rem;
    margin: 0 auto;
    outline: none;
    text-indent: -999rem;
    width: 15rem;
}
.mobile .m-help-button,
.preview .m-help-button {
    align-items: center;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><path fill="white" d="M2,1 h1.5 l3,3 l-3,3 h-1.5 l3,-3 z"/></svg>');
    background-position: center right 0.25rem;
    background-repeat: no-repeat;
    background-size: 1rem;
    border: 0.125rem solid #316e7d;
    border-radius: 0.875rem;
    display: inline-flex;
    justify-content: center;
    height: 1.5rem;
    text-decoration: none;
    width: calc(100% - 2 * 0.125rem);
}
.mobile .m-help-button:hover,
.preview .m-help-button:hover {
    background-color: #193945;
    transition: background-color 125ms;
}
.mobile .m-help-button__text,
.preview .m-help-button__text {
    color: #ffffff;
    display: inline-block;
    line-height: 1.5rem;
    height: 1.5rem;
    -moz-user-select: none;
    user-select: none;
}
.mobile .m-help-button__text::before,
.preview .m-help-button__text::before {
    border: 0.0625rem solid #ffffff;
    border-radius: 50%;
    color: #ffffff;
    content: "?";
    display: inline-block;
    font-weight: bold;
    height: 0.875rem;
    left: 0;
    line-height: 0.875rem;
    margin-right: 0.25rem;
    text-align: center;
    top: 0;
    width: 0.875rem;
}
.mobile .m-donate-group,
.preview .m-donate-group {
    align-items: stretch;
    display: flex;
    flex-direction: column;
}
.mobile .m-donate-button,
.preview .m-donate-button {
    align-items: center;
    background-color: #316e7d;
    border-radius: 0.875rem;
    display: inline-flex;
    justify-content: center;
    height: 1.75rem;
    text-decoration: none;
    width: 100%;
}
.mobile .m-donate-button__text,
.preview .m-donate-button__text {
    color: #ffffff;
    display: inline-block;
    font-weight: bold;
    line-height: 1.5rem;
    height: 1.5rem;
    text-transform: uppercase;
    transform: skewX(-10deg);
    -moz-user-select: none;
    user-select: none;
}
.mobile .m-donate-description,
.preview .m-donate-description,
.mobile .darkreader-version,
.preview .darkreader-version {
    display: inline-block;
    font-size: 0.625rem;
    line-height: 0.875rem;
    text-align: center;
    -moz-user-select: none;
    user-select: none;
    width: 100%;
}
.mobile .darkreader-version,
.preview .darkreader-version {
    bottom: 0;
    margin-bottom: 0.125rem;
    position: absolute;
    right: 0;
}
.preview .dev-tools-button {
    overflow: visible;
    position: relative;
    width: calc(100% - 2 * 0.125rem);
}
.preview .dev-tools-button--has-custom-fixes::after {
    background-color: #e96c4c;
    border-radius: 0.4375rem;
    color: #ffffff;
    content: "!";
    font-size: 0.625rem;
    line-height: 0.875rem;
    min-width: 0.875rem;
    position: absolute;
    right: -0.29166667rem;
    top: -0.29166667rem;
    z-index: 3;
}
.mobile .control-group,
.preview .control-group {
    align-items: stretch;
    display: inline-flex;
    flex-direction: column;
    width: 100%;
}
.mobile .control-group__control,
.preview .control-group__control {
    height: 1.75rem;
}
.mobile .control-group__description,
.preview .control-group__description {
    font-size: 0.625rem;
    line-height: 0.875rem;
    text-align: center;
    -moz-user-select: none;
    user-select: none;
}
.mobile .check-button .checkbox,
.preview .check-button .checkbox {
    border-radius: 0.875rem;
    width: calc(100% - 2 * 0.125rem);
}
.mobile .check-button .checkbox__checkmark,
.preview .check-button .checkbox__checkmark {
    background-color: #316e7d;
    border-radius: 0.75rem;
}
.mobile .check-button .checkbox__checkmark::before,
.preview .check-button .checkbox__checkmark::before,
.mobile .check-button .checkbox__checkmark::after,
.preview .check-button .checkbox__checkmark::after {
    display: none;
}
.mobile .check-button .checkbox__content,
.preview .check-button .checkbox__content {
    align-items: center;
    display: flex;
    flex: auto;
    height: 1.5rem;
    justify-content: center;
    -moz-user-select: none;
    user-select: none;
}
.mobile .check-button .checkbox__input:checked ~ *,
.preview .check-button .checkbox__input:checked ~ * {
    color: #ffffff;
}
.mobile .check-button .checkbox__input:checked ~ .checkbox__checkmark,
.preview .check-button .checkbox__input:checked ~ .checkbox__checkmark {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><path fill="white" d="M0,4 l2,2 l5,-5 v1.5 l-5,5 l-2,-2 z"/></svg>');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 1rem;
}
.mobile .check-button__description,
.preview .check-button__description {
    display: inline-block;
    font-size: 0.625rem;
    line-height: 0.875rem;
    text-align: center;
    -moz-user-select: none;
    user-select: none;
    width: 100%;
}
.mobile .app-switch__control,
.preview .app-switch__control {
    border-radius: 0.875rem;
    width: calc(100% - 0.125rem * 2);
}
.mobile .app-switch__control .multi-switch__highlight,
.preview .app-switch__control .multi-switch__highlight,
.mobile .app-switch__control .multi-switch__option,
.preview .app-switch__control .multi-switch__option {
    border-radius: 0.75rem;
}
.mobile .app-switch__description--on,
.preview .app-switch__description--on {
    color: #3bc077;
}
.mobile .app-switch__description--off,
.preview .app-switch__description--off {
    color: #e96c4c;
}
.mobile .app-switch__time,
.preview .app-switch__time {
    background-color: #e96c4c;
    border-radius: 50%;
    color: #ffffff;
    cursor: pointer;
    display: none;
    height: 0.875rem;
    pointer-events: none;
    position: absolute;
    right: calc(33% + 0.125rem / 3);
    top: -0.21875rem;
    transition: opacity 250ms 250ms;
    width: 0.875rem;
}
.mobile .app-switch__time--active,
.preview .app-switch__time--active {
    display: inline-block;
}
.mobile .settings-button-icon,
.preview .settings-button-icon {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><defs><path id="cog" d="M-1.25,-6.5 h2.5 l1,3 h-4.5 z" /></defs><g transform="translate(8 8)" fill="white"><path d="M0,-5 a5,5 0 0 1 0,10 a5,5 0 0 1 0,-10 z M0,-3 a3,3 0 0 0 0,6 a3,3 0 0 0 0,-6 z"></path><use xlink:href="%23cog" /><use xlink:href="%23cog" transform="rotate(60)" /><use xlink:href="%23cog" transform="rotate(120)" /><use xlink:href="%23cog" transform="rotate(180)" /><use xlink:href="%23cog" transform="rotate(240)" /><use xlink:href="%23cog" transform="rotate(300)" /></g></svg>');
    background-size: cover;
    display: inline-block;
    height: 1rem;
    margin-right: 0.125rem;
    width: 1rem;
}
.mobile .site-toggle-group .site-toggle,
.preview .site-toggle-group .site-toggle {
    border-radius: 0.875rem;
    width: calc(100% - 0.125rem * 2);
}
.mobile .site-toggle-group__description--on,
.preview .site-toggle-group__description--on {
    color: #3bc077;
}
.mobile .site-toggle-group__description--off,
.preview .site-toggle-group__description--off {
    color: #e96c4c;
}
.mobile .theme-group,
.preview .theme-group {
    align-items: stretch;
    display: flex;
    flex-direction: column;
}
.mobile .theme-group__presets-wrapper,
.preview .theme-group__presets-wrapper {
    background-color: #316e7d;
    border: 0.125rem solid #316e7d;
    border-radius: 0.875rem;
    height: 1.5rem;
    position: relative;
}
.mobile .theme-group__presets-wrapper::before,
.preview .theme-group__presets-wrapper::before {
    border: 0.125rem solid #316e7d;
    border-bottom: none;
    border-top-left-radius: 0.875rem;
    border-top-right-radius: 0.875rem;
    content: "";
    display: inline-block;
    height: 1.75rem;
    left: -0.125rem;
    position: absolute;
    top: -0.125rem;
    width: 100%;
}
.mobile .theme-group__controls-wrapper,
.preview .theme-group__controls-wrapper {
    border-bottom: 0.125rem solid #316e7d;
    border-bottom-left-radius: 0.875rem;
    border-bottom-right-radius: 0.875rem;
    border-left: 0.125rem solid #316e7d;
    border-right: 0.125rem solid #316e7d;
    padding: 0.5rem;
}
.mobile .theme-group__more-button,
.preview .theme-group__more-button {
    background-color: #316e7d;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><path fill="white" d="M2,1 h1.5 l3,3 l-3,3 h-1.5 l3,-3 z"/></svg>');
    background-position: center right 0.25rem;
    background-repeat: no-repeat;
    background-size: 1rem;
    border: none;
    border-radius: 0.75rem;
    height: 1.25rem;
    margin-bottom: 0.125rem;
    margin-top: 0.625rem;
    width: 100%;
}
.mobile .theme-group__description,
.preview .theme-group__description {
    display: inline-block;
    font-size: 0.625rem;
    line-height: 0.875rem;
    text-align: center;
    -moz-user-select: none;
    user-select: none;
    width: 100%;
}
.mobile .page-viewer,
.preview .page-viewer {
    height: 100%;
    position: relative;
}
.mobile .page,
.preview .page {
    align-items: stretch;
    background-color: #141e24;
    display: none;
    flex-direction: column;
    height: 100%;
    justify-content: stretch;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}
.mobile .page--active,
.preview .page--active {
    display: flex;
}
.mobile .page__back-button,
.preview .page__back-button {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><path fill="white" d="M6,1 h-1.5 l-3,3 l3,3 h1.5 l-3,-3 z"/></svg>');
    background-position: center left 0.25rem;
    background-repeat: no-repeat;
    background-size: 1rem;
    border-radius: 0.875rem;
    flex: none;
    margin-top: 0.5rem;
    width: calc(100% - 2 * 0.125rem);
}
.mobile .automation-button-icon,
.preview .automation-button-icon {
    display: inline-block;
    height: 1rem;
    margin-right: 0.125rem;
    width: 1rem;
}
.mobile .automation-page__button--active,
.preview .automation-page__button--active {
    background: #316e7d;
}
.mobile .automation-page__button--active:hover,
.preview .automation-page__button--active:hover {
    background: #316e7d;
}
.mobile .automation-page__line,
.preview .automation-page__line {
    display: flex;
    flex-direction: row;
}
.mobile .automation-page__line .checkbox,
.preview .automation-page__line .checkbox {
    border-bottom-left-radius: 0.875rem;
    border-right: none;
    border-top-left-radius: 0.875rem;
    flex: none;
}
.mobile .automation-page__line .checkbox__checkmark,
.preview .automation-page__line .checkbox__checkmark {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><path fill="%23316e7d" d="M1,0.5 l6,6 v1.5 l-6,-6 Z M1,6.5 l6,-6 v1.5 l-6,6 z"/></svg>');
    background-position: 0.3125rem 0.25rem;
    background-repeat: no-repeat;
    background-size: 1rem;
}
.mobile .automation-page__line .checkbox__checkmark::before,
.preview .automation-page__line .checkbox__checkmark::before,
.mobile .automation-page__line .checkbox__checkmark::after,
.preview .automation-page__line .checkbox__checkmark::after {
    display: none;
}
.mobile .automation-page__line .checkbox__input:checked ~ .checkbox__checkmark,
.preview
    .automation-page__line
    .checkbox__input:checked
    ~ .checkbox__checkmark {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><path fill="white" d="M0,4 l2,2 l5,-5 v1.5 l-5,5 l-2,-2 z"/></svg>');
    background-position: 0.375rem 0.25rem;
}
.mobile
    .automation-page__line
    .time-range-picker
    .time-range-picker__input--start,
.preview
    .automation-page__line
    .time-range-picker
    .time-range-picker__input--start {
    border-left: 0.0625rem solid #316e7d;
}
.mobile
    .automation-page__line
    .time-range-picker
    .time-range-picker__input--end,
.preview
    .automation-page__line
    .time-range-picker
    .time-range-picker__input--end {
    border-bottom-right-radius: 0.875rem;
    border-top-right-radius: 0.875rem;
}
.mobile .automation-page__label,
.preview .automation-page__label {
    font-size: 0.625rem;
    line-height: 0.875rem;
    text-align: center;
}
.mobile .automation-page__description,
.preview .automation-page__description {
    font-size: 0.625rem;
    line-height: 0.875rem;
    margin: 0;
    text-align: center;
    white-space: nowrap;
}
.mobile .automation-page__location-description,
.preview .automation-page__location-description {
    font-size: 0.625rem;
    line-height: 0.875rem;
    margin: 0;
    text-align: center;
    white-space: nowrap;
}
.mobile .automation-page::after,
.preview .automation-page::after {
    background-image: linear-gradient(
        to bottom,
        rgba(20, 30, 36, 0.9),
        rgba(20, 30, 36, 0)
    );
    content: "";
    display: block;
    height: 1.5rem;
    left: 0;
    margin-top: 0.125rem;
    pointer-events: none;
    position: absolute;
    top: 100%;
    transition: height 250ms;
    width: 100%;
}
.mobile .automation-page__location,
.preview .automation-page__location {
    margin-top: 0.5rem;
}
.mobile .automation-page__location__latitude,
.preview .automation-page__location__latitude,
.mobile .automation-page__location__longitude,
.preview .automation-page__location__longitude {
    flex: auto;
    text-align: center;
    text-indent: 0;
    width: 100%;
}
.mobile .automation-page__location__latitude,
.preview .automation-page__location__latitude {
    border-left: 0.0625rem solid #316e7d;
    border-right: none;
}
.mobile .automation-page__location__longitude,
.preview .automation-page__location__longitude {
    border-bottom-right-radius: 0.875rem;
    border-left: 0.0625rem solid #316e7d;
    border-top-right-radius: 0.875rem;
}
.mobile .automation-page__system-dark-mode,
.preview .automation-page__system-dark-mode {
    display: flex;
    flex-direction: row;
    margin-top: 0.5rem;
}
.mobile .automation-page__system-dark-mode__checkbox,
.preview .automation-page__system-dark-mode__checkbox {
    flex: none;
}
.mobile .automation-page__system-dark-mode__button,
.preview .automation-page__system-dark-mode__button {
    border-bottom-right-radius: 0.875rem;
    border-left-width: 0.0625rem;
    border-top-right-radius: 0.875rem;
    color: #53a1b3;
    flex: auto;
}
.mobile .automation-page__system-dark-mode__button--active,
.preview .automation-page__system-dark-mode__button--active {
    color: #ffffff;
}
.mobile
    .automation-page__system-dark-mode:hover
    .mobile
    .automation-page__system-dark-mode__button,
.mobile
    .automation-page__system-dark-mode:hover
    .preview
    .automation-page__system-dark-mode__button,
.preview
    .automation-page__system-dark-mode:hover
    .mobile
    .automation-page__system-dark-mode__button,
.preview
    .automation-page__system-dark-mode:hover
    .preview
    .automation-page__system-dark-mode__button,
.mobile
    .automation-page__system-dark-mode:hover
    .mobile
    .automation-page__system-dark-mode__checkbox,
.mobile
    .automation-page__system-dark-mode:hover
    .preview
    .automation-page__system-dark-mode__checkbox,
.preview
    .automation-page__system-dark-mode:hover
    .mobile
    .automation-page__system-dark-mode__checkbox,
.preview
    .automation-page__system-dark-mode:hover
    .preview
    .automation-page__system-dark-mode__checkbox {
    background-color: #193945;
}
.mobile .automation-page .toggle,
.preview .automation-page .toggle {
    width: 100%;
}
.mobile .settings-button,
.preview .settings-button {
    border-radius: 0.75rem;
    width: 100%;
}
.mobile .site-list-page,
.preview .site-list-page {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
}
.mobile .site-list,
.preview .site-list {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
}
.mobile .site-list__editor,
.preview .site-list__editor {
    background-color: #141e24;
    border: 0.125rem solid #316e7d;
    border-radius: 0.25rem;
    box-sizing: border-box;
    color: #53a1b3;
    flex: auto;
    height: 19rem;
    outline: none;
    padding: 0.5rem;
    resize: none;
}
.mobile .site-list__editor::placeholder,
.preview .site-list__editor::placeholder {
    color: #316e7d;
}
.mobile .site-list__buttons,
.preview .site-list__buttons {
    display: flex;
    flex-direction: row;
    margin-top: 0.5rem;
}
.mobile .site-list__button,
.preview .site-list__button {
    border-radius: 0.875rem;
    flex: auto;
}
.mobile .site-list__button-apply,
.preview .site-list__button-apply {
    margin-left: 0.5rem;
}
.mobile .site-list__button-apply__content,
.preview .site-list__button-apply__content {
    align-items: center;
    display: inline-flex;
    justify-content: center;
}
.mobile .site-list__button-apply__icon,
.preview .site-list__button-apply__icon {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><path fill="white" d="M0,4 l2,2 l5,-5 v1.5 l-5,5 l-2,-2 z"/></svg>');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 0.75rem;
    display: inline-block;
    height: 1rem;
    width: 1rem;
}
.mobile .theme-control,
.preview .theme-control {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-height: 1.5rem;
    width: 100%;
}
.mobile .theme-control__label,
.preview .theme-control__label {
    font-size: 0.75rem;
    line-height: 0.75rem;
    text-align: left;
    -moz-user-select: none;
    user-select: none;
    width: 50%;
}
.mobile .static-edit-button,
.preview .static-edit-button {
    background-color: #e96c4c;
    border-radius: 0.4375rem;
    color: #ffffff;
    cursor: pointer;
    font-size: 0.625rem;
    line-height: 0.875rem;
    left: 0.25rem;
    min-width: 0.875rem;
    position: absolute;
    text-align: center;
    top: 0.25rem;
}
.mobile .static-edit-button--hidden,
.preview .static-edit-button--hidden {
    display: none;
}
.mobile .static-edit-button::before,
.preview .static-edit-button::before {
    content: "\270E";
    line-height: 0.875rem;
}
.mobile .static-edit-button:hover,
.preview .static-edit-button:hover {
    box-shadow: 0 0 0.75rem #ffffff;
}
.mobile .mode-control-container,
.preview .mode-control-container {
    height: 1.5rem;
    position: relative;
    width: 100%;
}
.mobile .collapsible-panel__group__expand-button,
.preview .collapsible-panel__group__expand-button {
    align-items: center;
    background-color: #316e7d;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><path fill="white" d="M3,0 h2 v3 h3 v2 h-3 v3 h-2 v-3 h-3 v-2 h3 z"/></svg>');
    background-position: center left 0.375rem;
    background-repeat: no-repeat;
    background-size: 0.5rem;
    border-radius: 0.625rem;
    color: #ffffff;
    cursor: pointer;
    display: none;
    height: 1.25rem;
    justify-content: center;
    line-height: 1.25rem;
    text-align: center;
    width: 100%;
}
.mobile
    .collapsible-panel__group--collapsed
    .collapsible-panel__group__expand-button,
.preview
    .collapsible-panel__group--collapsed
    .collapsible-panel__group__expand-button {
    display: inline-flex;
}
.mobile .collapsible-panel__group--collapsed .collapsible-panel__group__content,
.preview
    .collapsible-panel__group--collapsed
    .collapsible-panel__group__content {
    display: none;
}
.mobile
    .collapsible-panel__group--collapse-top
    .collapsible-panel__group__expand-button,
.preview
    .collapsible-panel__group--collapse-top
    .collapsible-panel__group__expand-button {
    margin-bottom: 0.625rem;
    margin-top: 0.125rem;
}
.mobile
    .collapsible-panel__group--collapse-bottom
    .collapsible-panel__group__expand-button,
.preview
    .collapsible-panel__group--collapse-bottom
    .collapsible-panel__group__expand-button {
    margin-bottom: 0.125rem;
    margin-top: 0.625rem;
}
.mobile .theme-page .theme-preset-picker.dropdown,
.preview .theme-page .theme-preset-picker.dropdown {
    border-radius: 0.875rem;
    height: 1.75rem;
}
.mobile .theme-page .theme-preset-picker .dropdown__selected,
.preview .theme-page .theme-preset-picker .dropdown__selected {
    border-radius: 0.875rem;
    height: 1.75rem;
}
.mobile .theme-page .theme-preset-picker .dropdown__list,
.preview .theme-page .theme-preset-picker .dropdown__list {
    border: 0.125rem solid #316e7d;
    border-top: none;
    border-radius: 0.875rem;
    box-shadow: 0 0 0.25rem 0.0625rem black;
    box-sizing: border-box;
}
.mobile .theme-page .theme-preset-picker .dropdown__list__item,
.preview .theme-page .theme-preset-picker .dropdown__list__item {
    min-height: 1.75rem;
}
.mobile .theme-page .theme-control:not(:first-child),
.preview .theme-page .theme-control:not(:first-child) {
    margin-top: 0.5rem;
}
.mobile .theme-page .font-picker,
.preview .theme-page .font-picker {
    box-sizing: border-box;
    height: 1.5rem;
    padding-top: 0.125rem;
    position: relative;
    width: 100%;
}
.mobile .theme-page .font-picker--disabled,
.preview .theme-page .font-picker--disabled {
    opacity: 0.5;
    pointer-events: none;
}
.mobile .theme-page .font-picker .select__textbox,
.preview .theme-page .font-picker .select__textbox,
.mobile .theme-page .font-picker .select__expand,
.preview .theme-page .font-picker .select__expand,
.mobile .theme-page .font-picker .select__list,
.preview .theme-page .font-picker .select__list {
    border: none;
}
.mobile .theme-page .font-picker .select__line,
.preview .theme-page .font-picker .select__line {
    position: relative;
}
.mobile .theme-page .font-picker .select__textbox,
.preview .theme-page .font-picker .select__textbox {
    background-color: #316e7d;
    border-radius: 0.625rem;
    color: #ffffff;
    height: 1.25rem;
    line-height: 1.25rem;
    text-align: center;
    width: 100%;
}
.mobile .theme-page .font-picker .select__textbox:hover,
.preview .theme-page .font-picker .select__textbox:hover {
    background-color: #193945;
}
.mobile .theme-page .font-picker .select__textbox:focus,
.preview .theme-page .font-picker .select__textbox:focus {
    background-color: #193945;
    border: 0.125rem solid #316e7d;
    border-radius: 0.75rem;
    margin-top: -0.125rem;
}
.mobile .theme-page .font-picker .select__expand,
.preview .theme-page .font-picker .select__expand {
    background-color: #316e7d;
    border-radius: 0.625rem;
    height: 1.25rem;
    min-width: 1.5rem;
    position: absolute;
    right: 0;
    top: 0;
    width: 1.5rem;
}
.mobile .theme-page .font-picker .select__expand__icon,
.preview .theme-page .font-picker .select__expand__icon {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><path fill="white" d="M1,2 l3,3 l3,-3 v1.5 l-3,3 l-3,-3 z"/></svg>');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 1rem;
}
.mobile .theme-page .font-picker .select__expand__icon::before,
.preview .theme-page .font-picker .select__expand__icon::before,
.mobile .theme-page .font-picker .select__expand__icon::after,
.preview .theme-page .font-picker .select__expand__icon::after {
    display: none;
}
.mobile .theme-page .font-picker .select__list,
.preview .theme-page .font-picker .select__list {
    border-bottom-left-radius: 0.625rem;
    border-bottom-right-radius: 0.625rem;
    border-left: 0.125rem solid #316e7d;
    border-right: 0.125rem solid #316e7d;
    top: 100%;
    width: 100%;
}
.mobile .theme-page .font-picker .select__list--expanded,
.preview .theme-page .font-picker .select__list--expanded {
    border-bottom: 0.125rem solid #316e7d;
}
.mobile .theme-page .font-picker .select__list::-webkit-scrollbar,
.preview .theme-page .font-picker .select__list::-webkit-scrollbar {
    background-color: transparent;
}
.mobile .theme-page .font-picker .select__list::-webkit-scrollbar-thumb,
.preview .theme-page .font-picker .select__list::-webkit-scrollbar-thumb {
    border-radius: 0.375rem;
}
.mobile .theme-page .font-picker.select--expanded,
.preview .theme-page .font-picker.select--expanded {
    background-color: #316e7d;
    border-top-left-radius: 0.75rem;
    border-top-right-radius: 0.75rem;
    height: 1.5rem;
    padding-top: 0;
}
.mobile .theme-page .font-picker.select--expanded .select__textbox,
.preview .theme-page .font-picker.select--expanded .select__textbox {
    border: 0.125rem solid #316e7d;
    border-radius: 0.75rem;
}
.mobile .theme-page .font-picker.select--expanded .select__textbox:focus,
.preview .theme-page .font-picker.select--expanded .select__textbox:focus {
    margin-top: 0;
}
.mobile .theme-page .font-picker.select--expanded .select__expand,
.preview .theme-page .font-picker.select--expanded .select__expand {
    margin-top: 0.125rem;
}
.mobile .theme-page .font-picker.select--expanded::before,
.preview .theme-page .font-picker.select--expanded::before {
    background-color: #141e24;
    content: "";
    display: inline-block;
    height: 0.75rem;
    left: 0.125rem;
    position: absolute;
    top: 0.75rem;
    width: calc(100% - 2 * 0.125rem);
}
.mobile .theme-preset-picker,
.preview .theme-preset-picker {
    border-radius: 0.75rem;
}
.mobile .theme-preset-picker .dropdown__selected,
.preview .theme-preset-picker .dropdown__selected {
    border-radius: 0.75rem;
    height: 1.5rem;
    margin-top: 0;
}
.mobile .theme-preset-picker .dropdown__list,
.preview .theme-preset-picker .dropdown__list {
    border: none;
    border-radius: 0.75rem;
    box-shadow: 0 0 0 0.125rem #316e7d, 0 0 0.25rem 0.1875rem black;
}
.mobile .theme-preset-picker__preset,
.preview .theme-preset-picker__preset {
    align-items: center;
    display: inline-flex;
    justify-content: center;
    min-height: 1.5rem;
    position: relative;
    width: 100%;
}
.mobile .theme-preset-picker__preset__remove-button,
.preview .theme-preset-picker__preset__remove-button {
    border-radius: 50%;
    cursor: pointer;
    display: inline-block;
    height: 1.5rem;
    position: absolute;
    right: 0;
    top: 0;
    width: 1.5rem;
}
.mobile .theme-preset-picker__preset__remove-button::after,
.preview .theme-preset-picker__preset__remove-button::after {
    content: "\2715";
    display: inline-block;
    line-height: 1.5rem;
    text-align: center;
}
.mobile .theme-preset-picker__preset__remove-button:hover,
.preview .theme-preset-picker__preset__remove-button:hover {
    background-color: #316e7d;
    color: #ffffff;
}
.mobile.firefox * {
    font-family: Inter, Open Sans, Segoe UI, Helvetica Neue, Ubuntu, sans-serif;
}
.mobile.firefox a,
.mobile.firefox a *,
.mobile.firefox button,
.mobile.firefox button * {
    font-family: Metropolis, Open Sans, Segoe UI, Helvetica Neue, Ubuntu,
        sans-serif;
}
@media screen and (min-width: 21.25rem) {
    .mobile {
        font-size: 20px;
    }
}
@media screen and (min-width: 25.5rem) {
    .mobile {
        font-size: 24px;
    }
}
@media screen and (min-resolution: 29.75rem) {
    .mobile {
        font-size: 28px;
    }
}
@media screen and (min-width: 34rem) {
    .mobile {
        font-size: 32px;
    }
}

`
document.documentElement.appendChild(styleTag);
