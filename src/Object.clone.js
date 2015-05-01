/**
 * Created by Jean on 4/25/2015.
 *
 * 如果目标平台是支持JSON则需要要引用json2.js
 * http://www.json.org/
 *
 */
if (!Object.clone) {
    Object.clone = function (origion) {
        if (typeOf(origion) === "object")
            return JSON.parse(JSON.stringify(origion));
        else
            return origion;
    }
}