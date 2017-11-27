class GeradorController {

    constructor(GeradorService, $anchorScroll, $location, $sce, $stateParams, $state, $timeout) {
        'ngInject';
        this.$location = $location;
        this.$anchorScroll = $anchorScroll;
        this.$sce = $sce;
        this.$stateParams = $stateParams;
        this.$state = $state;
        window.$timeout = $timeout;
    }

    $onInit() {
        this.versions = ["latest"];
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
                versions: ["latest"],
                template: this.$sce.trustAsHtml('<instalation version-docs="$ctrl.getLatestVersion('+"'instalation'"+', $ctrl.versionCurrent)"></instalation>')
            },
            // {
            //     label: 'Java docs',
            //     anchor: 'java-docs',
            //     versions: ["1.3.0"],
            //     template: this.$sce.trustAsHtml('<java-docs version-docs="$ctrl.getLatestVersion('+"'java-docs'"+', $ctrl.versionCurrent)"></java-docs>')
            // },
            {
                label: 'Estrutura do projeto',
                anchor: 'archetype',
                versions: ["latest"],
                template: this.$sce.trustAsHtml('<archetype version-docs="$ctrl.getLatestVersion('+"'archetype'"+', $ctrl.versionCurrent)"></archetype>')
            },
            {
                label: 'Entidade',
                anchor: 'domain',
                versions: ["latest"],
                template: this.$sce.trustAsHtml('<domain version-docs="$ctrl.getLatestVersion('+"'domain'"+', $ctrl.versionCurrent)"></domain>')
            },
            {
                label: 'Repositório e Serviço',
                anchor: 'application',
                versions: ["latest"],
                template: this.$sce.trustAsHtml('<application version-docs="$ctrl.getLatestVersion('+"'application'"+', $ctrl.versionCurrent)"></application>')
            },
            {
                label: 'Api',
                anchor: 'api',
                versions: ["latest"],
                template: this.$sce.trustAsHtml('<api version-docs="$ctrl.getLatestVersion('+"'api'"+', $ctrl.versionCurrent)"></api>')
            },
            {
                label: 'Apresentação',
                anchor: 'presentation',
                versions: ["latest"],
                template: this.$sce.trustAsHtml('<presentation version-docs="$ctrl.getLatestVersion('+"'presentation'"+', $ctrl.versionCurrent)"></presentation>')
            },
            {
                label: 'Infrastructure',
                anchor: 'infrastructure',
                versions: ["latest"],
                template: this.$sce.trustAsHtml('<infrastructure version-docs="$ctrl.getLatestVersion('+"'infrastructure'"+', $ctrl.versionCurrent)"></infrastructure>')
            },
            {
                label: 'gateway',
                anchor: 'gateway',
                versions: ["latest"],
                template: this.$sce.trustAsHtml('<gateway version-docs="$ctrl.getLatestVersion('+"'gateway'"+', $ctrl.versionCurrent)"></gateway>')
            },
            {
                label: 'Enum',
                anchor: 'enum',
                versions: ["latest"],
                template: this.$sce.trustAsHtml('<enum version-docs="$ctrl.getLatestVersion('+"'enum'"+', $ctrl.versionCurrent)"></enum>')
            }
        ]

    }

    getLatestVersion(anchor, versionCurrent) {
        let item = this.menu.filter(m=>{return anchor == m.anchor});
        let versions = item[0].versions.filter(v=>{return v == versionCurrent });

        if(versions.length == 0) {
            let result = item[0].versions.sort(this.compareNumbers);
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
        return true;
    }

    setVersion(version){
        this.$state.go('app.gerador', {version: version});
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

GeradorController.$inject = ['GeradorService', '$anchorScroll', '$location', '$sce', '$stateParams', '$state', '$timeout'];

export { GeradorController }
