"use strict";
function ProfileService() {
    const self = this;
    self.items = 
        {name: "Grant Chirpus", 
        contact: "grant@grandcircus.co", 
        bio: "I am pretty cool. I a great job. I like to play Tetris. I am pretty ok at AngularJS"}
    ;
    self.getItems = () => {
        return self.items;
    }

}


angular
    .module("App")
    .service("ProfileService", ProfileService);