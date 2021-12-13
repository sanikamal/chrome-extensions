$(function () {

    // chrome.storage.sync.get("username", function (Greeting) {
    //     if (Greeting.username) {
    //         $("#name").html(Greeting.username);
    //     }
    // });
    // $("#alias").keyup(function () {
    //     $("#name").html($("#alias").val());
    // });
    //
    // $("#submit").click(function () {
    //     var username = $("#alias").val();
    //     /*
    //     Store data in browser memory
    //      */
    //     chrome.storage.sync.set({"username": username}, function () {
    //         close();
    //     });
    //
    // });

    $("#submit").click(function () {
        var image_link = $("#image_link").val();
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {todo: "changeBg", image_link: image_link});
        })
    });
});