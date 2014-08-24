
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
        if(e.isHardwareButton && !Application2.app.canBack()) {
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

    Application2.app = new DevExpress.framework.html.HtmlApplication({
        namespace: Application2,
        layoutSet: DevExpress.framework.html.layoutSets[Application2.config.layoutSet],
        navigation: Application2.config.navigation
    });

    $(window).unload(function() {
        Application2.app.saveState();
    });

    Application2.app.router.register(":view/:id", { view: startupView, id: undefined });
    Application2.app.navigatingBack.add(onNavigatingBack);
    Application2.app.navigate();
});