/**
 * Created by Jean on 4/25/2015.
 *
 * ���Ŀ��ƽ̨��֧��JSON����ҪҪ����json2.js
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