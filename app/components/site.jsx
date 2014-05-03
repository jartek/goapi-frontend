/**
 * @jsx React.DOM
 */
define(['react', 'components/header/navbar'], function(React, Navbar){
  var Site = React.createClass({
    render: function() {
      return (
        <Navbar />
      );
    }
  });

  React.renderComponent(
    <Site />,
    document.getElementsByTagName('body')[0]
  );
});
