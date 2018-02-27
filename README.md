# ember-cli-package-version-inspector

This is an addon to help keep track of what other packages are being deployed to your environments. I use this in conjunction with Ember Engines to keep track of what versions of engines are deployed to a specific environment.

## Installation

```
ember install ember-cli-package-version-inspector
```

## Usage

```
//config/environment.js

...
'package-version-inspector': {
  include: [
    'ember-engines',
    'search-engine',
    'discovery-engine',
    'asset-engine',
    'company-components'
  ]
}
...
```

* Open your Ember Inspector
* Navigate to 'Info'
* Notice the specified packages are listed with their versions.

**_Note:_** These are the package version specified in the `package.json`

## Contributing

### Installation

* `git clone <repository-url>`
* `cd ember-cli-package-version-inspector`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `npm test` – Runs `ember try:each` to test your addon against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

## License

This project is licensed under the [MIT License](LICENSE.md).
