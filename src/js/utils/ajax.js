import Promise from 'promise-polyfill';

const ajax = (url, method, body = '') => {
    const req = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
        req.open(method, url);
        req.onreadystatechange = () => req.readyState === 4
            ? (req.status >= 200 && req.status <= 300 ? resolve(req.response) : reject(new Error(req.statusText))) : 0;
        req.onerror = () => reject(new Error("Network Error"));
        req.send(body);
    });

};

export default ajax