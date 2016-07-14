var Hero = function(name, health, favourite_food){
  this.name = name;
  this.health = health;
  this.favourite_food = favourite_food;
}



Hero.prototype = {
  talk: function(){
    return this.name;
  },
  eat: function(food){
    if (food.name === this.favourite_food)
    {this.health += food.replenishment_value * 1.5}
  else {this.health += food.replenishment_value};
  },
  de_poison_or_die: function(food){
    if (food.replenishment_value < 0) {food.replenishment_value = 0} else {food.replenishment_value *= -1000};
  },
}


module.exports = Hero;