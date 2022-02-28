/* 
    There are two types of callbacks:
    1. Synchronous callbacks
    2. Asynchronous callbacks
*/

// Demo application:
function download(url, callback){
    let fileName = url.split('/').pop();
    let element = document.createElement('a');
    element.setAttribute = ("href", url);
    element.setAttribute = ("download", fileName);
}
