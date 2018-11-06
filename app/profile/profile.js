"use strict";
const profile = {
    templateUrl: "app/profile/profile.html",
    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        vm.items = ProfileService.getItems();
        console.log(vm.items.name);
      }]

};




angular
    .module("App")
    .component("profile", profile);