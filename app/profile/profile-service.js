"use strict";
function ProfileService($location) {
    const self = this;
    self.items = {
        name: "Grant Chirpus", 
        contact: "grant@grandcircus.co", 
        bio: "I am pretty cool. I a great job. I like to play Tetris. I am pretty ok at AngularJS",
        img: "app/img/dave.jpg"
    };
    self.getUserProfile = () => {
        return self.items;
    };
    self.loadEdit = () => {
        $location.path("/editor");
    };
    self.setUserProfile = (userProfileEdit) => {
        self.items = userProfileEdit;
        $location.path("/profile");
    };

}


angular
    .module("App")
    .service("ProfileService", ProfileService);