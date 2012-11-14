/**
 * Notification Module
 *
 * REALLY basic growl-like notificaitons. 
 * 
 */

// Append UL to Body on load
var list = document.createElement("ul");

list.id = 'notifications';
document.querySelector('body').appendChild(list)

// Constructor accepts attributes and options
var Notification = module.exports = function(attributes, options) {

    attributes || (attributes = {});
    this.attributes = attributes; 

    options || (options = {});
    this.hide = options.hide || 5000; 

    this.show(attributes, options);

};

Notification.prototype =  {
    
    show: function(attributes, options) {

        var self = this
        ,   el = self.el = document.createElement('li');

        el.innerHTML = require('./template');
        el.className = 'notification';

        // textContent would be better, but IE 8 doesnt support it.
        el.querySelector('span').innerHTML = self.attributes.title; 
        el.querySelector('p').innerHTML = self.attributes.content; 
        
        list.appendChild(el);
      
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
}; 