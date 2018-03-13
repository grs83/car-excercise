const $car = document.querySelector(".car");

function factory(location, direction, speed, marker) {
  const car = {
    location: location,
    direction: direction,
    speed: speed,
    carDirection: function(direction) {
      if (this.direction === "n") {
        marker.style.transform = "rotateZ(-90deg)";
        this.location[0]--;
      }
      if (this.direction === "s") {
        marker.style.transform = "rotateZ(90deg)";
        this.location[0]++;
      }
      if (this.direction === "w") {
        marker.style.transform = "rotateZ(180deg)";
        this.location[1]--;
      }
      if (this.direction === "e") {
        marker.style.transform = "rotateZ(0deg)";
        this.location[1]++;
      }
    },
    carLoctaion: function() {
      marker.style.top = this.location[0] + "px";
      marker.style.left = this.location[1] + "px";
    }
  };
  return car;
}

let myCar = factory([100, 100], "e", 5, $car);

const stopCar = setInterval(function() {
  myCar.carDirection();
  myCar.carLoctaion();
}, myCar.speed + "0");

const up = function() {
  myCar.direction = "n";
};
const right = function() {
  myCar.direction = "e";
};
const down = function() {
  myCar.direction = "s";
};
const left = function() {
  myCar.direction = "w";
};
