chrome.runtime.sendMessage({todo: "showPageAction"});

chrome.storage.sync.get("image_link", function (customBackground) {
    if (customBackground.image_link) {
        $("body").css({'background-image': `url(${customBackground.image_link})`,'background-size':'cover','background-attachment':'fixed'});

        // $("#fbar").css("background","none");
    }
});


chrome.runtime.onMessage.addListener(function (request, sender, sendRequest) {
    if (request.todo == "changeBg") {
       var image_chosen=request.image_link;
       let imageURL=image_chosen;
       chrome.storage.sync.set({"image_link":imageURL},function (){

       });
        $("body").css({'background-image': `url(${imageURL})`,'background-size':'cover','background-attachment':'fixed'});

        // $("#fbar").css("background","none");
    }
});