"use strict";
function ProfileService($location) {
    const self = this;
    self.items = {
        name: "Sir David Frederick Attenborough OM CH CVO CBE FRS FLS FZS FSA FRSGS", 
        contact: "dave@beastmaster.co.uk", 
        bio: "I think animals are pretty neat, so I make videos about 'em. I have more degrees and honors than you... just look at my name. Pretty long, innit?",
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