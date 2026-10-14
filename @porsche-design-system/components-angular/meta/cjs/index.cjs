'use strict';

var meta = require('@porsche-design-system/components-js/meta');



Object.keys(meta).forEach(function (k) {
	if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return meta[k]; }
	});
});
