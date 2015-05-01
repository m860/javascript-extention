/**
 * Created by Jean on 4/25/2015.
 */
window.requestAnimationFrame = function () {
    return window.requestAnimationFrame
        || window.webkitRequestAnimationFrame
        || window.mozRequestAnimationFrame
        || window.oRequestAnimationFrame
        || window.msRequestAnimationFrame
        || function (a, b) {
            window.setTimeout(a, 1000 / 60);
        };
};