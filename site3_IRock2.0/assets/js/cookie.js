function writeCookie (name, value, days) {
    let expires = "";

    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }

    document.cookie = name + '=' + value + expires + "; path=/";
}

function readCookie(name) {
    let searchName = name + '=';
    let cookies = document.cookie.split(';');
    for (let i=0;i < cookies.length; i++) {
        let c = cookies[i];
        while (c.charAt (0) == ' ') {
            c = c.substring(1, c.length);
            if (c.indexOf(searchName) == 0) {
                return c.substring(searchName.length, c.length);
            }
        }
    }
    return null;
}

function eraseCookie(name) {
    whireCookie(name, '', -1);
}