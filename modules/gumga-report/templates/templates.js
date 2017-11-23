import Instalation from './instalation/instalation'
import Use from './use/use'
import Configuration from './configuration/configuration'



const module = angular.module('gumga-report-templates', [])
    .directive('gumgaReportInstalation', Instalation)
    .directive('gumgaReportUse', Use)
    .directive('gumgaReportConfiguration', Configuration)

export default module.name;
