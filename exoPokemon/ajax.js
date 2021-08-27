const Ajax = (function() {});
Ajax.request = function(method, uri) {
    return new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();
        http.onload = function() {
            if (http.status == 200 || http.status == 304) {
                resolve(http.responseText)
            } else if (http.status != 200) {
                reject(http.responseText);
            }
        }

    http.open(method, uri);
    http.send();
    });
}

Ajax.get = function(uri) {
    return Ajax.request("get", uri);
}
Ajax.post = function(uri) {
    return Ajax.request("post", uri);
}