async function srvTime() {

        var xmlHttp = new XMLHttpRequest();

        xmlHttp.open('HEAD', window.location.href.toString(), false);
        xmlHttp.setRequestHeader("Content-Type", "text/html");
        xmlHttp.send('');
        var data = await xmlHttp.getResponseHeader("Date");
        return data;
    }
