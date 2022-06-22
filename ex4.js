var app = angular.module("MyApp", []);
        app.controller("MyController", function ($scope) {
            $scope.layout = 'grid';
            $scope.Data = [
                { Name: "Spiderman No way Home", Path: "Images/No way home.jpg" },
                { Name: "Doctor Strange Multiverse of Madness", Path: "Images/doctorstrange.jpeg" },
                { Name: "Thor Love and Thunder", Path: "Images/thorloveandthunder.jpg" },
                { Name: "Marvel Avengers - Infinty War", Path: "Images/infinitywar.jpg" },
                { Name: "Marvel Avengers - End Game", Path: "Images/endgame.jpg" },
                { Name: "Black Panther", Path: "Images/blackpanther.jpg" },
                { Name: "Captain America Civil War", Path: "Images/civilwar.jpg" },
                { Name: "Black Widow", Path: "Images/blackwidow.jpg" },
                { Name: "Hulk", Path: "Images/hulk.jpg"}];
        });