class HomeController {

    constructor(HomeService) {
        'ngInject';
    }

    $onInit() {
      this.navMenu = [
          {
            label: 'Começando'
          }
      ]
    }


}

HomeController.$inject = ['HomeService'];

export { HomeController }
