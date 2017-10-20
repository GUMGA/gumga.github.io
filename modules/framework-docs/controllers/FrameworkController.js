class FrameworkController {

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
        this.versions = ["1.5.22"];
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
                label: 'Pré-requisito',
                anchor: 'pre-requisito',
                versions: ["1.5.22"],
                template: this.$sce.trustAsHtml('<pre-requisito-framework version-docs="$ctrl.getLatestVersion('+"'pre-requisito'"+', $ctrl.versionCurrent)"></pre-requisito-framework>')
            },
            {
                label: 'Java docs',
                anchor: 'java-docs',
                versions: ["1.5.22"],
                template: this.$sce.trustAsHtml('<java-docs-framework version-docs="$ctrl.getLatestVersion('+"'java-docs'"+', $ctrl.versionCurrent)"></java-docs-framework>')
            },
            {
                label: 'GQuery',
                anchor: 'gquery',
                versions: ["1.5.22"],
                template: this.$sce.trustAsHtml('<gquery version-docs="$ctrl.getLatestVersion('+"'gquery'"+', $ctrl.versionCurrent)"></gquery>')
            },
            {
                label: 'Swagger',
                anchor: 'swagger',
                versions: ["1.5.22"],
                template: this.$sce.trustAsHtml('<swagger version-docs="$ctrl.getLatestVersion('+"'swagger'"+', $ctrl.versionCurrent)"></swagger>')
            },
            {
                label: 'Custom Fields',
                anchor: 'custom-fields',
                versions: ["1.5.22"],
                template: this.$sce.trustAsHtml('<custom-fields version-docs="$ctrl.getLatestVersion('+"'custom-fields'"+', $ctrl.versionCurrent)"></custom-fields>')
            },
            {
                label: 'Gumga Amazon SES',
                anchor: 'gumga-amazon-ses',
                versions: ["1.5.22"],
                template: this.$sce.trustAsHtml('<gumga-amazon-ses version-docs="$ctrl.getLatestVersion('+"'gumga-amazon-ses'"+', $ctrl.versionCurrent)"></gumga-amazon-ses>')
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
        this.$state.go('app.framework', {version: version});
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

FrameworkController.$inject = ['FrameworkService', '$anchorScroll', '$location', '$sce', '$stateParams', '$state', '$timeout'];

export { FrameworkController }
