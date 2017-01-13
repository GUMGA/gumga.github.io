import instalationTemplate from './instalation/instalation'
import addressTemplate from './address/address'
import alertTemplate from './alert/alert'
import counterTemplate from './counter/counter'
import confirmTemplate from './confirm/confirm'
import customFieldsTemplate from './customFields/customFields'
import filterTemplate from './filter/filter'
import formTemplate from './form/form'
import errorTemplate from './error/error'
import errorsTemplate from './errors/errors'

const module = angular.module('components-templates', [])
                .directive('instalationTemplate', instalationTemplate)
                .directive('addressTemplate', addressTemplate)
                .directive('alertTemplate', alertTemplate)
                .directive('counterTemplate', counterTemplate)
                .directive('confirmTemplate', confirmTemplate)
                .directive('customFieldsTemplate', customFieldsTemplate)
                .directive('filterTemplate', filterTemplate)
                .directive('formTemplate', formTemplate)
                .directive('errorTemplate', errorTemplate)
                .directive('errorsTemplate', errorsTemplate)

export default module.name;
