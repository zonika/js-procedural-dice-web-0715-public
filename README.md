---
languages: javascript
tags: beginner, number, OO
resources: 2
---

# Dice

For this lab you'll need to create a JavaScript constructor function.  The skeleton of the code is already laid out in `lib/dice.js`.  All you will need to do is add to the code to make it work

## JS Constructor Functions
JavaScript constructor functions are similar to classes in Ruby.  The constructor function itself uses the `new` keyword to create new instances of a 'class'.
ex.
```javascript
var dice = new Dice();
```
The constructor is like the `initialize` method in Ruby.  For the most part, all it does it take in arguments and assign them to `properties` (think `instance variables`) for that new object.

## JS Prototypical Inheritance
Prototypical inheritance is simply another way to design a programming language; Ruby, by contrast, uses classical inheritance. What a rubyist would consider an instance method would be defined in JavaScript as a property on the prototype.
ex.
```javascript
Dice.prototype.roll = function(){};
```
To use a method defined on the prototype simply call it as you would any ruby method.
ex.
```javascript
var dice = new Dice();
dice.roll();
```

So go create a dice prototype and give it a `roll` method that returns 1,2,3,4,5 or 6 randomly!

# Resources (optional)
[JavaScript Prototypes vs. Class Based Inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model)
[JavaScript Prototype Chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

To run the specs follow these commands:
```shell
# first install the new gem to run the tests
gem sources -a http://flatiron:33west26@gems.flatironschool.com
gem install ironboard

# to run in the command line run
ironboard

#to run in the browser
ironboard -b
```