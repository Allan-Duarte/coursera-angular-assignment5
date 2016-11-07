(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['userInfo'];
function MyInfoController(userInfo) {
  var infoCtrl = this;
  infoCtrl.user = userInfo;
  infoCtrl.showUserInformation = !(angular.equals({}, infoCtrl.user));
}

})();
