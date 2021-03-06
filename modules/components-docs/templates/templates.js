import instalationTemplate from './instalation/instalation'
import addressTemplate from './address/address'
import alertTemplate from './alert/alert'
import counterTemplate from './counter/counter'
import confirmTemplate from './confirm/confirm'
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
import listTemplate from './list/list'
import manytomanyTemplate from './manytomany/manytomany'
import manytooneTemplate from './manytoone/manytoone'
import maskTemplate from './mask/mask'
import menuTemplate from './menu/menu'
import navTemplate from './nav/nav'
import onetomanyTemplate from './onetomany/onetomany'
import modalcontroller from './onetomany/modalcontroller'
import queryTemplate from './query/query'
import tableTemplate from './table/table'
import uploadTemplate from './upload/upload'
import fileuploadTemplate from './fileupload/fileupload'
import numberTemplate from './number/number'
import webstorageTemplate from './webstorage/webstorage'
import imageuploadTemplate from './imageupload/imageupload'
import baseTemplate from './base/base'
import restTemplate from './rest/rest'
import populateTemplate from './populate/populate'
import gumgacontrollerTemplate from './gumgacontroller/gumgacontroller'

const module = angular.module('components-templates', [])
                .directive('instalationTemplate', instalationTemplate)
                .directive('addressTemplate', addressTemplate)
                .directive('alertTemplate', alertTemplate)
                .directive('counterTemplate', counterTemplate)
                .directive('confirmTemplate', confirmTemplate)
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
                .directive('listTemplate', listTemplate)
                .directive('manytomanyTemplate', manytomanyTemplate)
                .directive('manytooneTemplate', manytooneTemplate)
                .directive('maskTemplate', maskTemplate)
                .directive('menuTemplate', menuTemplate)
                .directive('navTemplate', navTemplate)
                .directive('onetomanyTemplate', onetomanyTemplate)
                .controller('ModalClienteController', modalcontroller)
                .directive('queryTemplate', queryTemplate)
                .directive('tableTemplate', tableTemplate)
                .directive('uploadTemplate', uploadTemplate)
                .directive('fileuploadTemplate', fileuploadTemplate)
                .directive('numberTemplate', numberTemplate)
                .directive('webstorageTemplate', webstorageTemplate)
                .directive('imageuploadTemplate', imageuploadTemplate)
                .directive('baseTemplate', baseTemplate)
                .directive('restTemplate', restTemplate)
                .directive('populateTemplate', populateTemplate)
                .directive('gumgacontrollerTemplate', gumgacontrollerTemplate)

                
export default module.name;
