"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const schematics_2 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
const strings_1 = require("@angular-devkit/core/src/utils/strings");
const stringUtils = { classify: strings_1.classify, dasherize: strings_1.dasherize, camelize: strings_1.camelize, underscore: strings_1.underscore };
function filterTemplates() {
    // if (!options.service) {
    //   return filter(path => !path.match(/\.service\.ts$/) && !path.match(/-item\.ts$/) && !path.match(/\.bak$/));
    // }
    return schematics_2.filter(path => !path.match(/\.bak$/));
}
function default_1(options) {
    // TODO: Validate options and throw SchematicsException if validation fails
    options.path = options.path ? core_1.normalize(options.path) : options.path;
    const templateSource = schematics_2.apply(schematics_2.url('./files'), [
        filterTemplates(),
        schematics_2.template(Object.assign(Object.assign({}, stringUtils), options)),
    ]);
    return schematics_1.chain([
        schematics_2.branchAndMerge(schematics_1.chain([
            schematics_1.mergeWith(templateSource)
        ])),
    ]);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map