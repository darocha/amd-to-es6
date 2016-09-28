define([
    "core/behavior",
    "swap"
], function (Behavior) {
    "use strict";

    return Behavior.extend({
        ui: {
            hello: ".world"
        },
        onRender: function () {
            this.ui.hello.swap();
        }
    });

});