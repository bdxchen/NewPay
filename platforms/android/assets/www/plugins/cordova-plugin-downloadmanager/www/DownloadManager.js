cordova.define("cordova-plugin-downloadmanager.DownloadManager", function(require, exports, module) {
var exec = require('cordova/exec');

exports.download = function(arg0, success, error) {
    exec(success, error, "DownloadManager", "download", [arg0]);
};

});
