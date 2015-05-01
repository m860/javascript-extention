/**
 * Created by Jean on 4/30/2015.
 */
if (!Array.prototype.each) {
    Array.prototype.each = function (callback) {
        var i = 0, len = this.length;
        for (; i < len; i++) {
            callback(this[i], i, this);
        }
    };
}
