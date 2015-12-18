var self = require('sdk/self');
var ui = require("sdk/ui");
var { Toolbar } = require("sdk/ui/toolbar");
var StyleUtils = require('sdk/stylesheet/utils');
var { viewFor } = require("sdk/view/core");

var windows = require("sdk/windows").browserWindows;

var action_button = ui.ActionButton({
  id: "my-button",
  label: "Action Button!",
  icon: self.data.url("testtube.ico"),
  onClick: function(state) {
    console.log("You clicked '" + state.label + "'");
  }
});

var toolbar = ui.Toolbar({
  title: "Example",
  items: [action_button]
});

function styleWindow(aWindow) {
  let domWin = viewFor(aWindow);
  StyleUtils.loadSheet(domWin, "chrome://bgmcoder-example/content/style.css", "agent");  
}

windows.on("open", function(aWindow) {
  styleWindow(aWindow);
});

styleWindow(windows.activeWindow);
