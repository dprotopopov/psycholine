
$(function() {
    var startupView = "About";


    Storyline24.app = new DevExpress.framework.html.HtmlApplication({
        namespace: Storyline24,
        layoutSet: DevExpress.framework.html.layoutSets[Storyline24.config.layoutSet],
        navigation: Storyline24.config.navigation,
        commandMapping: Storyline24.config.commandMapping
    });

    $(window).unload(function() {
        Storyline24.app.saveState();
    });

    Storyline24.app.router.register(":view/:id", { view: "Home", id: undefined });
    Storyline24.app.navigate();
});