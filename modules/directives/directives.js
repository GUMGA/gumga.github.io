import header from './header/header'
import bindHtmlCompile from './bindHtmlCompile/bindHtmlCompile'

const module = angular.module('directives', [])
                .directive('gumgaHeader', header)
                .directive('bindHtmlCompile', bindHtmlCompile)

export default module.name;
