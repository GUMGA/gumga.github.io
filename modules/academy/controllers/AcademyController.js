class AcademyController {

    constructor(AcademyService, $anchorScroll, $location, $sce, $stateParams, $state, $timeout) {
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
        window.currentHash = 'gumga-academy1';

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
                label: 'G.A. I - Mãos a obra',
                anchor: 'gumga-academy1',
                versions: ["1.0.0"],
                template: this.$sce.trustAsHtml('<gumga-academy1 version-docs="$ctrl.versionCurrent"></gumga-academy1>')
            },
            {
                label: 'G.A. II - Como o funciona back-end?',
                anchor: 'gumga-academy2',
                versions: ["1.0.0"],
                template: this.$sce.trustAsHtml('<gumga-academy2 version-docs="$ctrl.versionCurrent"></gumga-academy2>')
            },
            {
                label: 'G.A. II - Como o funciona front-end?',
                anchor: 'gumga-academy3',
                versions: ["1.0.0"],
                template: this.$sce.trustAsHtml('<gumga-academy3 version-docs="$ctrl.versionCurrent"></gumga-academy3>')
            },
            {
                label: 'G.A. IV - Que cara é essa?',
                anchor: 'gumga-academy4',
                versions: ["1.0.0"],
                template: this.$sce.trustAsHtml('<gumga-academy4 version-docs="$ctrl.versionCurrent"></gumga-academy4>')
            },
            {
                label: 'G.A. V - Agora é sério!',
                anchor: 'gumga-academy5',
                versions: ["1.0.0"],
                template: this.$sce.trustAsHtml('<gumga-academy5 version-docs="$ctrl.versionCurrent"></gumga-academy5>')
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
        this.$state.go('app.academy', {version: version});
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

AcademyController.$inject = ['AcademyService', '$anchorScroll', '$location', '$sce', '$stateParams', '$state', '$timeout'];

export { AcademyController }
