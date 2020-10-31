ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [59.3779,28.6081],
            zoom: 15
        });
        var myPlacemark = new ymaps.Placemark([59.3779,28.6081]);
         myMap.geoObjects.add(myPlacemark);
         myMap.controls.remove('zoomControl');
         myMap.controls.remove('trafficControl');
         myMap.controls.remove('typeSelector');
         myMap.controls.remove('rulerControl');
         myMap.controls.remove('searchControl');
         myMap.controls.remove('geolocationControl');
         myMap.controls.remove('routeButtonControl');
    }