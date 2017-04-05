var mongoose = require('mongoose')
var Person = require('./model/person')

var Joi = require('joi')
var Person_validation = require('./model/validation/person')

let PersonSchema = mongoose.Schema( require('./mongodb/model/person-db') )
let PersonDbModel = mongoose.model( 'user' , PersonSchema )

let createConnection = ()=> {
    mongoose.Promise = global.Promise
    mongoose.connect('mongodb://localhost/test')
    let db = mongoose.connection;
    db.on( 'error', console.error.bind(console, 'connection error:') )
    db.once('open', function() {
        console.log( 'open now' )
    });
}

var save = ( person )=>{
    createConnection();
    
    let validation_result = Joi.validate( supachai , Person_validation )

    if( validation_result.error === null ){

        let model = new PersonDbModel( person )
        model.save()
            .then( (result) => console.log( result ) )
            .catch( (err) => console.log( err ) )
            .then( (msg) => mongoose.disconnect() )

    }else{
        return validation_result.error.detail.message
    }
}

module.exports = save