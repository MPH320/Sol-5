(function () {
"use strict";

	angular.module('public')
	.controller('MyInfoController', MyInfoController);

	MyInfoController.$inject = ['userInfo'];
	function MyInfoController(userInfo) {
		var $ctrl = this;
		this.user = userInfo;
	}

})();