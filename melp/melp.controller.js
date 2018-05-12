angular.
  module('restaurantList',[]).
    controller('restaurantController',['$scope', '$http', function($scope, $http) {
      var self = this;
      $scope.orderProp = 'id';

      $scope.ratingSlide = 1;
      $http.get('https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json').then(function(response) {
        $scope.restaurants = response.data;
        /*for (restaurant in $scope.restaurants) {
           var lat =  restaurant.location.lat;
           var lng =  restaurant.location.lng;
           // You need to set markers according to google api instruction
           // you don't need to learn ngMap, but you need to learn google map api v3
           // https://developers.google.com/maps/documentation/javascript/markers
           var latlng = new google.maps.LatLng(lat, lng);
           markers[i].setPosition(latlng);
           markers[i].setMap($scope.map);
       }*/
      });

      $scope.reverse = true;

      $scope.sortBy = function(propertyName) {
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
        console.log("hola");
      };

      $scope.getNumber = function(num) {
        return new Array(num);
    }

      $scope.marcador = function(lat, lng){
        console.log(lat);
        $scope.marker.coords.latitude = lat;
        $scope.marker.coords.longitude = lng;
        $scope.map.center.latitude = lat;
        $scope.map.center.longitude = lng;
      }


        $scope.map = {
    		center: {
    			latitude: 19.43790427699499,
    			longitude: -99.12865767750226
    		},
    		zoom: 14,
    		options : {
    			scrollwheel: false,
          zoomControl: true,
          clickableIcons: true
    		},
        events:{
          drag: function() {
            $scope.marker.coords.latitude = $scope.map.center.latitude;
            $scope.marker.coords.longitude = $scope.map.center.longitude;
         }
        },
    		control: {}
    	};
    	$scope.marker = {
    		id: 0,
    		coords: {
    			latitude: 19.43790427699499,
    			longitude: -99.12865767750226
    		},
    		options: {
    			draggable: true
    		}
    	};

      $scope.circles = [
            {
                id: 1,
                center: {
                    latitude: 44,
                    longitude: -108
                },
                radius: 500,
                stroke: {
                    color: '#08B21F',
                    weight: 2,
                    opacity: 1
                },
                fill: {
                    color: '#08B21F',
                    opacity: 0.5
                },
                geodesic: true, // optional: defaults to false
                draggable: true, // optional: defaults to false
                clickable: true, // optional: defaults to true
                editable: true, // optional: defaults to false
                visible: true, // optional: defaults to true
                control: {}
            }
        ];

    }]);
