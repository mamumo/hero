var Rat = function(name) {
  this.name = name;
}

Rat.prototype = {
  touch_food: function(food) {
    food.replenishment_value *= -1;
  }
}

module.exports = Rat;