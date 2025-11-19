document.getElementById('fullscreenBtn').addEventListener('click', async () => {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tabs || tabs.length === 0) return;

    const tab = tabs[0];

   
    if (!tab.url.startsWith("https://mylearn.oracle.com")) {
        alert("This extension only works on MyLearn pages!");
        return;
    }

  
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            const iframe = document.getElementById('articleIframe');
            if (iframe) {
                iframe.setAttribute('allowfullscreen', '');
                iframe.requestFullscreen();
            } else {
                console.warn("Iframe not found");
            }
        }
    });
});
