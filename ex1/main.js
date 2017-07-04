//var nw=require('nw');
var url= nw.App.argv[0];
if(!url) url='index.html'; 
nw.Window.open(url, {}, function(win) {
var your_menu = new nw.Menu({ type: 'menubar' });

var submenu = new nw.Menu();
submenu.append(new nw.MenuItem({ label: 'Item A' }));
submenu.append(new nw.MenuItem({ label: 'Item B' }));

// the menu item appended should have a submenu
your_menu.append(new nw.MenuItem({
  label: 'First Menu',
  submenu: submenu
}));

win.menu = your_menu;
});
