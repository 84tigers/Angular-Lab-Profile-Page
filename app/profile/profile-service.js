"use strict";
function ProfileService() {
    const self = this;
    self.items = 
        {name: "Grant Chirpus", 
        contact: "grant@grandcircus.co", 
        bio: "I am pretty cool. I a great job. I like to play Tetris. I am pretty ok at AngularJS"}
    ;
    self.getUserProfile = () => {
        return self.items;
    }
    self.setUserProfile = (userPro) => {
        self.items = userPro;
        $location.path("/profile.html")
    }

}


angular
    .module("App")
    .service("ProfileService", ProfileService);