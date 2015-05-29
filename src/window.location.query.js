if (window.location.query) {
    if (console) {
        console.warn("window.location.query is exists.");
    }
}
else {
    function query(url) {
        if (!url) url = window.location.href;
        var data = {};
        var index = url.indexOf("?");
        var qstr = url.substring(index+1);
        var strs = qstr.split("&");
        var kv;
        for (var i = 0; i < strs.length; i++) {
            kv = strs[i].split("=");
            if (kv.length > 0) {
                data[kv[0]] = kv.length > 1 ? kv[1] : "";
            }
        }
        return data;
    }

    window.location.query = query;
}