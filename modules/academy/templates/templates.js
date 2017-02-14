import GumgaAcademy1 from './gumga-academy1/gumga-academy1'
import GumgaAcademy2 from './gumga-academy2/gumga-academy2'
import GumgaAcademy3 from './gumga-academy3/gumga-academy3'
import GumgaAcademy4 from './gumga-academy4/gumga-academy4'
import GumgaAcademy5 from './gumga-academy5/gumga-academy5'

const module = angular.module('academy-templates', [])
    .directive('gumgaAcademy1', GumgaAcademy1)
    .directive('gumgaAcademy2', GumgaAcademy2)
    .directive('gumgaAcademy3', GumgaAcademy3)
    .directive('gumgaAcademy4', GumgaAcademy4)
    .directive('gumgaAcademy5', GumgaAcademy5)


export default module.name;
