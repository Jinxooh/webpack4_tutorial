import React from 'react';
import cx from 'classnames'; 

const ButtonBasic =({ onClick, type, name, size, icon, ...rest}) => {
    const buttonType = {
        btnOk: {
            color: 'blue',
            buttonName: '확인',
            icon : ''
        },
        btnCancel: {
            color: 'grey',
            buttonName: '취소',
            icon: ''
        },
        btnMove: {
            color: 'orange',
            buttonName: '변경',
            icon: ''
        }
    };
    const{
        color, buttonName
    } = buttonType[type];
    
    return(
        <button 
            onClick={onClick}
            className={cx('button', color, size)}
            {...rest}
        >{buttonName} <i className='material-icons'>{icon}</i>
        </button>
    );
};

export default ButtonBasic;