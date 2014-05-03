/**
 * @jsx React.DOM
 */
define(['react'], function(React){
  var Site = React.createClass({displayName: 'Site',
    render: function() {
      return (
        React.DOM.div(null, 
        "Say Wut !?"
        )
      );
    }
  });

  React.renderComponent(
    Site(null ),
    document.getElementsByTagName('body')[0]
  );
});
