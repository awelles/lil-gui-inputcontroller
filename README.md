# lil-gui-inputcontroller
Custom controller for lil-gui. Generic input with definable type

Basic usage:

const gui = new GUI();

GUI.prototype.addInput = function () {
  return new InputController( this, ...arguments );
};

const params = { eventDate: '1994-02-13' }; 

gui.addInput( params, 'eventDate', 'date' );

Mostly functional types:  color, date, datetimelocal, email, file, month, number, password, range, search, tel, text, time, url, week

Browser compatibiliy may vary
see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#browser_compatibility

Problematic types (need extra attribs, value get/set differently, etc): button, checkbox, image, radio, reset, submit, datetime
