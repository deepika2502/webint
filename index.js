var slider_waste;
var slider_travel;
var slider_electricity;

//new
var totalMinE = 0;
var totalE = 50;
var totalMinW = 0;
var totalW = 50;
var totalMinT = 0;
var totalT = 50;

function reset_waste() {
  console.log(
    localStorage.getItem("waste_slider"),
    localStorage.getItem("travel_slider")
  );

  document.getElementById("disabledRange").value =localStorage.getItem("waste_slider") || 50;
  slider_waste = localStorage.getItem("waste_slider") || 1;
  document.getElementById("organic").value = "";
  document.getElementById("glass").value = "";
  document.getElementById("plastic").value = "";
  document.getElementById("battery").value = "";
  document.getElementById("clothes").value = "";
  document.getElementById("aluminium").value = "";
}

function reset_travel() {
  console.log(
    localStorage.getItem("waste_slider"),
    localStorage.getItem("travel_slider")
  );

  document.getElementById("disabledRange").value =
    localStorage.getItem("travel_slider") || 1;
  slider_travel = localStorage.getItem("travel_slider") || 1;
  document.getElementById("bike").value = "";
  document.getElementById("train").value = "";
  document.getElementById("car").value = "";
  document.getElementById("taxi").value = "";
  document.getElementById("walk").value = "";
  document.getElementById("bus").value = "";
}

function reset_electricity() {
  console.log(
    localStorage.getItem("waste_slider"),
    localStorage.getItem("travel_slider")
  );

  document.getElementById("disabledRange").value =
    localStorage.getItem("electricity_slider") || 1;
  slider_electricity = localStorage.getItem("electricity_slider") || 1;
  document.getElementById("led").value = "";
  document.getElementById("bulb").value = "";
  document.getElementById("heater").value = "";
  document.getElementById("daylight").value = "";
  document.getElementById("wash").value = "";
  document.getElementById("dishwasher").value = "";
}
function reset() {
  console.log(
    localStorage.getItem("waste_slider"),
    localStorage.getItem("travel_slider")
  );
  document.getElementById("waste_slider_1").value =
    localStorage.getItem("waste_slider") || 1;
  document.getElementById("travel_slider_1").value =
    localStorage.getItem("travel_slider") || 1;
  document.getElementById("electricity_slider_1").value =
    localStorage.getItem("electricity_slider") || 1;
  document.getElementById("disabledRange").value =
    parseInt(localStorage.getItem("electricity_slider")) / 30 +
      parseInt(localStorage.getItem("travel_slider")) / 30 +
      parseInt(localStorage.getItem("waste_slider")) / 30 || 1;
}

function recycle(id) {
  //new
  var x = 0;
  var y = 0;

  console.log("Clicked: " + id);
  slider_waste = localStorage.getItem("waste_slider");
  switch (id) {
    case "organic_1":
      y = parseInt(document.getElementById("organic").value);
      break;
    case "organic_2":
      x = parseInt(document.getElementById("organic").value);
      break;
    case "plastic_1":
      y = parseInt(document.getElementById("plastic").value);
      break;
    case "plastic_2":
      x = parseInt(document.getElementById("plastic").value);
      break;
    case "battery_1":
      y = parseInt(document.getElementById("battery").value);
      break;
    case "battery_2":
      x = parseInt(document.getElementById("battery").value);
      break;
    case "glass_1":
      y = parseInt(document.getElementById("glass").value);
      break;
    case "glass_2":
      x = parseInt(document.getElementById("glass").value);    
      break;
    case "clothes_1":
      y = parseInt(document.getElementById("clothes").value);       
      break;
    case "clothes_2":
      x = parseInt(document.getElementById("clothes").value);      
      break;
    case "aluminium_1":
      y = parseInt(document.getElementById("aluminium").value);
      break;
    case "aluminium_2":
      x = parseInt(document.getElementById("aluminium").value);
      break;
  }
  totalMinW = totalMinW + x + y;
  var percentGreen = (x / totalMinW) * 100;
  var percentCarbon = (y / totalMinW) * 100;
  totalW = totalW + (percentGreen - percentCarbon) / 2;

  totalW = totalW > 100 ? 100 : totalW;
  totalW = totalW < 0  ? 0: totalW;
  console.log(x, y, totalW);
  document.getElementById("disabledRange").value = totalW;
  localStorage.setItem(
    "waste_slider",
    document.getElementById("disabledRange").value
  );
}

function travel(id) {
  slider_travel = localStorage.getItem("travel_slider") || 1;
  //new
  var x = 0;
  var y = 0;

  switch (id) {
    case "bus_b":
      x = 2 * parseInt(document.getElementById("bus").value);
      
      break;

    case "train_b":
      x = 2 * parseInt(document.getElementById("train").value);
      
      break;

    case "walk_b":
      x = 5 * parseInt(document.getElementById("walk").value);
      
      break;
    case "bike_b":
      x = 3 * parseInt(document.getElementById("bike").value);
      
      break;
    case "car_b":
      y = parseInt(document.getElementById("car").value);
       
      break;
    case "taxi_b":
      y = parseInt(document.getElementById("taxi").value);
       
      break;
  }

  totalMinT = totalMinT + x + y;
  var percentGreen = (x / totalMinT) * 100;
  var percentCarbon = (y / totalMinT) * 100;
  totalT = totalT + (percentGreen - percentCarbon) / 2;

  totalT = totalT > 100 ?  100: totalT;
  totalT = totalT < 0 ? 0 :totalT;
  console.log(totalT); //the value to put on slider
  document.getElementById("disabledRange").value = totalT;

  localStorage.setItem(
    "travel_slider",
    document.getElementById("disabledRange").value
  );
}

function electricity(id) {
  slider_electricity = localStorage.getItem("electricity_slider") || 1;
  //new
  var x = 0;
  var y = 0;
  switch (id) {
    case "daylight_b":
      x = 3 * parseInt(document.getElementById("daylight").value);
       
      break;

    case "led_b":
      x = 3* parseInt(document.getElementById("led").value);
       
      break;

    case "bulb_b":
      y = parseInt(document.getElementById("bulb").value);
       
      break;
    case "wash_b":
      y = parseInt(document.getElementById("wash").value);
       
      break;
    case "heater_b":
      y = parseInt(document.getElementById("heater").value);
       
      break;
    case "dishwasher_b":
      y = parseInt(document.getElementById("dishwasher").value);
       
      break;
  }

  totalMinE = totalMinE + x + y;
  var percentGreen = (x / totalMinE) * 100;
  var percentCarbon = (y / totalMinE) * 100;
  totalE = totalE + (percentGreen - percentCarbon) / 2;

  totalE = totalE > 100?  100: totalE;
  totalE = totalE < 0? 0 : totalE;
  document.getElementById("disabledRange").value = totalE;
  console.log(totalE);

  localStorage.setItem(
    "electricity_slider",
    document.getElementById("disabledRange").value
  );
}
