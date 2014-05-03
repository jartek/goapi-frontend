/**
 * @jsx React.DOM
 */
define(['react'], function(React){
  var Navbar = React.createClass({displayName: 'Navbar',
    render: function() {
      return (
        React.DOM.div( {className:"navbar navbar-default"}, 
          React.DOM.div( {className:"container"}, 
            React.DOM.div( {className:"navbar-header"}, 
              React.DOM.button( {type:"button", className:"navbar-toggle", 'data-toggle':"collapse", 'data-target':".navbar-collapse"}, 
                React.DOM.span( {className:"sr-only"}, "Toggle navigation"),
                React.DOM.span( {className:"icon-bar"}),
                React.DOM.span( {className:"icon-bar"}),
                React.DOM.span( {className:"icon-bar"})
              ),
              React.DOM.a( {href:"#", className:"navbar-brand"}, "Your Company")
            ),
            React.DOM.div( {className:"collapse navbar-collapse"}, 
              React.DOM.ul( {className:"nav navbar-nav"}, 
                React.DOM.li( {className:"active"}, 
                  React.DOM.a( {href:"#"}, "Home")
                ),
                React.DOM.li(null, 
                  React.DOM.a( {href:"#"}, "About")
                ),
                React.DOM.li(null, 
                  React.DOM.a( {href:"#"}, "Contact")
                )
              )
            )
          )
        )
      );
    }
  });
  return Navbar;
});
