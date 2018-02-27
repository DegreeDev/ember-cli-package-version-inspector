"use strict";

module.exports = {
  name: "ember-cli-package-version-inspector",
  config(env, baseConfig, ...args) {
    const config = this._super.config.apply(this, args);

    if (!baseConfig.APP) {
      return config;
    }

    const pkg = this.project.pkg;

    /*
      NOTE: packages should NOT be in both dependencies and devDependencies
    */
    const dependencies = Object.assign(
      {},
      pkg.dependencies,
      pkg.devDependencies
    );

    const versionInspectorConfig = baseConfig["package-version-inspector"] || {
      include: []
    };

    baseConfig.APP.versions = versionInspectorConfig.include.map(key => {
      return {
        key,
        version: dependencies[key]
      };
    });

    return config;
  }
};
