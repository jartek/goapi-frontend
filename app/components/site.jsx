/**
 * @jsx React.DOM
 */
define(['react'], function(React){
  var Site = React.createClass({
    render: function() {
      return (
        <div>
        Say Wut !?
        </div>
      );
    }
  });

  React.renderComponent(
    <Site />,
    document.getElementsByTagName('body')[0]
  );
});
