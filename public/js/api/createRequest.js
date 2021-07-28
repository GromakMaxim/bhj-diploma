/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options) => {
    //console.log(options)
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
            xhr.send();

        } else {
            let fd = new FormData;

            if (method.toUpperCase() === "PUT") {
                fd.append("name", options.data.name);
                xhr.open(method, "http://localhost:8000" + options.url + "/?name=" + options.data.name);
                console.log("request was send http://localhost:8000" + options.url + "/?name=" + options.data.name)
            }

            if (method.toUpperCase() === "DELETE") {
                fd.append("id", options.data.accound_id);
                xhr.open(method, "http://localhost:8000" + options.url + "/?name=" + options.data.accound_id);
                console.log("request was send http://localhost:8000" + options.url + "/?id=" + options.data.accound_id);
            } else {
                fd.append("email", options.data.email);
                fd.append("password", options.data.password);
                xhr.open(method, "http://localhost:8000" + options.url);
                console.log("request was send http://localhost:8000" + options.url);
            }
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