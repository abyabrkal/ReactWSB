import React from 'react';
import { getFunName } from '../helpers'

/* 
    If we try to access 'this' from any user defined functions, the value will be undefined.
    But, we will be able to access 'this' as the 'component' if accessed within React defined functions.

    So, here we need to bind 'this' to the user defined functions (like goToStore). Couple of ways are
    1.  add a constructor method (with super) and manually bind all user def functions to this.
            constructor(){
                super()
                this.goToStore = this.gotToStore.bind(this)
            }
    2.  User defined functions definition needs to be changed to an expression like variable definition (using arrow method)
        and will be automatically binded to the component in which it is defined.
            goToStore = event => {
                console.log(this)   // this will now point to StorePicker
            }
*/


class StorePicker extends React.Component {

    myInput = React.createRef()
    
    goToStore = (event) => {
        // stop form from submitting
        event.preventDefault();

        // get text from input
        const storeName = this.myInput.value.value

        // change the page to /store/--name
        // the React Router passes down functions like history, location, match.
        // One such history.push() is used to push the url
        this.props.history.push(`/store/${storeName}`)
    }

    render(){
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter a Store</h2>
                <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()}/>
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker;