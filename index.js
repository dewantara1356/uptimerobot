const axios = require("axios")
const urls = ["https://bot-indoraya.glitch.me"]
const urls = ["https://bot-command-.glitch.me"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Pong at " + Date.now())).catch(() => {});
        })
    }, 60 * 1000);
