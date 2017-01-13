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
import maxTemplate from './max/max'
import minTemplate from './min/min'
import patternTemplate from './pattern/pattern'
import rangeTemplate from './range/range'
import requiredTemplate from './required/required'
import validatetypeTemplate from './validatetype/validatetype'
import formbuttonsTemplate from './formbuttons/formbuttons'

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
                .directive('maxTemplate', maxTemplate)
                .directive('minTemplate', minTemplate)
                .directive('patternTemplate', patternTemplate)
                .directive('rangeTemplate', rangeTemplate)
                .directive('requiredTemplate', requiredTemplate)
                .directive('validatetypeTemplate', validatetypeTemplate)
                .directive('formbuttonsTemplate', formbuttonsTemplate)

export default module.name;
