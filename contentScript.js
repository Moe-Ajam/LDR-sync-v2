(() => {
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        console.log("In the content script!!")
        const { type, value, videoId } = obj;

        if (type === "NEW") {
            console.log(type);
            console.log(value);
            console.log(videoId);
        }
    })
})();
