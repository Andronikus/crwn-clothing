import React from 'react';

import './form-input.styles.scss';

const FormInput = ({changeHandler, label, ...otherProps}) => (
    <div className='form-group'>
        <input className='form-input' onChange={changeHandler} {...otherProps}/>
        {
            label ? ( 
            <label className={`${otherProps.value.length > 0 ? 'shrink' : ''} form-input-label`}> { label } </label> 
            ): null
        }
    </div>
);

export default FormInput;