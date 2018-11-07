"use strict";
const editor = {
    templateUrl: "app/editor/editor.html",
    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        // vm.items = ProfileService.setUserProfile(userPro);
        // console.log(vm.items.name);
        vm.giveUserProfile = (userPro) => {
            ProfileService.setUserProfile(userPro);
        }
      }]
}


angular
    .module("App")
    .component("editor", editor);