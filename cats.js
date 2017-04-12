$(document).ready(function () {
 function initMap() {
        var uluru = {
            lat: parseInt($("#location2_1").val()),
            lng: parseInt($("#location2_2").val())
        };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
 } 

    
    $("#getlocation1").click(function() {
        
        initMap();
        
    });




});
