import Instalation from './instalation/instalation'
import Use from './use/use'
import Configuration from './configuration/configuration'



const module = angular.module('security-templates', [])
    .directive('securityInstalation', Instalation)
    .directive('securityUse', Use)
    .directive('securityConfiguration', Configuration)

export default module.name;
