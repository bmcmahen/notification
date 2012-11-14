/**
 * Notification Module
 *
 * Growl like notifications.
 * Dependencies: Underscore
 * 
 */

var _ = require('underscore');

var list; 

// Append UL to Body on load
var buildList = function(){
    list = document.createElement("ul");
    list.id = 'notifications';
    document.getElementsByTagName('body')[0].appendChild(list);
}

// Constructor accepts attributes and options
var notification = module.exports = function(attributes, options) {

    if (typeof list === 'undefined') {
        buildList(); 
    }

    this.el = document.createElement('li');

    attributes || (attributes = {});
    this.attributes = attributes; 

    options || (options = {});
    this.hide = options.hide || 5000; 

    this.template = options.template ?
        _.template(document.getElementById(options.template).innerHTML) :
        _.template('<h1><%= title %></h1><p><%= content %></p>');

    this.render(attributes, options);

};

_.extend(notification.prototype, {

    // Renders template with attributes
    render: function(attributes, options) {

        var self = this
        ,   html = self.template(attributes);
        
        self.el.innerHTML = html;
        list.appendChild(self.el);
        self.el.className = 'notification';
      
        self.setTimer(); 
    },

    // Removes element after timer expires.
    setTimer : function() {

        var self = this; 
        clearTimeout(this.timer);
        this.timer = setTimeout(function(){
            self.remove(); 
        }, self.hide);

    },

    // Remove element.
    remove : function(){

        var self = this;
        self.el.className += ' hide';
        setTimeout(function(){
             self.el.parentNode.removeChild(self.el);
        }, 400);

    }
});