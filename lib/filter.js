'use strict';

const REG_RELATIVE_URI = /\((?:\.\.\/)+(\w[^\)]+)\)/g;

module.exports = function(data) {
    let content = data.content;

    data.content = content.replace(REG_RELATIVE_URI, function(a, uri) {
        return '(/'+ uri +')';
    });

    return data;
};