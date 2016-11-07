(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'UserService'];
function SignUpController(MenuService, UserService) {
  var reg = this;

  reg.submit = function () {
    UserService.setUser(reg.user);
    reg.completed = true;
  };

  reg.onLeaveFocus = function(form) {
		MenuService.getItemByName(this.user.dish)
		.then(
			function (result) {
				reg.user.selecteddish = result;
				form.dish.$setValidity("validdish",true);
			},
			function (err) {
				form.dish.$setValidity("validdish",false);
			}
		);
  };
}

})();
