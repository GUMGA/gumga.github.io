class ComponentsController {

    constructor(ComponentsService, $anchorScroll, $location, $sce, $stateParams, $state, $timeout, $injector) {
        'ngInject';
        this.$location = $location;
        this.$anchorScroll = $anchorScroll;
        this.$sce = $sce;
        this.$stateParams = $stateParams;
        this.$state = $state;
        this.$timeout = $timeout;
        this.$injector = $injector;

    }

    $onInit() {
      const ctrl = this;
      ctrl.currentHash = 'instalation';

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
            ctrl.$timeout(()=>{
                var id = $(anchors[i]).attr('id');
                ctrl.currentHash = id;
            })
            break;
          }
        }
      }

      this.menus = [{
        label: 'Instalação',
        anchor: 'instalation',
        versions: ["3.2.0"],
        template: this.$sce.trustAsHtml('<instalation-template version-docs="$ctrl.versionCurrent"></instalation-template>')
      }];

      this.components = [
        {
          label: 'Address',
          anchor: 'address',
          versions: ["3.2.0"],
          template: this.$sce.trustAsHtml('<address-template version-docs="$ctrl.versionCurrent"></address-template>')
        },
        {
          label: 'Counter',
          anchor: 'counter',
          versions: ["3.2.0"],
          template: this.$sce.trustAsHtml('<counter-template version-docs="$ctrl.versionCurrent"></counter-template>')
        },
        {
          label: 'Confirm',
          anchor: 'confirm',
          versions: ["3.2.0"],
          template: this.$sce.trustAsHtml('<confirm-template version-docs="$ctrl.versionCurrent"></confirm-template>')
        },
        {
          label: 'Filter',
          anchor: 'filter',
          versions: ["3.2.0"],
          template: this.$sce.trustAsHtml('<filter-template version-docs="$ctrl.versionCurrent"></filter-template>')
        },
        {
          label: 'Form',
          anchor: 'form',
          versions: ["3.2.0"],
          template: this.$sce.trustAsHtml('<form-template version-docs="$ctrl.versionCurrent"></form-template>')
        },
        {
          label: 'Error',
          anchor: 'error',
          versions: ["3.2.0"],
          template: this.$sce.trustAsHtml('<error-template version-docs="$ctrl.versionCurrent"></error-template>')
        },
        {
          label: 'Errors',
          anchor: 'errors',
          versions: ["3.2.0"],
          template: this.$sce.trustAsHtml('<errors-template version-docs="$ctrl.versionCurrent"></errors-template>')
        },
        {
          label: 'Max',
          anchor: 'max',
          versions: ["3.2.0"],
          template: this.$sce.trustAsHtml('<max-template version-docs="$ctrl.versionCurrent"></max-template>')
        },
        {
          label: 'Min',
          anchor: 'min',
          versions: ["3.2.0"],
          template: this.$sce.trustAsHtml('<min-template version-docs="$ctrl.versionCurrent"></min-template>')
        },
        {
          label: 'Pattern',
          anchor: 'pattern',
          versions: ["3.2.0"],
          template: this.$sce.trustAsHtml('<pattern-template version-docs="$ctrl.versionCurrent"></pattern-template>')
        },
        {
          label: 'Range',
          anchor: 'range',
          versions: ["3.2.0"],
          template: this.$sce.trustAsHtml('<range-template version-docs="$ctrl.versionCurrent"></range-template>')
        },
        {
          label: 'Required',
          anchor: 'required',
          versions: ["3.2.0"],
          template: this.$sce.trustAsHtml('<required-template version-docs="$ctrl.versionCurrent"></required-template>')
        },
        {
          label: 'ValidateType',
          anchor: 'validatetype',
          versions: ["3.2.0"],
          template: this.$sce.trustAsHtml('<validatetype-template version-docs="$ctrl.versionCurrent"></validatetype-template>')
        },
        {
          label: 'FormButtons',
          anchor: 'formbuttons',
          versions: ["3.2.0"],
          template: this.$sce.trustAsHtml('<formbuttons-template version-docs="$ctrl.versionCurrent"></formbuttons-template>')
        },
        {
          label: 'List',
          anchor: 'list',
          versions: ["3.2.0"],
          template: this.$sce.trustAsHtml('<list-template version-docs="$ctrl.versionCurrent"></list-template>')
        },
        {
          label: 'ManyToMany',
          anchor: 'manytomany',
          versions: ["3.2.0"],
          template: this.$sce.trustAsHtml('<manytomany-template version-docs="$ctrl.versionCurrent"></manytomany-template>')
        },
        {
          label: 'ManyToOne',
          anchor: 'manytoone',
          versions: ["3.2.0"],
          template: this.$sce.trustAsHtml('<manytoone-template version-docs="$ctrl.versionCurrent"></manytoone-template>')
        },
        {
          label: 'Mask',
          anchor: 'mask',
          versions: ["3.2.0"],
          template: this.$sce.trustAsHtml('<mask-template version-docs="$ctrl.versionCurrent"></mask-template>')
        },
        {
          label: 'Menu',
          anchor: 'gumgamenu',
          versions: ["3.2.0"],
          template: this.$sce.trustAsHtml('<menu-template version-docs="$ctrl.versionCurrent"></menu-template>')
        },
        {
          label: 'Nav',
          anchor: 'nav',
          versions: ["3.2.0"],
          template: this.$sce.trustAsHtml('<nav-template version-docs="$ctrl.versionCurrent"></nav-template>')
        },
        {
          label: 'OneToMany',
          anchor: 'onetomany',
          versions: ["3.2.0"],
          template: this.$sce.trustAsHtml('<onetomany-template version-docs="$ctrl.versionCurrent"></onetomany-template>')
        },
        {
          label: 'Query',
          anchor: 'query',
          versions: ["3.2.0"],
          template: this.$sce.trustAsHtml('<query-template version-docs="$ctrl.versionCurrent"></query-template>')
        },
        {
          label: 'Table',
          anchor: 'table',
          versions: ["3.2.0"],
          template: this.$sce.trustAsHtml('<table-template version-docs="$ctrl.versionCurrent"></table-template>')
        },
        {
          label: 'Upload',
          anchor: 'upload',
          versions: ["3.2.0"],
          template: this.$sce.trustAsHtml('<upload-template version-docs="$ctrl.versionCurrent"></upload-template>')
        },
        {
          label: 'FileUpload',
          anchor: 'fileupload',
          versions: ["3.2.0"],
          template: this.$sce.trustAsHtml('<fileupload-template version-docs="$ctrl.versionCurrent"></fileupload-template>')
        },
        {
          label: 'Number',
          anchor: 'number',
          versions: ["3.2.0"],
          template: this.$sce.trustAsHtml('<number-template version-docs="$ctrl.versionCurrent"></number-template>')
        },
        {
          label: 'ImageUpload',
          anchor: 'imageupload',
          versions: ["3.2.0"],
          template: this.$sce.trustAsHtml('<imageupload-template version-docs="$ctrl.versionCurrent"></imageupload-template>')
        }
      ];

      this.services = [
        {
          label: 'Alert',
          anchor: 'alert',
          versions: ["3.2.0"],
          template: this.$sce.trustAsHtml('<alert-template version-docs="$ctrl.versionCurrent" controllername="AlertController316"></alert-template>')
        },
        {
          label: 'WebStorage',
          anchor: 'webstorage',
          versions: ["3.2.0"],
          template: this.$sce.trustAsHtml('<webstorage-template version-docs="$ctrl.versionCurrent"></webstorage-template>')
        }
      ];

      this.versions = [];

      this.menus.concat(this.services).concat(this.components).forEach((menu)=>{
          menu.versions.forEach((version)=>{
             if(this.versions.indexOf(version) == -1){
               this.versions.push(version);
             }
          })
      });

      if(!this.$stateParams.version && this.versions.length > 0){
         this.setVersion(this.versions[0])
      }

      this.versionCurrent = this.$stateParams.version;
      this.appendCSS(this.versionCurrent);
    }

    appendCSS(version){
      if(!version) return;
      const head = document.getElementsByTagName('head')[0];
      const style = document.createElement('link');
      style.rel = 'stylesheet';
      style.href = 'gumga-js/components/'+version+'/gumga.min.css';
      head.appendChild(style);
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
      const ctrl = this;
      if(ctrl.currentHash == menu.anchor){
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

ComponentsController.$inject = ['ComponentsService', '$anchorScroll', '$location', '$sce', '$stateParams', '$state', '$timeout', '$injector'];

export { ComponentsController }
