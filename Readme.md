
# notification

  VERY simple, small notifications module all in vanilla JS. Should work in IE 8+.

## Installation

    $ component install bmcmahen/notification

## Use

	For an example, check example.html in the examples folder. 
  
  ```javascript
  // expose the notify variable
  var notify = require('notification');

  // construct the notification
  notify([attributes, options])

  // example
  notify({
    title: 'Error',
    content: 'You entered an invalid password',
  }, {
    duration: 6000
  });

  // You can pass in your own compiled template function

  var template = // Your template function here. 
  notify({
	  title: 'Success',
	  content: 'It worked!',
	  custom: 'custom1'
	}, {
		duration: 3000,
		template: template
	});

  ```

   

## License

  MIT
