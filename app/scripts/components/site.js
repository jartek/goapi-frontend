/**
 * @jsx React.DOM
 */
define(['react', 'components/header/navbar'], function(React, Navbar){
  var Site = React.createClass({displayName: 'Site',
    render: function() {
      return (
        Navbar(null )
      );
    }
  });

  React.renderComponent(
    Site(null ),
    document.getElementsByTagName('body')[0]
  );
});
