THIS DOCUMENT IS IN PROGRESS. THIS PARAGRAPH SHALL BE REMOVED WHEN THIS DOCUMENT IS DONE.

- webpack v2
- yarn (package manager) as alternative to npm 
- react-router v3
- postcss/cssnext with extract text plugin and manifest.json
- code splitting, vendor and client bundles
- source maps


##ToDo
- image optimizer
- react-hot-loader v3
- koa 2
- redis / mongo
- heroku deploy


###Styles
[.css] - local styles
[.gcss] - global styles. Have special rule in webpack config. No need to use :global identifier.

css-loader
[.css] - with css-modules option for incapsulate component's styles
[.gcss] - global styles

post-css: postprocessor
postcss-import: Pay attention to how postcss-import comes first in postcss config. Plugin allows to work with dependencies in different CSS-files. Resolve @import statements first, and then take all CSS in as one file and run all of it with cssnext
css-next: future css syntax & features (vars, colors). Goes with autoprefixer by default.

extract-text-webpack-plugin: allows to concat all separate css files. Don't forget to add the link to the final css in html file.