function scrollToSendFile() {
    var sendFileEl = document.getElementById("sendfile");
    var top = sendFileEl.getBoundingClientRect().top - 250;
    window.scroll({top: top, left: 0, behavior: 'smooth'});
}