var assert = require('assert');

describe('dom', function() {
  describe('features', function() {
    it('message channel', function(done) {
      var mc = new window.MessageChannel()
      mc.port1.onmessage = function(m) {
        done();
      }
      mc.port2.postMessage("HELLO");
    });

    it('web worker', function(done) {
      var worker = new Worker('tests/dom/worker.js');
      worker.addEventListener('message', function(e) {
        assert.equal(e.data, 'Hello World!');
        worker.terminate();
        done();
      }, false);

      worker.postMessage('Hello World!');
    });
  });
});

