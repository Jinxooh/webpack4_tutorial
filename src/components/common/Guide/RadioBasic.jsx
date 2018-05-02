import React from 'react';



const RadioBasic = ({onChange, item}) => {
    return(
        <div className="radioBox">
            <div className="radio">
                <input type="radio" name="radioType" id="radioType01" value="yes" onChange={e => onChange(e, item)} />
                <label htmlFor="radioType01">YES</label>
            </div>
            <div className="radio">
                <input type="radio" name="radioType" id="radioType02" value="no" onChange={e => onChange(e, item) } />
                <label htmlFor="radioType02">NO</label>
            </div>
        </div>
    );
};

RadioBasic.defaultProps = {
    onChange: () => console.log('radio onChange')
}

export default RadioBasic;