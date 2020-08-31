import { chain, mergeWith } from '@angular-devkit/schematics';
import { apply, filter, Rule, template, url, branchAndMerge } from '@angular-devkit/schematics';
import { normalize } from '@angular-devkit/core';
import { dasherize, classify, camelize, underscore} from "@angular-devkit/core/src/utils/strings";
import { schemaOptions } from './schema';

const stringUtils = {classify, dasherize, camelize, underscore};

function filterTemplates(): Rule {
  // if (!options.service) {
  //   return filter(path => !path.match(/\.service\.ts$/) && !path.match(/-item\.ts$/) && !path.match(/\.bak$/));
  // }
  return filter(path => !path.match(/\.bak$/));
}

export default function (options: schemaOptions): Rule {
    // TODO: Validate options and throw SchematicsException if validation fails
    options.path = options.path ? normalize(options.path) : options.path;
    
    const templateSource = apply(url('./files'), [
        filterTemplates(),
        template({
            ...stringUtils,
            ...options
        }),
        // move('src/app/my-schema')
      ]);
      
      return chain([
        branchAndMerge(chain([
          mergeWith(templateSource)
        ])),
      ]);

}