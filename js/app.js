// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ionic-material', 'ionMdInput'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */

    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.activity', {
        url: '/activity',
        views: {
            'menuContent': {
                templateUrl: 'templates/activity.html',
                controller: 'ActivityCtrl'
            },
            'fabContent': {
                template: '<button id="fab-activity" class="button button-fab button-fab-top-right expanded button-energized-900 flap"><i class="icon ion-paper-airplane"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 200);
                }
            }
        }
    })

    .state('app.friends', {
        url: '/friends',
        views: {
            'menuContent': {
                templateUrl: 'templates/friends.html',
                controller: 'FriendsCtrl'
            },
            'fabContent': {
                template: '<button id="fab-friends" class="button button-fab button-fab-top-left expanded button-energized-900 spin"><i class="icon ion-chatbubbles"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-friends').classList.toggle('on');
                    }, 900);
                }
            }
        }
    })

    .state('app.gallery', {
        url: '/gallery',
        views: {
            'menuContent': {
                templateUrl: 'templates/gallery.html',
                controller: 'GalleryCtrl'
            },
            'fabContent': {
                template: '<button id="fab-gallery" class="button button-fab button-fab-top-right expanded button-energized-900 drop"><i class="icon ion-heart"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-gallery').classList.toggle('on');
                    }, 600);
                }
            }
        }
    })

    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

    

    .state('app.search', {
        url: '/search',
        views: {
            'menuContent': {
                templateUrl: 'templates/search.html',
                controller: 'SearchCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

    .state('app.profile', {
        url: '/profile',
        views: {
            'menuContent': {
                templateUrl: 'templates/profile.html',
                controller: 'ProfileCtrl'
            },
            'fabContent': {
                template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-balanced"><i class="icon ion-ios-chatbubble"></i></button>',
                controller: function ($timeout) {
                    /*$timeout(function () {
                        document.getElementById('fab-profile').classList.toggle('on');
                    }, 800);*/
                }
            }
        }
    })

    .state('app.thank', {
        url: '/thank',
        views: {
            'menuContent': {
                templateUrl: 'templates/thank.html',
                controller: 'ThankCtrl'
            },
            'fabContent': {
                template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-balanced"><i class="icon ion-ios-chatbubble"></i></button>',
                controller: function ($timeout) {
                    /*$timeout(function () {
                        document.getElementById('fab-profile').classList.toggle('on');
                    }, 800);*/
                }
            }
        }
    })

    .state('app.house1', {
        url: '/house1',
        views: {
            'menuContent': {
                templateUrl: 'templates/housedetail.html',
                controller: 'House1Ctrl'
            },
            'fabContent': {
                template: '',
                controller: function ($timeout) {
                    /*$timeout(function () {
                        document.getElementById('fab-profile').classList.toggle('on');
                    }, 800);*/
                }
            }
        }
    })
    .state('app.house3', {
        url: '/house3',
        views: {
            'menuContent': {
                templateUrl: 'templates/housedetail.html',
                controller: 'House3Ctrl'
            },
            'fabContent': {
                template: '',
                // template: '<button id="fab-profile" class="button button-fab button-fab-bottom-left button-energized-900"><i class="icon ion-plus"></i></button>',
                controller: function ($timeout) {
                    /*$timeout(function () {
                        document.getElementById('fab-profile').classList.toggle('on');
                    }, 800);*/
                }
            }
        }
    })
    .state('app.house4', {
        url: '/house4',
        views: {
            'menuContent': {
                templateUrl: 'templates/housedetail.html',
                controller: 'House4Ctrl'
            },
            'fabContent': {
                template: '',
                controller: function ($timeout) {
                    /*$timeout(function () {
                        document.getElementById('fab-profile').classList.toggle('on');
                    }, 800);*/
                }
            }
        }
    })
    .state('app.house6', {
        url: '/house6',
        views: {
            'menuContent': {
                templateUrl: 'templates/housedetail.html',
                controller: 'House6Ctrl'
            },
            'fabContent': {
                template: '',
                controller: function ($timeout) {
                    /*$timeout(function () {
                        document.getElementById('fab-profile').classList.toggle('on');
                    }, 800);*/
                }
            }
        }
    })
    .state('app.house7', {
        url: '/house7',
        views: {
            'menuContent': {
                templateUrl: 'templates/housedetail.html',
                controller: 'House7Ctrl'
            },
            'fabContent': {
                template: '',
                controller: function ($timeout) {
                    /*$timeout(function () {
                        document.getElementById('fab-profile').classList.toggle('on');
                    }, 800);*/
                }
            }
        }
    })
    .state('app.house8', {
        url: '/house8',
        views: {
            'menuContent': {
                templateUrl: 'templates/housedetail.html',
                controller: 'House8Ctrl'
            },
            'fabContent': {
                template: '',
                controller: function ($timeout) {
                    /*$timeout(function () {
                        document.getElementById('fab-profile').classList.toggle('on');
                    }, 800);*/
                }
            }
        }
    })
    .state('app.house9', {
        url: '/house9',
        views: {
            'menuContent': {
                templateUrl: 'templates/housedetail.html',
                controller: 'House9Ctrl'
            },
            'fabContent': {
                template: '',
                controller: function ($timeout) {
                    /*$timeout(function () {
                        document.getElementById('fab-profile').classList.toggle('on');
                    }, 800);*/
                }
            }
        }
    })
    .state('app.house10', {
        url: '/house10',
        views: {
            'menuContent': {
                templateUrl: 'templates/housedetail.html',
                controller: 'House10Ctrl'
            },
            'fabContent': {
                template: '',
                controller: function ($timeout) {
                    /*$timeout(function () {
                        document.getElementById('fab-profile').classList.toggle('on');
                    }, 800);*/
                }
            }
        }
    })
    .state('app.house11', {
        url: '/house11',
        views: {
            'menuContent': {
                templateUrl: 'templates/housedetail.html',
                controller: 'House11Ctrl'
            },
            'fabContent': {
                template: '',
                controller: function ($timeout) {
                    /*$timeout(function () {
                        document.getElementById('fab-profile').classList.toggle('on');
                    }, 800);*/
                }
            }
        }
    })
    .state('app.house12', {
        url: '/house12',
        views: {
            'menuContent': {
                templateUrl: 'templates/housedetail.html',
                controller: 'House12Ctrl'
            },
            'fabContent': {
                template: '',
                controller: function ($timeout) {
                    /*$timeout(function () {
                        document.getElementById('fab-profile').classList.toggle('on');
                    }, 800);*/
                }
            }
        }
    })

    .state('app.houselist', {
        url: '/houselist',
        views: {
            'menuContent': {
                templateUrl: 'templates/houselist.html',
                controller: 'HouselistCtrl'
            },
            'fabContent': {
                // template: '<button id="fab-profile" class="button button-fab button-fab-top-right button-energized-900 shadow"><i class="icon ion-plus"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-profile').classList.toggle('on');
                //     }, 800);
                // }
            }
        }
    })

     .state('app.housemap', {
        url: '/housemap',
        views: {
            'menuContent': {
                templateUrl: 'templates/housemap.html',
                controller: 'HousemapCtrl'
            },
            'fabContent': {
                // template: '<button id="fab-profile" class="button button-fab button-fab-top-right button-energized-900 shadow"><i class="icon ion-plus"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-profile').classList.toggle('on');
                //     }, 800);
                // }
            }
        }
    })

     .state('app.zone1', {
        url: '/zone1',
        views: {
            'menuContent': {
                templateUrl: 'templates/zone1.html',
                controller: 'Zone1Ctrl'
            },
            'fabContent': {
                // template: '<button id="fab-profile" class="button button-fab button-fab-top-right button-energized-900 shadow"><i class="icon ion-plus"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-profile').classList.toggle('on');
                //     }, 800);
                // }
            }
        }
    })

     .state('app.zone2', {
        url: '/zone2',
        views: {
            'menuContent': {
                templateUrl: 'templates/zone1.html',
                controller: 'Zone2Ctrl'
            },
            'fabContent': {
                // template: '<button id="fab-profile" class="button button-fab button-fab-top-right button-energized-900 shadow"><i class="icon ion-plus"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-profile').classList.toggle('on');
                //     }, 800);
                // }
            }
        }
    })


     .state('app.zone3', {
        url: '/zone3',
        views: {
            'menuContent': {
                templateUrl: 'templates/zone1.html',
                controller: 'Zone3Ctrl'
            },
            'fabContent': {
                // template: '<button id="fab-profile" class="button button-fab button-fab-top-right button-energized-900 shadow"><i class="icon ion-plus"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-profile').classList.toggle('on');
                //     }, 800);
                // }
            }
        }
    })


     .state('app.zone4', {
        url: '/zone4',
        views: {
            'menuContent': {
                templateUrl: 'templates/zone1.html',
                controller: 'Zone4Ctrl'
            },
            'fabContent': {
                // template: '<button id="fab-profile" class="button button-fab button-fab-top-right button-energized-900 shadow"><i class="icon ion-plus"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-profile').classList.toggle('on');
                //     }, 800);
                // }
            }
        }
    })

     .state('app.zone5', {
        url: '/zone5',
        views: {
            'menuContent': {
                templateUrl: 'templates/zone1.html',
                controller: 'Zone5Ctrl'
            },
            'fabContent': {
                // template: '<button id="fab-profile" class="button button-fab button-fab-top-right button-energized-900 shadow"><i class="icon ion-plus"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-profile').classList.toggle('on');
                //     }, 800);
                // }
            }
        }
    })

    .state('app.zones', {
        url: '/zones',
        views: {
            'menuContent': {
                templateUrl: 'templates/zones.html',
                controller: 'ZonesCtrl'
            },
            'fabContent': {
                // template: '<button id="fab-profile" class="button button-fab button-fab-top-right button-energized-900 shadow"><i class="icon ion-plus"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-profile').classList.toggle('on');
                //     }, 800);
                // }
            }
        }
    })

     .state('app.register', {
        url: '/register',
        views: {
            'menuContent': {
                templateUrl: 'templates/register.html',
                controller: 'RegisterCtrl'
            },
            'fabContent': {
                // template: '<button id="fab-profile" class="button button-fab button-fab-top-right button-energized-900 shadow"><i class="icon ion-plus"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-profile').classList.toggle('on');
                //     }, 800);
                // }
            }
        }
    })

     .state('app.eligibility', {
        url: '/eligibility',
        views: {
            'menuContent': {
                templateUrl: 'templates/eligibility.html',
                controller: 'EligibilityCtrl'
            },
            'fabContent': {
                // template: '<button id="fab-profile" class="button button-fab button-fab-top-right button-energized-900 shadow"><i class="icon ion-plus"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-profile').classList.toggle('on');
                //     }, 800);
                // }
            }
        }
    })

     .state('app.question', {
        url: '/question',
        views: {
            'menuContent': {
                templateUrl: 'templates/question.html',
                controller: 'QuestionCtrl'
            },
            'fabContent': {
                // template: '<button id="fab-profile" class="button button-fab button-fab-top-right button-energized-900 shadow"><i class="icon ion-plus"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-profile').classList.toggle('on');
                //     }, 800);
                // }
            }
        }
    })


    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');
});
