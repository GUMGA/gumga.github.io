import instalationTemplate from './instalation/instalation'
import addressTemplate from './address/address'
import listTemplate from './list/list'
import alertTemplate from './alert/alert'

const module = angular.module('components-templates', [])
                .directive('instalationTemplate', instalationTemplate)
                .directive('addressTemplate', addressTemplate)
                .directive('listTemplate', listTemplate)
                .directive('alertTemplate', alertTemplate)

export default module.name;
