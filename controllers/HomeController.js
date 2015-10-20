
app.controller('HomeController', function($scope,$rootScope,loginFactory,$location) {
    var Details;
    $scope.fillFormDivDisplay=true;
    $scope.DetailsForDivDisplay=false;
    $scope.templetePath='templates/form.html';
    
    $scope.mainMenuClick = function() {
        $scope.leftMargin = '0px';
        $scope.blur = 'blur(15px)';   
           
	};
    
    $scope.headerContentClick=function()
    {
        $scope.leftMargin='-100%'; 
        $scope.blur = 'blur(0px)';
        clicked="false";
    };
	
    $scope.successcb = function(data) {
		console.log(data);
		$scope.dataArray = data;
	};
    
    $scope.Logoutclicked = function()
    {
        $location.path('/login');   
    };
    
    $scope.clearLocalStorage = function()
    {
        localStorage.clear(); 
        $rootScope.todos=[];
    };
    
    $scope.routeToThis=function(path)
    {
        $location.path(path);  
    };
    
   
    
	loginFactory.empDetails($scope.successcb);


});
