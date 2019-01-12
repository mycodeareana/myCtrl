angular.module('myApp', [])
.controller('myBlogPost', function($scope, $http) {
    $http.get('https://script.google.com/macros/s/AKfycbyAZekrWJdPuGu-7zPSmSLCFgY0f4s-wHBtvyYNvJK-NU1GTYcl/exec?action=get&blogpostid=NdAr2eP1yi8&v=' + Date.now()).
        then(function(response) {
            $scope.blogpost = response.data;
        });
});
