import header from './header/header'
import bindHtmlCompile from './bindHtmlCompile/bindHtmlCompile'
import release from './release/release'

const module = angular.module('directives', [])
                .directive('gumgaHeader', header)
                .directive('bindHtmlCompile', bindHtmlCompile)
                .directive('release', release)

export default module.name;
