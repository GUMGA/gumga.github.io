import preRequisitoFramework from './pre-requisito/pre-requisito'
import gumgaAmazonSes from './gumga-amazon-ses/gumga-amazon-ses'
import javaDocsFramework from './java-docs/java-docs'
import gquery from './gquery/gquery'
import swagger from './swagger/swagger'
import customFields from './custom-fields/custom-fields'

const module = angular.module('framework-templates', [])
    .directive('preRequisitoFramework', preRequisitoFramework)
    .directive('gumgaAmazonSes', gumgaAmazonSes)
    .directive('javaDocsFramework', javaDocsFramework)
    .directive('gquery', gquery)
    .directive('swagger', swagger)
    .directive('customFields', customFields)



export default module.name;
