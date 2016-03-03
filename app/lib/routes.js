Router.configure({
  layoutTemplate: 'layoutMaster',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'staticHome',
  controller: 'HomeController',
  where: 'client'
});
