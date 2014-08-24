
$(function() {
    var startupView = "About";


    Storyline17.app = new DevExpress.framework.html.HtmlApplication({
        namespace: Storyline17,
        layoutSet: DevExpress.framework.html.layoutSets[Storyline17.config.layoutSet],
        navigation: Storyline17.config.navigation,
        commandMapping: Storyline17.config.commandMapping
    });

    $(window).unload(function() {
        Storyline17.app.saveState();
    });

    Storyline17.app.router.register(":view/:id", { view: "Home", id: undefined });
    Storyline17.app.navigate();
});