/**
 * @jsx React.DOM
 */
define(['react'], function(React){
  React.renderComponent(
    React.DOM.h1(null, "Hello, world!"),
    document.getElementsByTagName('body')[0]
  );
});
