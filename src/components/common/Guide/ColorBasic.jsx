import React from 'react';

const ColorBasic = () => {
    return(
        <div>
            <p className="blue width-full">Main Color</p>
            <p className="blue width-half">Main Color</p>
            <p className="blue width-column">Main Color</p>
            <p className="orange width-full">Sub Main Color</p>
            <p className="orange width-half">Sub Main Color</p>
            <p className="orange width-column">Sub Main Color</p>
            <p className="gray width-full">Sub Color</p>
            <p className="gray width-half">Sub Color</p>
            <p className="gray width-column">Sub Color</p>
        </div>
    );
};

export default ColorBasic;