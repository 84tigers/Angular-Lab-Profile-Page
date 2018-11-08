"use strict";
angular
    .module("App")
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
            .when("/profile", {
                template: "<profile></profile>"
            })
            .when("/editor", {
                template: "<editor></editor>"
            })
            .when("/", {
                template: "<profile></profile>"
            });
    }]);