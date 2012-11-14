
# notification

  VERY simple, small notifications module all in vanilla JS. Should work in IE 8+.

## Installation

    $ component install bmcmahen/notification

## Use
  
  ```javascript
  // expose the notify variable
  var notify = require('notification');

  // construct the notification
  new notify([attributes, options])

  // example
  new notify({
    title: 'Error',
    content: 'You entered an invalid password',
  }, {
    hide: 6000
  });

  // You can pass in your own compiled template function

  var template = // Your template function here. 
  new notify({
	  title: 'Success',
	  content: 'It worked!',
	  custom: 'custom1'
	}, {
		hide: 3000,
		template: template
	});

  ```

   

## License

  MIT
