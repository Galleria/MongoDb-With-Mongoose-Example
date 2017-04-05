var mongoose = require('mongoose')
var Joi = require('joi')

var Person = require('./model/person')
console.dir( Person.name )

var Person_validation = require('./model/validation/person')

var save = require('./person_repository')

supachai = new Person()

supachai.name = 'supachai'
supachai.age = 24
supachai.sex = 'm'



//const result = Joi.validate( supachai , Person_validation )
//console.log( result.error === null )

/*
piyawadee = new Person()

piyawadee.age = 24
piyawadee.sex 

const result1 = Joi.validate( piyawadee , Person_validation )
console.log( result1.error.details )
*/
save( supachai )
