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
        },
        {
          label: 'Filter',
          anchor: 'filter',
          versions: ["3.1.6"],
          template: this.$sce.trustAsHtml('<filter-template version-docs="$ctrl.versionCurrent"></filter-template>')
        },
        {
          label: 'Form',
          anchor: 'form',
          versions: ["3.1.6"],
          template: this.$sce.trustAsHtml('<form-template version-docs="$ctrl.versionCurrent"></form-template>')
        },
        {
          label: 'Error',
          anchor: 'error',
          versions: ["3.1.6"],
          template: this.$sce.trustAsHtml('<error-template version-docs="$ctrl.versionCurrent"></error-template>')
        },
        {
          label: 'Errors',
          anchor: 'errors',
          versions: ["3.1.6"],
          template: this.$sce.trustAsHtml('<errors-template version-docs="$ctrl.versionCurrent"></errors-template>')
        },
        {
          label: 'Max',
          anchor: 'max',
          versions: ["3.1.6"],
          template: this.$sce.trustAsHtml('<max-template version-docs="$ctrl.versionCurrent"></max-template>')
        },
        {
          label: 'Min',
          anchor: 'min',
          versions: ["3.1.6"],
          template: this.$sce.trustAsHtml('<min-template version-docs="$ctrl.versionCurrent"></min-template>')
        },
        {
          label: 'Pattern',
          anchor: 'pattern',
          versions: ["3.1.6"],
          template: this.$sce.trustAsHtml('<pattern-template version-docs="$ctrl.versionCurrent"></pattern-template>')
        },
        {
          label: 'Range',
          anchor: 'range',
          versions: ["3.1.6"],
          template: this.$sce.trustAsHtml('<range-template version-docs="$ctrl.versionCurrent"></range-template>')
        },
        {
          label: 'Required',
          anchor: 'required',
          versions: ["3.1.6"],
          template: this.$sce.trustAsHtml('<required-template version-docs="$ctrl.versionCurrent"></required-template>')
        },
        {
          label: 'ValidateType',
          anchor: 'validatetype',
          versions: ["3.1.6"],
          template: this.$sce.trustAsHtml('<validatetype-template version-docs="$ctrl.versionCurrent"></validatetype-template>')
        },
        {
          label: 'FormButtons',
          anchor: 'formbuttons',
          versions: ["3.1.6"],
          template: this.$sce.trustAsHtml('<formbuttons-template version-docs="$ctrl.versionCurrent"></formbuttons-template>')
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

ComponentsController.$inject = ['ComponentsService', '$anchorScroll', '$location', '$sce', '$stateParams', '$state', '$timeout'];

export { ComponentsController }
