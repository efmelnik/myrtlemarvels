document.addEventListener("DOMContentLoaded", function () {

    function shareOnFacebook() {
        const urlToShare = 'https://efmelnik.github.io/myrtlemarvels/index.html';
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`;
        openCenteredPopup(facebookShareUrl, 'Share on Facebook', 1500, 600);
    }

    function shareOnTwitter() {
        const urlToShare = 'https://efmelnik.github.io/myrtlemarvels/index.html';
        const textToShare = 'Check Out The Myrtle Marvels Website!';
        const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(urlToShare)}&text=${encodeURIComponent(textToShare)}`;
        openCenteredPopup(twitterShareUrl, 'Share on Twitter', 1500, 600);
    }

    function goToInstagram() {
        alert('Instagram does not support direct website sharing. You can share manually!');
    }

    function openCenteredPopup(url, title, w, h) {
        const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
        const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;

        const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

        const systemZoom = width / window.screen.availWidth;
        const left = (width - w) / 2 / systemZoom + dualScreenLeft;
        const top = (height - h) / 2 / systemZoom + dualScreenTop;
        const newWindow = window.open(url, title, 
            `scrollbars=yes, width=${w / systemZoom}, height=${h / systemZoom}, top=${top}, left=${left}`
        );

        if (window.focus) newWindow.focus();
    }

    const shareFacebookButton = document.getElementById("share-facebook");
    const shareTwitterButton = document.getElementById("share-twitter");
    const shareInstagramButton = document.getElementById("share-instagram");

    if (shareFacebookButton) {
        shareFacebookButton.addEventListener("click", shareOnFacebook);
    }

    if (shareTwitterButton) {
        shareTwitterButton.addEventListener("click", shareOnTwitter);
    }

    if (shareInstagramButton) {
        shareInstagramButton.addEventListener("click", goToInstagram);
    }

});

function searchGoogle() {
    const query = document.getElementById('search-box').value;
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(searchUrl, '_blank');
}