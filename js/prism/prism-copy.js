(function(){
    if (typeof self === 'undefined' || !self.Prism || !self.document) {
        return;
    }
    if (!Prism.plugins.toolbar) {
        console.warn('Copy to Clipboard plugin loaded before Toolbar plugin.');
        return;
    }
    var Clipboard = window.Clipboard || undefined;
    if (!Clipboard && typeof require === 'function') {
        Clipboard = require('clipboard');
    }
    var callbacks = [];
    if (!Clipboard) {
        var script = document.createElement('script');
        var head = document.querySelector('head');
        script.onload = function() {
            Clipboard = window.Clipboard;
            if (Clipboard) {
                while (callbacks.length) {
                    callbacks.pop()();
                }
            }
        };
        head.appendChild(script);
    }
    Prism.plugins.toolbar.registerButton('copy-to-clipboard', function (env) {
        var linkCopy = document.createElement('a');
        linkCopy.textContent = '复制';
        if (!Clipboard) {
            callbacks.push(registerClipboard);
        } else {
            registerClipboard();
        }
        return linkCopy;
        function registerClipboard() {
            var clip = new Clipboard(linkCopy, {
                'text': function () {
                    return env.code;
                }
            });
            clip.on('success', function() {
                linkCopy.textContent = '已复制';
                resetText();
            });
            clip.on('error', function () {
                linkCopy.textContent = '按Ctrl+C复制';
                resetText();
            });
        }
        function resetText() {
            setTimeout(function () {
                linkCopy.textContent = '复制';
            }, 5000);
        }
    });
})();
