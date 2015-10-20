app.controller('LoginController',function($scope,loginFactory, $location) {
  $scope.section='templates/Login.html';
  $scope.LoginSubmit = function (username, password,dob) {
  	loginFactory.login()
            .success(function (data) {
                for(var i=0;i<data.length;i++){
                    if ( username === data[i].username && password === data[i].password && dob=== data[i].dob) 
                    {
                        user = data[i].username;
                        i=data.length+1;
                       $location.path( '/landing' );
                    } else {
                       $scope.loginError = "Invalid username/password combination";
                    };
                }
            })
            .error(function (error) {
                $scope.status = 'Unable to login: ' + error.message;
            });
    
  };

});