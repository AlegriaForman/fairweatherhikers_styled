module.exports = function(app) {
  app.directive('userprofileForm', () => {
    return {
      restrict: 'EAC',
      require: '^ngController',
      transclude: true,
      templateUrl: '/templates/userprofile/directives/userprofile_form.html',
      scope: {
        favorite: '=',
        buttonText: '@',
        action: '@'
      },
      link: function(scope, element, attrs, controller) {
        var actions = {
          add: controller.addUserprofile
        };
        scope.save = actions[scope.action];
      }
    };
  });
};
