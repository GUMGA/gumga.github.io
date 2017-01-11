const CustomFields = () => {
    return {
        restrict: 'E',
        templateUrl: './modules/components-docs/templates/customFields/customFields.html',
        scope: {
        },
        link: ($scope) => {

          $scope.custom = {
              "id":null,
              "oi":null,
              "gumgaCustomFields":{
                "tamanho":{
                  "id":null,
                  "oi":null,
                  "field":{
                    "id":2,
                    "oi":null,
                    "clazz":"br.com.empresa.piloto.domain.model.Marca",
                    "name":"tamanho",
                    "description":"Custom Number Field","active":true,
                    "type":"NUMBER",
                    "validationDescription":"Not empty"
                    ,"validationScript":"true",
                    "defaultValueScript":"13 / 2",
                    "options":"",
                    "visualizationOrder":2,
                    "fieldGroup":"MAIN_FIELDS",
                    "translateKey":"marca.tamanho"
                  },
                  "gumgaModelId":null,
                  "textValue":null,
                  "numberValue":6.5,
                  "dateValue":null,
                  "logicValue":null
                },
                "inicio":{
                  "id":null,
                  "oi":null,
                  "field":{
                    "id":4,
                    "oi":null,
                    "clazz":"br.com.empresa.piloto.domain.model.Marca",
                    "name":"inicio",
                    "description":"Custom Date Field","active":true,
                    "type":"DATE",
                    "validationDescription":"Not empty",
                    "validationScript":"true",
                    "defaultValueScript":"new Date()",
                    "options":"",
                    "visualizationOrder":0.0,
                    "fieldGroup":"MAIN_FIELDS",
                    "translateKey":"marca.inicio"
                  },
                  "gumgaModelId":null,
                  "textValue":null,
                  "numberValue":null,
                  "dateValue":"2015-11-03T11:26:13Z",
                  "logicValue":null
                },
              },
              "version":null,
              "nome":null,
              "location":null
            };

        }
    }
}

CustomFields.$inject = [];

export default CustomFields;
