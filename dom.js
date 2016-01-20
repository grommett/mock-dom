function event() {
  var events = [];
  function addEventListener(eventName, callback) {
    return events.push({name:eventName, callback:callback})
  }

  function trigger(eventName, data) {
    events.map(function(event) {
      if(event.name == eventName) event.callback(data);
      return true;
    })
    return false;
  }

  return {
    addEventListener: addEventListener,
    trigger: trigger
  }
}

function attributes() {
  var atts = []

  function hasAttributes() {
    return atts.length > 0
  }

  function setAttribute(name, value) {
    var obj = {name: name, value: value}
    atts.push(obj)
  }

  function getAttribute(name) {
    var val = null
    atts.map(function(a) {
      if(a.name === name) {
        val = a.value;
      }
    });
    return val
  }

  return Object.create(null, {
    hasAttributes: {
      value: hasAttributes
    },
    setAttribute: {
      value: setAttribute
    },
    getAttribute: {
      value: getAttribute
    },
    getAttributes: {
      value: function() {return atts;}
    }
  })
}

function domElement(selector) {
  var events = event();
  var innerHTML='';
  var atts = attributes();

  return Object.create({},{
    selector: {enumerable: true, value: selector},
    addEventListener: {enumerable: true, get: function(){return events.addEventListener}},
    trigger: {enumerable: true, get: function(){return events.trigger}},
    innerHTML: {enumerable: true, get: function(){return innerHTML}, set: function(str){innerHTML = str}},
    hasAttributes: {enumerable: true, value:atts.hasAttributes},
    setAttribute: {enumerable: true, value: atts.setAttribute},
    getAttribute: {enumerable: true, value: atts.getAttribute},
    getAttributes: {enumerable: true, value: atts.getAttributes},
  });
}

function dom() {

  function getDOMNode(selector) {
      return domElement(selector)
  }

  return {
    querySelector: getDOMNode,
    getElementById: getDOMNode
  }
}

module.exports = dom
