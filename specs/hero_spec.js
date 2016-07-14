var Hero = require('../hero')
var Food = require('../food')
var Rat = require('../rat')
var Baddy = require('../baddy')
var assert = require('chai').assert

describe('hero', function(){

  it('hero has a name', function(){
    hero1 = new Hero('Marie', 100, 'haggis')
    assert.equal('Marie', hero1.name)
  })

  it('can talk', function(){
    hero2 = new Hero('Sam', 100, 'neeps')
    assert.equal('Sam', hero2.talk())
  })

  it('health increase with favourite food', function(){
    hero3 = new Hero ('Tom', 100, 'tatties')
    food1 = new Food ('tatties', 20)
    hero3.eat(food1)
    assert.equal(130, hero3.health)
  })

  it('health increases with normal food', function(){
    hero4 = new Hero ('Dan', 100, 'tatties')
    food2 = new Food ('cheese', 10)
    hero4.eat(food2)
    assert.equal(110, hero4.health)
  })

  it('rat poisons food', function(){
    hero5 = new Hero( 'Pam', 70, 'bread')
    food3 = new Food('grapes', 10)
    rat1 = new Rat('ratty')
    rat1.touch_food(food3)
    hero5.eat(food3)
    assert.equal(60, hero5.health)
  })

  it('should halve hero health', function(){
    hero6 = new Hero( 'Bonnie', 50, 'biscuits')
    baddy1 = new Baddy( 'Joe', 1000)
    baddy1.half_health(hero6)
    assert.equal(25, hero6.health)

  })

  it('should de-poison or kill', function(){
    hero7 = new Hero( 'Clyde', 100, 'chocolate')
    food4 = new Food ('crisps', 20)
    rat2 = new Rat ('kevin')
    rat2.touch_food(food4)
    hero7.de_poison_or_die(food4)
    hero7.eat(food4)
    assert.equal(100, hero7.health)
  })

  it('should un-de-poison 2.0 death', function(){
    hero8 = new Hero( 'Butch Cassidy', 100, 'wings')
      food5 = new Food('cheesecake', 30)
      hero8.de_poison_or_die(food5)
      hero8.eat(food5)
      assert.equal(-29900, hero8.health)
    
  })




})