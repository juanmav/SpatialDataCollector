'use strict';

/**
 * @ngdoc directive
 * @name suriMovilNgApp.directive:sngImage.js
 * @description
 * # sngImage.js
 */
var app = angular.module('suriMovilNgApp');
app.directive('sngImage', function () {
  return {
    templateUrl: 'views/sng-image.html',
    restrict: 'E',
    scope: {
      ngModel : '='
    },
    controller: 'SngImageCtrl'
  };
});

app.controller('SngImageCtrl', function($scope, $cordovaCamera){

  $scope.getPicture = function(){

    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
      correctOrientation:true
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      $scope.ngModel = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      // error
    });
  }
});
