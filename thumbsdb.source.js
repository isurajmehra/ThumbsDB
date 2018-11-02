/* Just to store original version! Replace before minifying again! */
function getThumbnail() {
    var linkInput = $("#video-id-input").val();
    var urlValid = /(http|https):\/\/(www\.)?(youtu\.be|youtube.com)/.test(linkInput);

    if(urlValid) {
        var videoId = new URL(linkInput).searchParams.get("v");
        if(videoId === null) {
            videoId = linkInput.split("/")[3];
        }
        $("#thumbnail-image").attr("src", `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
        $(".action-buttons>button").removeAttr("disabled");
        $("#video-id").val(videoId);
    } else {
        alert("Please enter a valid link to a YouTube video.")
    }
}

function openInNewTab() {
    videoId = $("#video-id").val();
    window.open(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
}

function openVideo() {
    videoId = $("#video-id").val();
    window.open(`https://youtu.be/${videoId}`);
}