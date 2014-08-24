
$(function() {
    var startupView = "About";

    DevExpress.devices.current("desktop");

    Storyline17.app = new DevExpress.framework.html.HtmlApplication({
        namespace: Storyline17,
        layoutSet: DevExpress.framework.html.layoutSets[Storyline17.config.layoutSet],
        mode: "webSite",
        navigation: Storyline17.config.navigation
    });

    $(window).unload(function() {
        Storyline17.app.saveState();
    });

    Storyline17.app.router.register(":view/:id", { view: startupView, id: undefined });
    Storyline17.app.navigate();
});