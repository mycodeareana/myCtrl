angular.module('myApp', [])
.config(['$sceDelegateProvider', function($sceDelegateProvider) {
  // We must whitelist the JSONP endpoint that we are using to show that we trust it
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://script.google.com/**',
    'https://angularjs.org/**'
  ]);
}])
.controller('myBlogPost', function ($scope, $http) {
	$scope.test = "If you can see this the mainController works"
	
    $http.jsonp('https://script.google.com/macros/s/AKfycbyAZekrWJdPuGu-7zPSmSLCFgY0f4s-wHBtvyYNvJK-NU1GTYcl/exec?action=get&blogpostid=NdAr2eP1yi8&v=' + Date.now(), {jsonpCallbackParam: 'callback'}).
		then(function (data) {
			console.log(data.data.blogposts);
			$scope.blogposts = data.data.blogposts;
			$scope.Title = data.data.blogposts[0].Title;
		});
		
		
});
