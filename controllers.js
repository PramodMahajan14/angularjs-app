

        app.controller('load_info',function($scope,$http){
            $http.get('https://restcountries.eu/rest/v2/all').then(function (response){
                $scope.countrydata = response.data;
                 
            });
            $scope.last="All Country";
          $scope.headingdata="Find your Country...";
            $scope.selectedIndex = null;
            $scope.sel_con = null;
            $scope.selectcountry_info = function (x,index){
                $scope.selectedIndex = index;
                $scope.sel_con = x; 
             $scope.hidedata = true;
               $scope.showdata = true;
               $scope.searchbar=true;
            $scope. last="Country about";
            $scope.headingdata="Selected your country...";
            }
            $scope.goback = function(){
            $scope.showdata = false;
               $scope.hidedata = false;
               $scope.last="All Country "
               $scope.headingdata="Find your Country...";
               $scope.searchbar=false;
            }
            $scope.myaction=function(){
                $scope.showdata = true;
                $scope.hidedata = true;
           
          }
          
           
        })
        

        
