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
    this.template = options.template || require('./template');

    this.show(attributes, options);

};

Notification.prototype =  {
    
    show: function(attributes, options) {

        var self = this
        ,   li = self.el = document.createElement('li')
        ,   html = self.template(self.attributes);

        li.className = 'notification';
        li.innerHTML = html;
        
        // Cant append string so we need to create an <li> and append that
        list.appendChild(li);
      
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