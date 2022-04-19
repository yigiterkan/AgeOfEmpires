import React from "react";

export default class CostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <div className='container separate'>
                <p className="header">Costs</p>
                <div>
                    <div>
                        <input className="inputCheck" type="checkbox" />
                        <label>Wood</label>
                    </div>
                    <div>
                        <input className="inputCheck" type="checkbox" />
                        <label>Food</label>
                    </div>
                    <div>
                        <input className="inputCheck" type="checkbox" />
                        <label>Gold</label>
                    </div>
                </div>
                <br />

            </div>

        )
    }

}
