/**
 * Created by Jean on 4/25/2015.
 */
window.cancelRequestAnimationFrame = function () {
    return window.cancelAnimationFrame
        || window.webkitCancelRequestAnimationFrame
        || window.mozCancelRequestAnimationFrame
        || window.oCancelRequestAnimationFrame
        || window.msCancelRequestAnimationFrame
        || clearTimeout;
};