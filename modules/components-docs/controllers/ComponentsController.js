class ComponentsController {

    constructor(ComponentsService, $anchorScroll, $location, $sce, $stateParams, $state, $timeout) {
        'ngInject';
        this.$location = $location;
        this.$anchorScroll = $anchorScroll;
        this.$sce = $sce;
        this.$stateParams = $stateParams;
        this.$state = $state;
        window.$timeout = $timeout;
    }

    $onInit() {
      this.versions = ["3.1.6"];
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
          versions: ["3.1.6"],
          template: this.$sce.trustAsHtml('<instalation-template version-docs="$ctrl.versionCurrent"></instalation-template>')
        },
        {
          label: 'Address',
          anchor: 'address',
          versions: ["3.1.6"],
          template: this.$sce.trustAsHtml('<address-template version-docs="$ctrl.versionCurrent"></address-template>')
        },
        {
          label: 'Alert',
          anchor: 'alert',
          versions: ["3.1.6"],
          template: this.$sce.trustAsHtml('<alert-template version-docs="$ctrl.versionCurrent" controllername="AlertController316"></alert-template>')
        },
        {
          label: 'Counter',
          anchor: 'counter',
          versions: ["3.1.6"],
          template: this.$sce.trustAsHtml('<counter-template version-docs="$ctrl.versionCurrent"></counter-template>')
        },
        {
          label: 'Confirm',
          anchor: 'confirm',
          versions: ["3.1.6"],
          template: this.$sce.trustAsHtml('<confirm-template version-docs="$ctrl.versionCurrent"></confirm-template>')
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
      this.$state.go('app.components', {version: version});
    }

    getMenuStyle(menu){
      const toReturn = {};
      if(window.currentHash == menu.anchor){
          toReturn['background'] = 'rgba(76, 175, 80, 0.05)';
          toReturn['border-left'] = '1px solid #009688';
      }else{
        toReturn['border-left'] = '1px solid transparent';
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

ComponentsController.$inject = ['ComponentsService', '$anchorScroll', '$location', '$sce', '$stateParams', '$state', '$timeout'];

export { ComponentsController }
