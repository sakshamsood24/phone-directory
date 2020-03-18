import React, {Component} from 'react';
import Header from "./Header";

class Addsubscriber extends Component{
    render()
    {
        return(
            <div>
                <Header heading="Add Subscriber"/>
                <div className="component-body-container">
                    <button className="custom-btn">Back</button>
                </div>
            </div>
        )
    }

}
export  default Addsubscriber;  