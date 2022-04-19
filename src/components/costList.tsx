import React from "react";

const CostList = () => {
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

export default CostList