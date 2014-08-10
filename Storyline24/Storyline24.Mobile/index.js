
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
        if(e.isHardwareButton && !Storyline24.app.canBack()) {
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

    Storyline24.app = new DevExpress.framework.html.HtmlApplication({
        namespace: Storyline24,
        layoutSet: DevExpress.framework.html.layoutSets[Storyline24.config.layoutSet],
        navigation: Storyline24.config.navigation
    });

    $(window).unload(function() {
        Storyline24.app.saveState();
    });

    Storyline24.app.router.register(":view/:id", { view: startupView, id: undefined });
    Storyline24.app.navigatingBack.add(onNavigatingBack);
    Storyline24.app.navigate();
});