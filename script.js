function countdownFrom(num) {
    return new Promise(function (resolve, reject) {
        function countdown() {
            if (num === 0) {
                resolve();
            } else {
                document.getElementById('countdown').innerText = num;
                setTimeout(function () {
                    num--;
                    countdown();
                }, 1000);
            }
        }
        countdown();
    });
}

function showMessage() {
    document.getElementById('countdown').innerText = 'Happy Independence Day';
    document.getElementById('message').innerText = 'Enjoy the celebration!';
}

countdownFrom(10)
    .then(showMessage)
    .catch(function (error) {
        console.error(error);
    });
