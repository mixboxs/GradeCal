var myApp = angular.module('myApp', []);


    myApp.controller('TodoController', ['$scope', function($scope) {
     $scope.cal = function()
     {
      if ($scope.point1>=80)
       {
        $scope.grade1 = "A";
        $scope.score =4;
      }
      else if ($scope.point1>=70) 
        {
          $scope.grade1 = "B";
          $scope.score = 3;
        }
        else if ($scope.point1>=60) 
        {
          $scope.grade1 = "C";
          $scope.score = 2;
        }
        else if ($scope.point1>50) 
        {
          $scope.grade1 = "D";
          $scope.score = 1;
        }
       else if ($scope.point1<50) 
        {
          $scope.grade1 = "F";
          $scope.score = 0;
        }

        if ($scope.point2>=80)
       {
        $scope.grade2 = "A";
        $scope.score2 =4;
      }
      else if ($scope.point2>=70) 
        {
          $scope.grade2 = "B";
          $scope.score2 = 3;
        }
        else if ($scope.point2>=60) 
        {
          $scope.grade2 = "C";
          $scope.score2 = 2;
        }
        else if ($scope.point2>=50) 
        {
          $scope.grade2 = "D";
          $scope.score2 = 1;
        }
        else if ($scope.point2<50) 
        {
          $scope.grade2 = "F";
          $scope.score2 = 0;
        }

         if ($scope.point3>=80)
       {
        $scope.grade3 = "A";
        $scope.score3 =4;
      }
      else if ($scope.point3>=70) 
        {
          $scope.grade3 = "B";
          $scope.score3 = 3;
        }
        else if ($scope.point3>=60) 
        {
          $scope.grade3 = "C";
          $scope.score3 = 2;
        }
        else if ($scope.point3>=50) 
        {
          $scope.grade3 = "D";
          $scope.score3 = 1;
        }
        else if ($scope.point3<50) 
        {
          $scope.grade3 = "F";
          $scope.score3 = 0;
        }


        $scope.result1 = $scope.credit1 * $scope.score;
        $scope.result2 = $scope.credit2 * $scope.score2;
        $scope.result3 = $scope.credit3 * $scope.score3;

        $scope.sumCre = $scope.credit1*1 + $scope.credit2*1 + $scope.credit3*1;
        
        $scope.sum =($scope.result1+$scope.result2+$scope.result3)/$scope.sumCre;

     }
     
}]);


   


   



   
