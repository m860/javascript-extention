/*!
 * Created by Jean on 5/29/2015.
 * 
 * email:mahai_1986@126.com
 *
 */
var assert = require("assert");
window = {
    location: {}
};
require("../src/window.location.query");
require("../src/window.location.buildUrl");

describe("window.location.query", function () {

    it("http://www.baidu.com?name=jean&sex=mail", function () {
        var query = window.location.query("http://www.xxx.com?name=jean&sex=mail");
        assert.equal("jean", query.name);
        assert.equal("mail", query.sex);
    });

});

describe("window.location.buildUrl", function () {

    it("buildUrl('http://www.xxx.com','name','jean')", function () {
        var url = window.location.buildUrl('http://www.xxx.com','name','jean');
        assert.equal("http://www.xxx.com?name=jean", url);
    });

    it("buildUrl('http://www.xxx.com','name','jean','sex')", function () {
        var url = window.location.buildUrl('http://www.xxx.com','name','jean','sex');
        assert.equal("http://www.xxx.com?name=jean&sex=", url);
    });

    it("buildUrl('http://www.xxx.com?age=1','name','jean','sex')", function () {
        var url = window.location.buildUrl('http://www.xxx.com?age=1','name','jean','sex');
        assert.equal("http://www.xxx.com?age=1&name=jean&sex=", url);
    });

    it("buildUrl('http://www.xxx.com?','name','jean','sex')", function () {
        var url = window.location.buildUrl('http://www.xxx.com?','name','jean','sex');
        assert.equal("http://www.xxx.com?name=jean&sex=", url);
    });

    it("buildUrl('http://www.xxx.com?','name','jean','sex',1)", function () {
        var url = window.location.buildUrl('http://www.xxx.com?','name','jean','sex',1);
        assert.equal("http://www.xxx.com?name=jean&sex=1", url);
    });
});