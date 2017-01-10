import instalationTemplate from './instalation/instalation'
import addressTemplate from './address/address'
import listTemplate from './list/list'
import alertTemplate from './alert/alert'
import counterTemplate from './counter/counter'
import confirmTemplate from './confirm/confirm'

const module = angular.module('components-templates', [])
                .directive('instalationTemplate', instalationTemplate)
                .directive('addressTemplate', addressTemplate)
                .directive('listTemplate', listTemplate)
                .directive('alertTemplate', alertTemplate)
                .directive('counterTemplate', counterTemplate)
                .directive('confirmTemplate', confirmTemplate)

export default module.name;
