
$(function() {
    var startupView = "About";

    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });

    if(DevExpress.devices.real().platform === "win8") {
        $("body").css("background-color", "#000");
    }

    document.addEventListener("deviceready", onDeviceReady, false);
    
    function onDeviceReady() {
        navigator.splashscreen.hide();
        document.addEventListener("backbutton", onBackButton, false);
    }

    function onBackButton() {
        DevExpress.hardwareBackButton.fire();
    }

    function onNavigatingBack(e) {
        if(e.isHardwareButton && !Storyline10.app.canBack()) {
            e.cancel = true;
            exitApp();
        }
    }

    function exitApp() {
        switch (DevExpress.devices.real().platform) {
            case "tizen":
                tizen.application.getCurrentApplication().exit();
                break;
            case "android":
                navigator.app.exitApp();
                break;
            case "win8":
                window.external.Notify("DevExpress.ExitApp");
                break;
        }
    }

    Storyline10.app = new DevExpress.framework.html.HtmlApplication({
        namespace: Storyline10,
        layoutSet: DevExpress.framework.html.layoutSets[Storyline10.config.layoutSet],
        navigation: Storyline10.config.navigation
    });

    $(window).unload(function() {
        Storyline10.app.saveState();
    });

    Storyline10.app.router.register(":view/:id", { view: startupView, id: undefined });
    Storyline10.app.navigatingBack.add(onNavigatingBack);
    Storyline10.app.navigate();
});