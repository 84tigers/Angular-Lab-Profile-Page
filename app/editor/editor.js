"use strict";
const editor = {
    templateUrl: "app/editor/editor.html",
    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        this.profileEdit = angular.copy(ProfileService.getUserProfile());
        this.saveUserProfile = (userProfileEdit) => {
            ProfileService.setUserProfile(userProfileEdit);
        };
    }]
};



angular
    .module("App")
    .component("editor", editor);