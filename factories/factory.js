app.factory('loginFactory', ['$http', function($http) {
    var c;
    var urlBase = 'json/';
    var url= 'login.json';
    var url2= 'details.json';
    var loginFactory = {};
    return{
    login:function () {
        return $http.get(urlBase+url);
    },
    add:function (a,b) {
    	c=a+b;
    	return c;
    },
    empDetails:function (fg) {
     $http.get(urlBase+url2).success(function(data){
        	console.log(data);
        	fg(data);
        }).error(function(){
        	alert("no data to display");
        });
    }
   
    }
}]);