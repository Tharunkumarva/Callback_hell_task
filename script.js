function countdownFrom(num, callback) {
    if (num === 0) {
        callback();
    } else {
        document.getElementById('countdown').innerText = num;
        setTimeout(function () {
            countdownFrom(num - 1, callback);
        }, 1000);
    }
}

countdownFrom(10, function () {
    document.getElementById('countdown').innerText = 'Happy Independence Day';
});
