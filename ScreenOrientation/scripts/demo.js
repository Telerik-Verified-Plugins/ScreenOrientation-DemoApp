(function (global) {
    var DemoViewModel,
        app = global.app = global.app || {};

    DemoViewModel = kendo.data.ObservableObject.extend({

        lockPortrait: function () {
          if (!this.checkSimulator()) {
            window.screen.lockOrientation('portrait');
          }
        },

        lockLandscape: function () {
          if (!this.checkSimulator()) {
            window.screen.lockOrientation('landscape');
          }
        },

        unlock: function () {
          if (!this.checkSimulator()) {
            window.screen.unlockOrientation();
          }
        },

        currentOrientation: function () {
          if (!this.checkSimulator()) {
            // wrapping in a timeout to prevent the popup showing twice on iOS
            setTimeout(function() {alert("Current orientation: " + JSON.stringify(window.screen.orientation))});
          }
        },

        checkSimulator: function() {
            if (window.navigator.simulator === true) {
                alert('This plugin is not available in the simulator.');
                return true;
            } else if (window.screen === undefined) {
                alert('Plugin not found. Maybe you are running in AppBuilder Companion app which currently does not support this plugin.');
                return true;
            } else {
                return false;
            }
        }
    });

    app.demoService = {
        viewModel: new DemoViewModel()
    };
})(window);