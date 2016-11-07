(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

UserService.$inject = [];
function UserService()
{
  var service = this;
  var user = {};

  service.getUserInformation = function() {
    return user;
  };

  service.setUser = function(userInfo) {
    user = userInfo;
  };

  service.singOut = function() {
    userInfo = {};
  };

}

})();