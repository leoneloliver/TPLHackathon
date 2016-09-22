/* global angular, document, window */
'use strict';

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout) {
    // Form data for the login modal
    $scope.loginData = {};
    $scope.isExpanded = false;
    $scope.hasHeaderFabLeft = false;
    $scope.hasHeaderFabRight = false;

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

    ////////////////////////////////////////
    // Layout Methods
    ////////////////////////////////////////

    $scope.hideNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
    };

    $scope.showNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
    };

    $scope.noHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }
    };

    $scope.setExpanded = function(bool) {
        $scope.isExpanded = bool;
    };

    $scope.setHeaderFab = function(location) {
        var hasHeaderFabLeft = false;
        var hasHeaderFabRight = false;

        switch (location) {
            case 'left':
                hasHeaderFabLeft = true;
                break;
            case 'right':
                hasHeaderFabRight = true;
                break;
        }

        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
        $scope.hasHeaderFabRight = hasHeaderFabRight;
    };

    $scope.hasHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (!content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }

    };

    $scope.hideHeader = function() {
        $scope.hideNavBar();
        $scope.noHeader();
    };

    $scope.showHeader = function() {
        $scope.showNavBar();
        $scope.hasHeader();
    };

    $scope.clearFabs = function() {
        var fabs = document.getElementsByClassName('button-fab');
        if (fabs.length && fabs.length > 1) {
            fabs[0].remove();
        }
    };
})

.controller('LoginCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk) {
    $scope.$parent.clearFabs();
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();

    // validating login
    $scope.login = function () {
        var inputs = document.getElementsByTagName('input');

        for(var i = 0; i < inputs.length; i++) {
            if(inputs[i].type.toLowerCase() == 'text') {
                 //alert(inputs[i].value);
                 var login = inputs[i].value;
                
            }
            if(inputs[i].type.toLowerCase() == 'password') {
                 //alert(inputs[i].value);
                 var password = inputs[i].value;
                
            }

        }
        // demo version login and password just to simulate
        if(login=="1234" && password =='1234'){
            window.location = "#/app/houselist";
        }else{
            //alert('No match for User and/or Password!');
            alert('It is a demo version!');
            window.location = "#/app/houselist";
        }
    }



})


.controller('SearchCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk) {
    $scope.$parent.clearFabs();
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();
})

.controller('FriendsCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('left');

    // Delay expansion
    $timeout(function() {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
    }, 300);

    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('ProfileCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {

    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);


    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('ThankCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {

    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);


    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('RegisterCtrl', ['$scope', '$http', '$sce' , '$stateParams', '$timeout', 'ionicMaterialMotion', 'ionicMaterialInk', function($scope,$http, $sce, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
  $scope.to_trusted = function(html_code) {
    return $sce.trustAsHtml(html_code);
  }
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();


}])

.controller('EligibilityCtrl', function($scope, $http, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {

    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
    

    

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);


    

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('QuestionCtrl', function($scope, $http, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {

    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
    

    

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);


    

    // Set Ink
    ionicMaterialInk.displayEffect();
})


.controller('HouseCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    $scope.ok = function (idh,img,titles) {
       
       

       if(idh == 1){
            localStorage.title1 = titles;
            localStorage.image1 = img;
            localStorage.idh1 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 3){
            localStorage.title2 = titles;
            localStorage.image2 = img;
            localStorage.idh2 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 4){
            localStorage.title3 = titles;
            localStorage.image3 = img;
            localStorage.idh3 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 6){
            localStorage.title4 = titles;
            localStorage.image4 = img;
            localStorage.idh4 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 7){
            localStorage.title5 = titles;
            localStorage.image5 = img;
            localStorage.idh5 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }
      
    };

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('House1Ctrl', function($scope, $http, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
    $http.get("/library/json/house1.json")
      .success(function (response) 
      {
        $scope.houses = response;
      })
      .error(function(data) {
        alert("ERROR");
    });
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);
    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);
    $scope.ok = function (idh,img,titles) {
        
        if(idh == 1){
            localStorage.title1 = titles;
            localStorage.image1 = img;
            localStorage.idh1 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 3){
            localStorage.title2 = titles;
            localStorage.image2 = img;
            localStorage.idh2 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 4){
            localStorage.title3 = titles;
            localStorage.image3 = img;
            localStorage.idh3 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 6){
            localStorage.title4 = titles;
            localStorage.image4 = img;
            localStorage.idh4 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 7){
            localStorage.title5 = titles;
            localStorage.image5 = img;
            localStorage.idh5 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 8){
            localStorage.title6 = titles;
            localStorage.image6 = img;
            localStorage.idh6 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       
       }else if(idh == 9){
            localStorage.title7 = titles;
            localStorage.image7 = img;
            localStorage.idh7 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 10){
            localStorage.title8 = titles;
            localStorage.image8 = img;
            localStorage.idh8 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 11){
            localStorage.title9 = titles;
            localStorage.image9 = img;
            localStorage.idh9 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 12){
            localStorage.title10 = titles;
            localStorage.image10 = img;
            localStorage.idh10 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }     
    };
    // Set Ink
    ionicMaterialInk.displayEffect();
})



.controller('House3Ctrl', function($scope, $http, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
    $http.get("/library/json/house3.json")
      .success(function (response) 
      {
        $scope.houses = response;
      })
      .error(function(data) {
        alert("ERROR");
    });
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);
    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);
    $scope.ok = function (idh,img,titles) {
       if(idh == 1){
            localStorage.title1 = titles;
            localStorage.image1 = img;
            localStorage.idh1 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 3){
            localStorage.title2 = titles;
            localStorage.image2 = img;
            localStorage.idh2 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 4){
            localStorage.title3 = titles;
            localStorage.image3 = img;
            localStorage.idh3 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 6){
            localStorage.title4 = titles;
            localStorage.image4 = img;
            localStorage.idh4 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 7){
            localStorage.title5 = titles;
            localStorage.image5 = img;
            localStorage.idh5 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 8){
            localStorage.title6 = titles;
            localStorage.image6 = img;
            localStorage.idh6 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       
       }else if(idh == 9){
            localStorage.title7 = titles;
            localStorage.image7 = img;
            localStorage.idh7 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 10){
            localStorage.title8 = titles;
            localStorage.image8 = img;
            localStorage.idh8 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 11){
            localStorage.title9 = titles;
            localStorage.image9 = img;
            localStorage.idh9 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 12){
            localStorage.title10 = titles;
            localStorage.image10 = img;
            localStorage.idh10 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }     
    };
    // Set Ink
    ionicMaterialInk.displayEffect();
})


.controller('House4Ctrl', function($scope, $http, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
    $http.get("/library/json/house4.json")
      .success(function (response) 
      {
        $scope.houses = response;
      })
      .error(function(data) {
        alert("ERROR");
    });
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);
    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);
    $scope.ok = function (idh,img,titles) {
       if(idh == 1){
            localStorage.title1 = titles;
            localStorage.image1 = img;
            localStorage.idh1 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 3){
            localStorage.title2 = titles;
            localStorage.image2 = img;
            localStorage.idh2 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 4){
            localStorage.title3 = titles;
            localStorage.image3 = img;
            localStorage.idh3 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 6){
            localStorage.title4 = titles;
            localStorage.image4 = img;
            localStorage.idh4 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 7){
            localStorage.title5 = titles;
            localStorage.image5 = img;
            localStorage.idh5 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 8){
            localStorage.title6 = titles;
            localStorage.image6 = img;
            localStorage.idh6 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       
       }else if(idh == 9){
            localStorage.title7 = titles;
            localStorage.image7 = img;
            localStorage.idh7 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 10){
            localStorage.title8 = titles;
            localStorage.image8 = img;
            localStorage.idh8 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 11){
            localStorage.title9 = titles;
            localStorage.image9 = img;
            localStorage.idh9 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 12){
            localStorage.title10 = titles;
            localStorage.image10 = img;
            localStorage.idh10 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }     
    };
    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('House6Ctrl', function($scope, $http, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
    $http.get("/library/json/house6.json")
      .success(function (response) 
      {
        $scope.houses = response;
      })
      .error(function(data) {
        alert("ERROR");
    });
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);
    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);
    $scope.ok = function (idh,img,titles) {
       if(idh == 1){
            localStorage.title1 = titles;
            localStorage.image1 = img;
            localStorage.idh1 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 3){
            localStorage.title2 = titles;
            localStorage.image2 = img;
            localStorage.idh2 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 4){
            localStorage.title3 = titles;
            localStorage.image3 = img;
            localStorage.idh3 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 6){
            localStorage.title4 = titles;
            localStorage.image4 = img;
            localStorage.idh4 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 7){
            localStorage.title5 = titles;
            localStorage.image5 = img;
            localStorage.idh5 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 8){
            localStorage.title6 = titles;
            localStorage.image6 = img;
            localStorage.idh6 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       
       }else if(idh == 9){
            localStorage.title7 = titles;
            localStorage.image7 = img;
            localStorage.idh7 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 10){
            localStorage.title8 = titles;
            localStorage.image8 = img;
            localStorage.idh8 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 11){
            localStorage.title9 = titles;
            localStorage.image9 = img;
            localStorage.idh9 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 12){
            localStorage.title10 = titles;
            localStorage.image10 = img;
            localStorage.idh10 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }     
    };
    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('House7Ctrl', function($scope, $http, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
    $http.get("/library/json/house7.json")
      .success(function (response) 
      {
        $scope.houses = response;
      })
      .error(function(data) {
        alert("ERROR");
    });
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);
    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);
    $scope.ok = function (idh,img,titles) {
       if(idh == 1){
            localStorage.title1 = titles;
            localStorage.image1 = img;
            localStorage.idh1 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 3){
            localStorage.title2 = titles;
            localStorage.image2 = img;
            localStorage.idh2 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 4){
            localStorage.title3 = titles;
            localStorage.image3 = img;
            localStorage.idh3 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 6){
            localStorage.title4 = titles;
            localStorage.image4 = img;
            localStorage.idh4 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 7){
            localStorage.title5 = titles;
            localStorage.image5 = img;
            localStorage.idh5 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 8){
            localStorage.title6 = titles;
            localStorage.image6 = img;
            localStorage.idh6 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       
       }else if(idh == 9){
            localStorage.title7 = titles;
            localStorage.image7 = img;
            localStorage.idh7 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 10){
            localStorage.title8 = titles;
            localStorage.image8 = img;
            localStorage.idh8 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 11){
            localStorage.title9 = titles;
            localStorage.image9 = img;
            localStorage.idh9 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 12){
            localStorage.title10 = titles;
            localStorage.image10 = img;
            localStorage.idh10 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }     
    };
    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('House8Ctrl', function($scope, $http, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
    $http.get("/library/json/house8.json")
      .success(function (response) 
      {
        $scope.houses = response;
      })
      .error(function(data) {
        alert("ERROR");
    });
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);
    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);
    $scope.ok = function (idh,img,titles) {
       if(idh == 1){
            localStorage.title1 = titles;
            localStorage.image1 = img;
            localStorage.idh1 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 3){
            localStorage.title2 = titles;
            localStorage.image2 = img;
            localStorage.idh2 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 4){
            localStorage.title3 = titles;
            localStorage.image3 = img;
            localStorage.idh3 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 6){
            localStorage.title4 = titles;
            localStorage.image4 = img;
            localStorage.idh4 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 7){
            localStorage.title5 = titles;
            localStorage.image5 = img;
            localStorage.idh5 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 8){
            localStorage.title6 = titles;
            localStorage.image6 = img;
            localStorage.idh6 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       
       }else if(idh == 9){
            localStorage.title7 = titles;
            localStorage.image7 = img;
            localStorage.idh7 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 10){
            localStorage.title8 = titles;
            localStorage.image8 = img;
            localStorage.idh8 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 11){
            localStorage.title9 = titles;
            localStorage.image9 = img;
            localStorage.idh9 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 12){
            localStorage.title10 = titles;
            localStorage.image10 = img;
            localStorage.idh10 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }     
    };
    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('House9Ctrl', function($scope, $http, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
    $http.get("/library/json/house9.json")
      .success(function (response) 
      {
        $scope.houses = response;
      })
      .error(function(data) {
        alert("ERROR");
    });
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);
    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);
    $scope.ok = function (idh,img,titles) {
       if(idh == 1){
            localStorage.title1 = titles;
            localStorage.image1 = img;
            localStorage.idh1 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 3){
            localStorage.title2 = titles;
            localStorage.image2 = img;
            localStorage.idh2 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 4){
            localStorage.title3 = titles;
            localStorage.image3 = img;
            localStorage.idh3 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 6){
            localStorage.title4 = titles;
            localStorage.image4 = img;
            localStorage.idh4 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 7){
            localStorage.title5 = titles;
            localStorage.image5 = img;
            localStorage.idh5 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 8){
            localStorage.title6 = titles;
            localStorage.image6 = img;
            localStorage.idh6 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       
       }else if(idh == 9){
            localStorage.title7 = titles;
            localStorage.image7 = img;
            localStorage.idh7 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 10){
            localStorage.title8 = titles;
            localStorage.image8 = img;
            localStorage.idh8 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 11){
            localStorage.title9 = titles;
            localStorage.image9 = img;
            localStorage.idh9 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 12){
            localStorage.title10 = titles;
            localStorage.image10 = img;
            localStorage.idh10 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }     
    };
    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('House10Ctrl', function($scope, $http, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
    $http.get("/library/json/house10.json")
      .success(function (response) 
      {
        $scope.houses = response;
      })
      .error(function(data) {
        alert("ERROR");
    });
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);
    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);
    $scope.ok = function (idh,img,titles) {
       if(idh == 1){
            localStorage.title1 = titles;
            localStorage.image1 = img;
            localStorage.idh1 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 3){
            localStorage.title2 = titles;
            localStorage.image2 = img;
            localStorage.idh2 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 4){
            localStorage.title3 = titles;
            localStorage.image3 = img;
            localStorage.idh3 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 6){
            localStorage.title4 = titles;
            localStorage.image4 = img;
            localStorage.idh4 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 7){
            localStorage.title5 = titles;
            localStorage.image5 = img;
            localStorage.idh5 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 8){
            localStorage.title6 = titles;
            localStorage.image6 = img;
            localStorage.idh6 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       
       }else if(idh == 9){
            localStorage.title7 = titles;
            localStorage.image7 = img;
            localStorage.idh7 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 10){
            localStorage.title8 = titles;
            localStorage.image8 = img;
            localStorage.idh8 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 11){
            localStorage.title9 = titles;
            localStorage.image9 = img;
            localStorage.idh9 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 12){
            localStorage.title10 = titles;
            localStorage.image10 = img;
            localStorage.idh10 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }     
    };
    // Set Ink
    ionicMaterialInk.displayEffect();
})
.controller('House11Ctrl', function($scope, $http, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
    $http.get("/library/json/house11.json")
      .success(function (response) 
      {
        $scope.houses = response;
      })
      .error(function(data) {
        alert("ERROR");
    });
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);
    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);
    $scope.ok = function (idh,img,titles) {
       if(idh == 1){
            localStorage.title1 = titles;
            localStorage.image1 = img;
            localStorage.idh1 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 3){
            localStorage.title2 = titles;
            localStorage.image2 = img;
            localStorage.idh2 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 4){
            localStorage.title3 = titles;
            localStorage.image3 = img;
            localStorage.idh3 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 6){
            localStorage.title4 = titles;
            localStorage.image4 = img;
            localStorage.idh4 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 7){
            localStorage.title5 = titles;
            localStorage.image5 = img;
            localStorage.idh5 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 8){
            localStorage.title6 = titles;
            localStorage.image6 = img;
            localStorage.idh6 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       
       }else if(idh == 9){
            localStorage.title7 = titles;
            localStorage.image7 = img;
            localStorage.idh7 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 10){
            localStorage.title8 = titles;
            localStorage.image8 = img;
            localStorage.idh8 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 11){
            localStorage.title9 = titles;
            localStorage.image9 = img;
            localStorage.idh9 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 12){
            localStorage.title10 = titles;
            localStorage.image10 = img;
            localStorage.idh10 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }     
    };
    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('House12Ctrl', function($scope, $http, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
    $http.get("/library/json/house12.json")
      .success(function (response) 
      {
        $scope.houses = response;
      })
      .error(function(data) {
        alert("ERROR");
    });
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);
    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);
    $scope.ok = function (idh,img,titles) {
       if(idh == 1){
            localStorage.title1 = titles;
            localStorage.image1 = img;
            localStorage.idh1 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 3){
            localStorage.title2 = titles;
            localStorage.image2 = img;
            localStorage.idh2 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 4){
            localStorage.title3 = titles;
            localStorage.image3 = img;
            localStorage.idh3 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 6){
            localStorage.title4 = titles;
            localStorage.image4 = img;
            localStorage.idh4 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 7){
            localStorage.title5 = titles;
            localStorage.image5 = img;
            localStorage.idh5 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 8){
            localStorage.title6 = titles;
            localStorage.image6 = img;
            localStorage.idh6 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       
       }else if(idh == 9){
            localStorage.title7 = titles;
            localStorage.image7 = img;
            localStorage.idh7 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 10){
            localStorage.title8 = titles;
            localStorage.image8 = img;
            localStorage.idh8 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 11){
            localStorage.title9 = titles;
            localStorage.image9 = img;
            localStorage.idh9 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }else if(idh == 12){
            localStorage.title10 = titles;
            localStorage.image10 = img;
            localStorage.idh10 = idh;
            alert(titles+' '+'added to your wishlist');//hide dialog.
       }     
    };
    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('ActivityCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab('right');

    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();
})

.controller('GalleryCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });

})

.controller('HouselistCtrl', function($scope, $http, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {

    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
    
    $http.get("/library/json/houselist.json")
      .success(function (response) 
      {
        $scope.houses = response;
      })
      .error(function(data) {
        alert("ERROR");
    });

    

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);


    

    // Set Ink
    ionicMaterialInk.displayEffect();
})


.controller('HousemapCtrl', function($scope, $http, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {

    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
    
    $http.get("/library/json/houselist.json")
      .success(function (response) 
      {
        $scope.houses = response;
      })
      .error(function(data) {
        alert("ERROR");
    });


    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
        
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);
    
    

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('ModalSearchCtrl', function($scope, $ionicModal) {
  $scope.contact = {
    day: 'Friday, Sep 12, 2015',
    hour: '11:00 AM'
  }


  $ionicModal.fromTemplateUrl('modal-search.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
  })  

  $scope.openModal = function() {
    $scope.modal.show()
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

})

.controller('ModalStartCtrl', function($scope, $ionicModal) {
  $scope.contact = {
    day: 'Friday, Sep 12, 2015',
    hour: '11:00 AM'
  }


  $ionicModal.fromTemplateUrl('modal-start.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
  })  

  $scope.openModal = function() {
    $scope.modal.show()
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

})

.controller('ModalWishlistCtrl', function($scope, $ionicModal) {
  $scope.mylist = {
    title1: localStorage.title1,
    img1: localStorage.image1,
    title2: localStorage.title2,
    img2: localStorage.image2,
    title3: localStorage.title3,
    img3: localStorage.image3,
    title4: localStorage.title4,
    img4: localStorage.image4,
    title5: localStorage.title5,
    img5: localStorage.image5,
    title6: localStorage.title6,
    img6: localStorage.image6,
    title7: localStorage.title7,
    img7: localStorage.image7,
    title8: localStorage.title8,
    img8: localStorage.image8,
    title9: localStorage.title9,
    img9: localStorage.image9,
    title10: localStorage.title10,
    img10: localStorage.image10

    
  }


  $ionicModal.fromTemplateUrl('modal-wish.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
  })  

  $scope.openModal = function() {
    $scope.modal.show()
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

  $scope.del = function(idh){
    localStorage.removeItem("idh"+idh);
    localStorage.removeItem("image"+idh);
    localStorage.removeItem("title"+idh);
    var link = document.getElementById('w'+idh);
    link.style.display = 'none';


  };

})




.controller('Zone1Ctrl', function($scope, $http, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
    $scope.Math = window.Math;
    $http.get("/library/json/zone1.json")
      .success(function (response) 
      {
        $scope.zones = response;
      })
      .error(function(data) {
        alert("ERROR");
    });
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);
    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);
    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('Zone2Ctrl', function($scope, $http, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
    $scope.Math = window.Math;
    $http.get("/library/json/zone2.json")
      .success(function (response) 
      {
        $scope.zones = response;
      })
      .error(function(data) {
        alert("ERROR");
    });
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);
    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);
    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('Zone3Ctrl', function($scope, $http, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
    $scope.Math = window.Math;
    $http.get("/library/json/zone3.json")
      .success(function (response) 
      {
        $scope.zones = response;
      })
      .error(function(data) {
        alert("ERROR");
    });
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);
    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);
    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('Zone4Ctrl', function($scope, $http, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
    $scope.Math = window.Math;
    $http.get("/library/json/zone4.json")
      .success(function (response) 
      {
        $scope.zones = response;
      })
      .error(function(data) {
        alert("ERROR");
    });
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);
    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);
    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('Zone5Ctrl', function($scope, $http, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
    $scope.Math = window.Math;
    $http.get("/library/json/zone5.json")
      .success(function (response) 
      {
        $scope.zones = response;
      })
      .error(function(data) {
        alert("ERROR");
    });
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);
    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);
    // Set Ink
    ionicMaterialInk.displayEffect();
})





.controller('ZonesCtrl', function($scope, $http, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {

    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    
    $http.get("/library/json/zones.json")
      .success(function (response) 
      {
        $scope.zones = response;
      })
      .error(function(data) {
        alert("ERROR");
    });

    

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);


    

    // Set Ink
    ionicMaterialInk.displayEffect();
})



;
