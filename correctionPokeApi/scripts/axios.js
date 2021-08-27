const axios = (function(){});

//En callback
// axios.request = function(method, uri, successCallback, failedCallback = null) {
//     const xhr = new XMLHttpRequest();

//     xhr.onload = function() {
//         if (xhr.status == 200 || xhr.status == 304) {
//             successCallback(JSON.parse(xhr.responseText));
//         } else {
//             failedCallback?.call("No correct response");
//         }
//     }

//     xhr.open(method, uri);
//     xhr.send();
// }
//En Promise
axios.request = function(method, uri) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.onload = function() {
            if (xhr.status == 200 || xhr.status == 304) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject("No correct response");
            }
        }
    
        xhr.open(method, uri);
        xhr.send();
    })
    
}

axios.get = function(uri) {
    return axios.request("GET", uri);
}

axios.post = function(uri) {
    return axios.request("POST", uri);
}