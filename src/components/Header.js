import React from 'react';

function Header (props) {
    return (
        <header className="top">
            <h1>Catch
                <span className="ofThe">
                    <span className="of">Of</span>
                    <span className="the">The</span>
                </span> 
                Day
            </h1>
            <h3 className="tagline">
                <span>{props.tagline}</span>
            </h3>
        </header>
    )
}



/* Since Header use only render function and not any others like state or lifecycle methods,
   this is a stateless function component. So, we can simplify like function above.  

class Header extends React.Component {
    render(){
        return(
            <header className="top">
                <h1>Catch
                    <span className="ofThe">
                        <span className="of">Of</span>
                        <span className="the">The</span>
                    </span> 
                    Day
                </h1>
                <h3 className="tagline">
                    <span>{this.props.tagline}</span>
                </h3>
            </header>
        )
    }
} */

export default Header;