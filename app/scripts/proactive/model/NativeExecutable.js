define(
    [
        'backbone',
        'proactive/model/SchemaModel',
        'proactive/model/Script'
    ],

    function (Backbone, SchemaModel, Script) {

        "use strict";

        return SchemaModel.extend({
        schema: {
            "Static Command": {type: "Text", fieldAttrs: {'placeholder': 'staticCommand->@attributes->value', "data-help":'A native executable to run. Must not contain parameters. E.g. for command \"/bin/bash echo test\" only /bin/bash should be specified here. Everything else should be set as arguments.'}},
            "Working Folder": {type: "Text", fieldAttrs: {'placeholder': 'staticCommand->@attributes->workingDir', "data-help":'A working folder of the executable on computing nodes.'}},
            "Arguments": {type: 'List', itemType: 'Text', fieldAttrs: {'placeholder': 'staticCommand->arguments->argument', 'itemplaceholder': '@attributes->value', "data-help":'Command line arguments. Do not use space as a separator for arguments. Rather add all of arguments one by one to the list.'}},
            "Or Dynamic Command": {type: 'NestedModel', model: Script, fieldAttrs: {'placeholder': 'dynamicCommand->generation->script', "data-help":'Alternatively you can specify a script that generates command line.'}},
            "Working Dir": {type: "Text", fieldAttrs: {'placeholder': 'dynamicCommand->@attributes->workingDir', "data-help":'A working folder of the script on computing nodes.'}}
        }
    })
})
