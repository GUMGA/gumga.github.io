import preRequisito from './pre-requisito/pre-requisito'
import archetype from './archetype/archetype'
import domain from './domain/domain'
import application from './application/application'
import api from './api/api'
import enumGumga from './enum/enum'
import infrastructure from './infrastructure/infrastructure'
import gateway from './gateway/gateway'
import presentation from './presentation/presentation'

const module = angular.module('framework-templates', [])
    .directive('preRequisito', preRequisito)
    .directive('archetype', archetype)
    .directive('domain', domain)
    .directive('application', application)
    .directive('api', api)
    .directive('enum', enumGumga)
    .directive('infrastructure', infrastructure)
    .directive('gateway', gateway)
    .directive('presentation', presentation)



export default module.name;
