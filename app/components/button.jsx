/**
 * @jsx React.DOM
 */
define(['react'], function(React){
  React.renderComponent(
    <h1>Hello, world!</h1>,
    document.getElementsByTagName('body')[0]
  );
});
