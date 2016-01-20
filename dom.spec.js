var assert = require('assert');
var dom = require('./dom')();

describe('DOM', function() {

  it('should be able to add and trigger events', function() {
    var mouseOverCalled = false;
    var panel = dom.querySelector('.panel');
    panel.addEventListener('mouseover', function(event) {
      mouseOverCalled = true;
    })
    panel.trigger('mouseover', {target: panel})
    assert.equal(mouseOverCalled, true);
  })

  it('should be able to add and retrieve innerHTML', function() {
    var mouseOverCalled = false;
    var panel = dom.querySelector('.panel');
    panel.innerHTML = '<p>Hello World</p>';
    assert.equal(panel.innerHTML, '<p>Hello World</p>');
  })

  it('should be able to get, set, test for and add attributes', function() {
    var panel = dom.querySelector('.panel');
    var atts = panel.hasAttributes();
    panel.setAttribute('data-id', 123)
    var id = panel.getAttribute('data-id')

    assert.deepEqual(atts, false);
    assert.equal(id, 123);
  })
})
