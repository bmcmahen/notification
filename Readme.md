
# notification

  Very simple notification tool, built using underscore templates. Other than underscore, it's vanilla javascript.

## Installation

    $ component install bmcmahen/notification

## API
  
  // expose the notify variable
  var notify = require('notification');

  // construct the notification
  new notify([attributes, options])

  // example
  new notify({
    title: 'Error',
    content: 'You entered an invalid password',
    custom_attirbute: 'A custom attribute',
    another: 'Another attribute'
  }, {
    hide: 6000,
    template: 'mytemplate' // the id of your template
  })

  // You can pass in a custom underscore templates by including
  // a template in your html

  <script type='text/template' id='mytemplate'>
    <h4><%= title %></h4>
    <p><%= content %></p>
    <p><%= date %></p>
  </script>

   

## License

  MIT
