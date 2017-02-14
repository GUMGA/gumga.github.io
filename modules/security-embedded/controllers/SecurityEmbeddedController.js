class SecurityEmbeddedController {

    constructor(FrameworkService, $anchorScroll, $location, $sce, $stateParams, $state, $timeout) {
        'ngInject';
        this.$location = $location;
        this.$anchorScroll = $anchorScroll;
        this.$sce = $sce;
        this.$stateParams = $stateParams;
        this.$state = $state;
        window.$timeout = $timeout;
    }

    $onInit() {
        this.versions = ["1.2.1"];
        window.currentHash = 'instalation';

        if(!this.$stateParams.version){
            this.setVersion(this.versions[0])
        }

        this.versionCurrent = this.$stateParams.version;

        function isScrolledIntoView(elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            var elemTop = $(elem).offset().top;
            return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
        }

        window.onscroll = function (oEvent) {
            var anchors = $('.hash');
            for (var i = 0; i < anchors.length; ++i) {
                if (isScrolledIntoView(anchors[i])){
                    $timeout(()=>{
                        var id = $(anchors[i]).attr('id');
                        window.currentHash = id;
                    })
                    break;
                }
            }
        }

        this.menu = [
            {
                label: 'Instalação',
                anchor: 'instalation',
                versions: ["1.2.1"],
                template: this.$sce.trustAsHtml('<security-instalation version-docs="$ctrl.versionCurrent"></security-instalation>')
            },
            {
                label: 'Uso',
                anchor: 'use',
                versions: ["1.2.1"],
                template: this.$sce.trustAsHtml('<security-use version-docs="$ctrl.versionCurrent"></security-use>')
            },
            {
                label: 'Configuração',
                anchor: 'configuration',
                versions: ["1.2.1"],
                template: this.$sce.trustAsHtml('<security-configuration version-docs="$ctrl.versionCurrent"></security-configuration>')
            }
        ]

    }

    thereIsThisVersion(versions){
        const toReturn = versions.filter(version=>{
                return version == this.versionCurrent;
            }).length > 0;
        return toReturn;
    }

    setVersion(version){
        this.$state.go('app.security', {version: version});
    }

    getMenuStyle(menu){
        const toReturn = {};
        if(window.currentHash == menu.anchor){
            toReturn['background'] = 'rgba(76, 175, 80, 0.05)';
            toReturn['border-left'] = '3px solid #009688';
        }else{
            toReturn['border-left'] = '3px solid transparent';
        }
        toReturn['padding-left'] = '10px';
        toReturn['padding-top'] = '3px';
        return toReturn;
    }

    gotoAnchor(anchor){
        if(window.PR){
            PR.prettyPrint();
        }
        $('html, body').animate({
            scrollTop: $('#'+anchor).offset().top - 50
        }, 1000);
    }


}

SecurityEmbeddedController.$inject = ['FrameworkService', '$anchorScroll', '$location', '$sce', '$stateParams', '$state', '$timeout'];

export { SecurityEmbeddedController }
