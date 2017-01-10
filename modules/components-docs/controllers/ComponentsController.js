class ComponentsController {

    constructor(ComponentsService, $anchorScroll, $location, $sce) {
        'ngInject';
        this.$location = $location;
        this.$anchorScroll = $anchorScroll;
        this.$sce = $sce;
    }

    $onInit() {

      this.menu = [
        {
          label: 'Instalação',
          anchor: 'instalation',
          template: this.$sce.trustAsHtml('<instalation-template></instalation-template>')
        },
        {
          label: 'Address',
          anchor: 'address',
          template: this.$sce.trustAsHtml('<address-template></address-template>')
        },
        {
          label: 'Alert',
          anchor: 'alert',
          template: this.$sce.trustAsHtml('<alert-template></alert-template>')
        }
      ]

    }

    gotoAnchor(anchor){
      setTimeout(function(){document.body.scrollTop = document.body.scrollTop - 50;}, 10)
      if (this.$location.hash() !== anchor) {
        this.$location.hash(anchor);


      } else {
        this.$anchorScroll();
      }
    }


}

ComponentsController.$inject = ['ComponentsService', '$anchorScroll', '$location', '$sce'];

export { ComponentsController }
