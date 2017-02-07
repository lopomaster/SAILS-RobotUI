/**
 * Event.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */


module.exports = {

  attributes: {

    //El joystick pertenece a una interfaz
    interface_owner:{
      model: 'interface'
    },

    event_name: {
      type: 'string',
      required: true
    },

    name: {
      type: 'string'
    },

    coordinate_x: {
      type: 'float',
      defaultsTo: 0
    },

    coordinate_y: {
      type: 'float',
      defaultsTo: 0
    }
  }
};
