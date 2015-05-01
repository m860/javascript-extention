/**
 * Created by Jean on 4/25/2015.
 */
if (!String.format) {
    String.format = function (str, params) {
        var i;
        var result = str;
        for (i = 1; i < arguments.length; i++) {
            result = result.replace(new RegExp("\\{" + (i - 1) + "\\}", "g"), arguments[i]);
        }
        return result;
    };
}