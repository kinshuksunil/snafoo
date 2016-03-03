Router.configure({
  layoutTemplate: 'layoutMaster',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'staticHomeController',
  where: 'client'
});
