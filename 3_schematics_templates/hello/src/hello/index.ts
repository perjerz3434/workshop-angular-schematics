import { strings } from '@angular-devkit/core';
import { apply, mergeWith, Rule, SchematicContext, template, Tree, url } from '@angular-devkit/schematics';

import { Schema as HelloOptions } from './schema';

// TODO 1. start build with npm run build:watch ( in a separate console window / tab )

// TODO 2. create "files/" folder in the "hello/" folder

// TODO 3. create folder inside of the "files/" folder using template syntax ( __variable@helper__ )
// "hello-__name@dasherize__" ( expresion is separated with 2 underscores )

// TODO 4. create file inside of the newly created template folder with name "hello-__name@dasherize__.component.ts"

// TODO 5. create content of the file to be a simple Angular component
// use template syntax <%= variable %> (or <%= helper(variable) %> ) to parametrize selector
// ( with help of dasherize() ), component class name ( with classify() ) and store name as component property
// the component can use inline template which will show parametrized greetings to a person similar to examples before
// try to do it by yourself but if you can't have a look into helpers/ folder for an example

export function hello(_options: HelloOptions): Rule {

  return (tree: Tree, _context: SchematicContext) => {

    console.log('Running schematics with following options', _options);

    // TODO 6. load template into "sourceTpl" variable using url() function ( from @angular-devkit/schematics package ) with "./files" parameter
    const sourceTpl = url('./files');
    // TODO 7. apply options onto template using apply() function ( from @angular-devkit/schematics package )
    // the function accepts our sourceTpl and an array of rules
    // we will provide a single rule called template() ( from @angular-devkit/schematics package )
    // inside of that rule we will provide options object into which we will spread our options ( like this the following { ..._options } )
    // result of the apply() function will be stored in the sourceTplParametrized variable

    // TODO 8. import the strings object ( from @angular-devkit/core ) and spread it into the template() options ( { ..._options, ...strings } )
    const sourceTplParametrized = apply(sourceTpl, [template({..._options, ...strings, addExclamation})])
    // TODO 9. return mergeWith() with "sourceTplParametrized" as an argument and call it with (tree, _context)
    // to prevent typescript compiler from complaining that we have unused variable tree
    // remove "return tree;" as we're already returning mergeWith()

    return mergeWith(sourceTplParametrized)(tree, _context);

    // TODO 10. build and run schematics (mind --dry-run because of the dev mode) and explore generated file

    // TODO 11. try running schematics again without deleting file ( you should see warning that the file exists )

    // TODO 12. run schematics with --force flag ( this now works because we're using proper templating )

  };

}

// TODO 13. create and export addExclamation() function which accepts value of type string as an argument
// and returns that string plus exclamation mark ( ! ) (or in other words it returns "value!" for "value"
export function addExclamation(value: string): string {
  return `${value}!`;
}
// TODO 14. pass addExclamation function into the template options { ..._options, ...strings, addExclamation }

// TODO 15. use add exclamation in the template by changing name = '<%= name %>' to name = '<%= addExclamation(name) %>'

// TODO 16. build and run schematics (mind --dry-run because of the dev mode) and explore generated file
