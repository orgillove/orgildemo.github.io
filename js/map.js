
var map;
function initialize() {
       var fenway = {lat: -37.810042, lng: 144.964272};
       map = new google.maps.Map(document.getElementById('map'), {
         center: fenway,
         zoom: 12
       });
       var panorama = new google.maps.StreetViewPanorama(
           document.getElementById('pano'), {
             position: fenway,
            addressControl: false,
            
             pov: {
               heading: 34,
               pitch: 10
             }
           });
       map.setStreetView(panorama);
       setMarkers(map);
     }

//marker icon

     var landscapes = [
       ['State_Library landscape', -37.810042, 144.964272, 4],
       ['Melbourne_Star landscape', -37.811829, 144.937471, 3],
       ['Luna_Park landscape', -37.867322, 144.976824, 2],
       ['Williamstown landscape', -37.862134, 144.904603, 1]
     ];

     function setMarkers(map) {
       // Adds markers to the map.

       // Marker sizes are expressed as a Size of X,Y where the origin of the image
       // (0,0) is located in the top left of the image.

       // Origins, anchor positions and coordinates of the marker increase in the X
       // direction to the right and in the Y direction down.
       var image = new Array();
       image[0] = {

         url: '../image/icon_spade.png',
          // This marker is 20 pixels wide by 32 pixels high.
          size: new google.maps.Size(51, 57),
          // The origin for this image is (0, 0).
          origin: new google.maps.Point(0, 0),
          // The anchor for this image is the base of the flagpole at (0, 32).
          anchor: new google.maps.Point(0, 57)

       };

       image[1]={
         url: '../image/icon_diamond.png',
           // This marker is 20 pixels wide by 32 pixels high.
           size: new google.maps.Size(51, 52),
           // The origin for this image is (0, 0).
           origin: new google.maps.Point(0, 0),
           // The anchor for this image is the base of the flagpole at (0, 32).
           anchor: new google.maps.Point(0, 52)
       }

       image[2]={
           url: '../image/icon_clover.png',
           // This marker is 20 pixels wide by 32 pixels high.
           size: new google.maps.Size(51, 52),
           // The origin for this image is (0, 0).
           origin: new google.maps.Point(0, 0),
           // The anchor for this image is the base of the flagpole at (0, 32).
           anchor: new google.maps.Point(0, 52)
       }

       image[3]={
           url: '../image/icon_heart.png',
           // This marker is 20 pixels wide by 32 pixels high.
           size: new google.maps.Size(51, 76),
           // The origin for this image is (0, 0).
           origin: new google.maps.Point(0, 0),
           // The anchor for this image is the base of the flagpole at (0, 32).
           anchor: new google.maps.Point(0, 76)
       }

       for (var i = 0; i < landscapes.length; i++) {
         var landscape = landscapes[i];
         var marker = new google.maps.Marker({
           position: {lat: landscape[1], lng: landscape[2]},
           map: map,
           // icon: image[i],

           icon: image[i],
           title: landscape[0],
           zIndex: landscape[3]
         });
       }
     }
