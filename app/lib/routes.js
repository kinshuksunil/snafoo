Router.configure({
  layoutTemplate: 'layoutMaster',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'pageHome',
  controller: 'HomeController',
  where: 'client'
});
