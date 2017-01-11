import instalationTemplate from './instalation/instalation'
import addressTemplate from './address/address'
import alertTemplate from './alert/alert'
import counterTemplate from './counter/counter'
import confirmTemplate from './confirm/confirm'
import customFieldsTemplate from './customFields/customFields'

const module = angular.module('components-templates', [])
                .directive('instalationTemplate', instalationTemplate)
                .directive('addressTemplate', addressTemplate)
                .directive('alertTemplate', alertTemplate)
                .directive('counterTemplate', counterTemplate)
                .directive('confirmTemplate', confirmTemplate)
                .directive('customFieldsTemplate', customFieldsTemplate)

export default module.name;
