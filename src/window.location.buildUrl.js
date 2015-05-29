if (window.location.buildUrl) {
    if (console) {
        console.warn("window.location.buildUrl is exists.");
    }
}
else {
    function buildUrl() {

        var args = arguments;
        if (args.length <= 0) return "";

        var url = args[0];

        var queryStrs = [];

        var index = url.indexOf("?");

        if (index > 0) {
            var str = url.substring(index + 1);
            if (str != "") {
                var oq = str.split("&");
                queryStrs = queryStrs.concat(oq);
            }
            url = url.substring(0, index);
        }

        for (var i = 1; i < args.length; i += 2) {
            queryStrs.push(args[i] + "=" + (args[i + 1] || ""));
        }

        return url + "?" + queryStrs.join("&");
    }

    window.location.buildUrl = buildUrl;
}