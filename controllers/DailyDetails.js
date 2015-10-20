
app.controller('DailyDetailsCtrl', function($scope) {
    //alert("in details ctrl");
    Details=JSON.parse(localStorage.getItem('todos'))[0];
    //alert(Details.custname);
    var detailsLength=JSON.parse(localStorage.getItem('todos')).length;
    var DetailsData;
    var totalPrice=0;
    var dateArray=[];
    var count;
    $scope.getDateandPrice=function()
    {
        alert(dateArray.length);
    if(dateArray.length==0)
            {
                 dateArray.push(JSON.parse(localStorage.getItem('todos'))[0].date);
                alert(dateArray.length);
            }
    
        for(var j=0;j<detailsLength;j++)
    
        {
            alert("j:"+j+"  "+"detailsLength:"+detailsLength);
            //alert(dateArray.length);
            for(var k=0;k<dateArray.length;k++)
            {
                
                alert("K:"+k+"  "+"dateArray.length:"+dateArray.length);
                
                  if(dateArray[k]!=JSON.parse(localStorage.getItem('todos'))[j].date)
                  {
                   count++;
                  }
                    
            }
            if(count>0)
            {
               dateArray.push(JSON.parse(localStorage.getItem('todos'))[j].date); 
            }
        }
    }
        
        alert("final array.............."+dateArray.length);
    
    /* for(var i=0;i<dateArray.length;i++)
      {
           alert(dateArray.length);
          for(var l=0;l<detailsLength;l++)
          {
          DetailsData2=JSON.parse(localStorage.getItem('todos'))[l];
              alert(DetailsData2);
          if(dateArray[i]==DetailsData2.date);
              {
                  alert(DetailsData2.price);
                 // alert(totalPrice);
                totalPrice = totalPrice + parseInt(DetailsData2.price);
              }
          }
          
          $scope.DetailsDate=dateArray[i];
            $scope.DetailsPrice=totalPrice;
          alert(dateArray[i]);
          alert(totalPrice);
      }*/
    };
   // $rootScope.changingDiv='templates/fillForm.html';
  /* $rootScope.todos = [];
  $scope.markAll = false;
    if(localStorage.getItem('todos')!=null)
    {
    $scope.saved = localStorage.getItem('todos');
        $rootScope.todos = JSON.parse($scope.saved); 
    }
  $scope.addTodo = function() {
      //alert("function called");
      if(event.keyCode == 13 || ($scope.custname && $scope.quantity && $scope.price)){
          
          
          
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0!
            var yyyy = today.getFullYear();

            if(dd<10) {
                dd='0'+dd
            } 

            if(mm<10) {
                mm='0'+mm
            } 

            today = dd+'/'+mm+'/'+yyyy;
            alert(today);

          
          
          $rootScope.todos.push({custname:$scope.custname,quantity:$scope.quantity,price:$scope.price,date:today, done:false});
          localStorage.setItem('todos', JSON.stringify($scope.todos));
          console.log($scope.todos);
          $scope.custname = '';
          $scope.quantity = '';
          $scope.price = '';
      }
     // alert($scope.todos[0].custname);
  };
    
   
    
  $scope.isTodo = function(){
      return $rootScope.todos.length > 0;  
  }
  $scope.toggleEditMode = function(){
      $(event.target).closest('li').toggleClass('editing');
  };
  $scope.editOnEnter = function(todo){
      if(event.keyCode == 13 && todo.text){
          $scope.toggleEditMode();
      }
  };
    
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($rootScope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  $scope.hasDone = function() {
      return ($rootScope.todos.length != $scope.remaining());
  }    
    
  $scope.itemText = function() {
      return ($rootScope.todos.length - $scope.remaining() > 1) ? "items" : "item";     
  };
      
    $scope.customerDetails = function(index) {
         $scope.fillFormDivDisplay=false;
         $scope.DetailsForDivDisplay=true;
     Details=JSON.parse(localStorage.getItem('todos'))[index];
//        $('.FormDetails').children().remove();
//        $('.FormDetails').append();
       // $scope.DetailsTemplate="templates/custDetails.html";
        // $rootScope.changingDiv='templates/custDetails.html';
          $scope.getValues();
  };
    
     $scope.getValues=function()
    {
        $scope.custnameRead=Details.custname;
        $scope.quantityRead=Details.quantity;
        $scope.priceRead=Details.price;
         $scope.dateRead=Details.date;
    };
    
    $scope.Detailsback = function() {
      $scope.fillFormDivDisplay=true;
         $scope.DetailsForDivDisplay=false;
  };
    
  $scope.toggleMarkAll = function() {
      angular.forEach($scope.todos, function(todo) {
        todo.done =$scope.markAll;
      });
  };
  
  $scope.clear = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  };*/
});
