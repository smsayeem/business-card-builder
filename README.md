# Domain hCard Builder Project

## Motivation
  -Its just a front end app, no back end added.<br />
  -Layout is responsive.<br />
  -As the form is filled out, the preview card is automatically gets updated incluing image.<br />
  -SEO added.<br />
  -Test added.<br />
  -It was tested on latest Chrome, Safari and Firefox.<br />

  ## Local Development

To run the app in the local development environment run the following command

```bash
npm install

npm start
```
The application will be loaded on port 3000 by default unless this port is busy. http://localhost:3000 to view it in the browser.

```bash
npm run build
```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
And the app is ready to be deployed!<br />


## Markup validation
https://validator.w3.org/#validate_by_input <br />
HTML markup has been validated

## Folder Structure
- Every component is placed in a folder with the name of the component. The filename for the component is index.js and relevant css file style.css

```
|-- src
    |-- |components
    |   |-- Assets
    |   |-- CardForm
    |       |-- CardForm
    |           |-- Divider
    |               |-- index.js
    |           |-- FormElement
    |               |-- index.js
    |       |-- index.js
    |       |-- style.css
    |   |-- CardPrevew
    |       |-- index.js
    |       |-- style.css
    |-- utilities
    |   |-- helper
    |       |-- isValidEmail.js
    |       |-- isValidForm.js
    |-- App.js
    |-- App.css
    |-- Index.js
```
## Links
github link: https://github.com/smsayeem/domain-hCard-builder.git
