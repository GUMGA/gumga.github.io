class GumgaReportController {

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
        this.versions = ["1.0.0"];
        window.currentHash = 'release';

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
                versions: ["1.0.0"],
                template: this.$sce.trustAsHtml('<gumga-report-instalation version-docs="$ctrl.getLatestVersion('+"'instalation'"+', $ctrl.versionCurrent)"></gumga-report-instalation>')
            },
            {
                label: 'Configuração',
                anchor: 'use',
                versions: ["1.0.0"],
                template: this.$sce.trustAsHtml('<gumga-report-use version-docs="$ctrl.getLatestVersion('+"'use'"+', $ctrl.versionCurrent)"></gumga-report-use>')
            },
            {
                label: 'Configurações adicionais',
                anchor: 'configuration',
                versions: ["1.0.0"],
                template: this.$sce.trustAsHtml('<gumga-report-configuration version-docs="$ctrl.getLatestVersion('+"'configuration'"+', $ctrl.versionCurrent)"></gumga-report-configuration>')
            }
        ]

    }

    getLatestVersion(anchor, versionCurrent) {
        let item = this.menu.filter(m=>{return anchor == m.anchor});
        let versions = item[0].versions.filter(v=>{return v == versionCurrent });

        if(versions.length == 0) {
            let result = item[0].versions.sort(this.compareNumbers);
            console.log(result)
            return result[0];
        }
        return versions[0];
    }

    compareNumbers(a, b) {
        let v1 = Number(a.replace('.', '').replace('.', ''))
        let v2 = Number(b.replace('.', '').replace('.', ''))

        return v2 - v1;
    }

    thereIsThisVersion(versions){
        // const toReturn = versions.filter(version=>{
        //         return version == this.versionCurrent;
        //     }).length > 0;
        // return toReturn;
        return true;
    }

    setVersion(version){
        this.$state.go('app.gumgaReport', {version: version});
    }

    getMenuStyle(menu){
        const toReturn = {};
        if(window.currentHash == menu.anchor || window.currentHash == menu){
            toReturn['background'] = 'rgba(76, 175, 80, 0.05)';
            toReturn['border-left'] = '3px solid #009688';
        }else{
            toReturn['border-left'] = '3px solid transparent';
        }
        toReturn['padding-left'] = '10px';
        if(menu != 'release') {
            toReturn['padding-top'] = '3px';
        }

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

GumgaReportController.$inject = ['FrameworkService', '$anchorScroll', '$location', '$sce', '$stateParams', '$state', '$timeout'];

export { GumgaReportController }
