/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options) => {
    console.log(options)
    let method = options.method;

    const xhr = new XMLHttpRequest;
    xhr.responseType = 'json';

    try {
        if (method.toUpperCase() === "GET") {
            if (options.url === "/transaction") {
                xhr.open(method, "http://localhost:8000" + options.url + "/?account_id=" + options.data);
                console.log("request was send  + http://localhost:8000" + options.url + "/?account_id=" + options.data);
            }

            if (options.url === "/account" || Object.keys(options.data).length === 0) {
                xhr.open(method, "http://localhost:8000" + options.url);
                console.log("request was send http://localhost:8000" + options.url);
            }


            //if (options.data.email != undefined) {
            //    xhr.open(method, "http://localhost:8000" + options.url + "/?email=" + options.data.email + "&password=" + options.data.password);
            //    console.log("request was send http://localhost:8000" + options.url + "/?email=" + options.data.email + "&password=" + options.data.password);
            //}

            xhr.send();
        } else {
            let fd = new FormData;
            fd.append("email", options.data.email);
            fd.append("password", options.data.password);
            xhr.open(method, "http://localhost:8000" + options.url);
            //console.log("request was send http://localhost:8000" + url)
            xhr.send(fd);
        }

        xhr.onload = function () {
            options.callback(null, xhr.response)
        }

    } catch (exception) {

        callback => {
            err: new Error("exc in createRequest");
            response: xhr.response;
        }
    }
}