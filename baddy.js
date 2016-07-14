var Baddy = function(name, health) {
  this.name = name,
  this.health = health
}

Baddy.prototype = {
  half_health: function(hero) {
    hero.health = hero.health / 2;
  }
}

module.exports = Baddy;