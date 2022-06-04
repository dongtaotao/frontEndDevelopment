self.addEventListener('message', function (event) {
    setTimeout(() => {
        self.postMessage("1111-------1111")
    }, 2000);
});