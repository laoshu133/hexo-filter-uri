'use strict';

require('chai').should();

describe('uri filter', function() {
    var ctx = {
        log: {
            info: function() {}
        }
    };

    var filter = require('../lib/filter').bind(ctx);

    it('default', function() {
        var content = '![test image](../assets/wrt/p3.jpg)';
        var result = '![test image](/assets/wrt/p3.jpg)';

        var data = filter({
            content: content
        });

        data.content.should.eql(result);
    });
});
