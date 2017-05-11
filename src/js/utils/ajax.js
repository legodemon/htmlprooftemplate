const ajax = (url, method, callback, err, body = '') => {
    const req = new XMLHttpRequest();
    req.open(method, url);
    req.onreadystatechange = () => req.readyState === 4
        ? (req.status === 200 ? callback(req.response) : err()) : 0;
    req.send(body);
};

export default ajax