import React from "react";

const Conditional = () => {

    const value = true;
    return (
        <div>
            {value === true ? <div>
                HELOO trueeeeeeeeeeeeeeeeeeeeeeeeee
            </div> : 
            <div>
            heloo false
            </div>}
        </div>
    )
}

export default Conditional;