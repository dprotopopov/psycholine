
$(function() {
    var startupView = "About";


    Storyline18.app = new DevExpress.framework.html.HtmlApplication({
        namespace: Storyline18,
        layoutSet: DevExpress.framework.html.layoutSets[Storyline18.config.layoutSet],
        navigation: Storyline18.config.navigation,
        commandMapping: Storyline18.config.commandMapping
    });

    $(window).unload(function() {
        Storyline18.app.saveState();
    });

    Storyline18.app.router.register(":view/:id", { view: "Home", id: undefined });
    Storyline18.app.navigate();
});