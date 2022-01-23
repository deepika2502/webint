var slider_waste;
var slider_travel;
var slider_electricity;
function reset_waste(){
    console.log(localStorage.getItem('waste_slider'),localStorage.getItem('travel_slider'));

        document.getElementById("disabledRange").value = localStorage.getItem('waste_slider') || 1;
        slider_waste = localStorage.getItem('waste_slider') || 1;
        document.getElementById("organic_slider_1").value=10;
        document.getElementById("glass_slider_1").value=10;
        document.getElementById("plastic_slider_1").value=10;
        document.getElementById("battery_slider_1").value=10;
        document.getElementById("clothes_slider_1").value=10;
        document.getElementById("aluminium_slider_1").value=10;

}

function reset_travel(){
    console.log(localStorage.getItem('waste_slider'),localStorage.getItem('travel_slider'));

    document.getElementById("disabledRange").value = localStorage.getItem('travel_slider') || 1;
    slider_travel = localStorage.getItem('travel_slider') || 1;
    document.getElementById("bike").value="";
    document.getElementById("train").value="";
    document.getElementById("car").value="";
    document.getElementById("taxi").value="";
    document.getElementById("walk").value="";
    document.getElementById("bus").value="";
}

function reset_electricity(){
    console.log(localStorage.getItem('waste_slider'),localStorage.getItem('travel_slider'));

        document.getElementById("disabledRange").value = localStorage.getItem('electricity_slider') || 1;
        slider_electricity = localStorage.getItem('electricity_slider') || 1;
        document.getElementById("led").value="";
        document.getElementById("bulb").value="";
        document.getElementById("heater").value="";
        document.getElementById("daylight").value="";
        document.getElementById("wash").value="";
        document.getElementById("dishwasher").value="";

}
function reset(){
    console.log(localStorage.getItem('waste_slider'),localStorage.getItem('travel_slider'), localStorage.getItem('electricity_slider'));
    var waste = localStorage.getItem('waste_slider') || 1;
    var electricity = localStorage.getItem('electricity_slider') || 1;
    var travel = localStorage.getItem('travel_slider') || 1;

    document.getElementById("waste_slider_1").value = waste;
    document.getElementById("travel_slider_1").value = travel;
    document.getElementById("electricity_slider_1").value = electricity;
    document.getElementById("disabledRange").value = (waste+travel+electricity);
    


}


function recycle(id){
    console.log('Clicked: ' + id)
    slider_waste = localStorage.getItem('waste_slider');
    switch (id) {
        case 'organic_1':
            var x = document.getElementById("organic_slider_1").value;
            document.getElementById("disabledRange").value=slider_waste - x;
            break;

        case 'organic_2':
            var x = document.getElementById("organic_slider_1").value;
            document.getElementById("disabledRange").value= parseInt(slider_waste)+ parseInt(x) ;
            break;    

        case 'plastic_1':
            var x = document.getElementById("plastic_slider_1").value;
            document.getElementById("disabledRange").value=slider_waste - x;
            break;
        case 'plastic_2':
            var x = document.getElementById("plastic_slider_1").value;
            document.getElementById("disabledRange").value = parseInt(slider_waste)+ parseInt(x);
            break;
        case 'battery_1':
            var x = document.getElementById("battery_slider_1").value;
            document.getElementById("disabledRange").value=slider_waste - x;
            break;
        case 'battery_2':
            var x = document.getElementById("battery_slider_1").value;
            document.getElementById("disabledRange").value=parseInt(slider_waste)+ parseInt(x);
            break;
        case 'glass_1':
            var x = document.getElementById("glass_slider_1").value;
            document.getElementById("disabledRange").value=slider_waste - x;
            break;
        case 'glass_2':
            var x = document.getElementById("glass_slider_1").value;
            document.getElementById("disabledRange").value=parseInt(slider_waste)+ parseInt(x);
            break;

        case 'clothes_1':
            var x = document.getElementById("clothes_slider_1").value;
            document.getElementById("disabledRange").value=slider_waste - x;
            break;
        case 'clothes_2':
            var x = document.getElementById("clothes_slider_1").value;
            document.getElementById("disabledRange").value=parseInt(slider_waste)+ parseInt(x);
            break;
        case 'aluminium_1':
            var x = document.getElementById("aluminium_slider_1").value;
            document.getElementById("disabledRange").value=slider_waste - x;
            break;
        case 'aluminium_2':
            var x = document.getElementById("aluminium_slider_1").value;
            document.getElementById("disabledRange").value=parseInt(slider_waste)+ parseInt(x);
            break;
        }
        localStorage.setItem('waste_slider',document.getElementById("disabledRange").value )

}

function travel(id){
    slider_travel = localStorage.getItem('travel_slider') || 1;
    switch (id) {
        case 'bus_b':
            var x = document.getElementById("bus").value;
            document.getElementById("disabledRange").value=parseInt(slider_travel)+ parseInt(x);
            break;

        case 'train_b':
            var x = document.getElementById("train").value;
            document.getElementById("disabledRange").value= parseInt(slider_travel)+ parseInt(x) ;
            break;    

        case 'walk_b':
            var x = document.getElementById("walk").value;
            document.getElementById("disabledRange").value=parseInt(slider_travel)+ parseInt(x);
            break;
        case 'bike_b':
            var x = document.getElementById("bike").value;
            document.getElementById("disabledRange").value = parseInt(slider_travel)+ parseInt(x);
            break;
        case 'car_b':
            var x = document.getElementById("car").value;
            document.getElementById("disabledRange").value=slider_travel - x;
            break;
        case 'taxi_b':
            var x = document.getElementById("taxi").value;
            document.getElementById("disabledRange").value=slider_travel - x;
            break;
    }
    localStorage.setItem('travel_slider',document.getElementById("disabledRange").value )
    

}


function electricity(id){
    slider_electricity = localStorage.getItem('electricity_slider') || 1;
    switch (id) {
        case 'daylight_b':
            var x = document.getElementById("daylight").value;
            document.getElementById("disabledRange").value=parseInt(slider_electricity)+ parseInt(x);
            break;

        case 'led_b':
            var x = document.getElementById("led").value;
            document.getElementById("disabledRange").value= parseInt(slider_electricity)+ parseInt(x) ;
            break;    

        case 'bulb_b':
            var x = document.getElementById("bulb").value;
            document.getElementById("disabledRange").value=slider_electricity - x;
            break;
        case 'wash_b':
            var x = document.getElementById("wash").value;
            document.getElementById("disabledRange").value = slider_electricity - x;
            break;
        case 'heater_b':
            var x = document.getElementById("heater").value;
            document.getElementById("disabledRange").value=slider_electricity - x;
            break;
        case 'dishwasher_b':
            var x = document.getElementById("dishwasher").value;
            document.getElementById("disabledRange").value=slider_electricity - x;
            break;
    }
    localStorage.setItem('electricity_slider',document.getElementById("disabledRange").value )
    

}
