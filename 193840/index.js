var styleTag = document.createElement("style");
styleTag.textContent = '''
@media (prefers-color-scheme: dark) {
    .clc-cp-sb--short .-wrapper {
       background-color: var(--black-025) !important;
       border-color: var(--black-100) !important;
   }
   
   div.clc-jobs-multi.tag-themed.python,
   div.clc-jobs-multi.tag-themed.python .slanted-bg,
   div.clc-jobs-multi.blue,
   div.clc-jobs-multi.blue .slanted-bg,
   div.clc-jobs-multi.orange,
   div.clc-jobs-multi.orange .slanted-bg {
       background: var(--black-025) !important;
   }
   
   div.clc-jobs-multi>.middle {
       background: #2d2d2d !important;
   }
   
   /* Hide ads  */
   .everyonelovesstackoverflow {
       display: none !important;
   }
}
''';
document.documentElement.appendChild(styleTag);


