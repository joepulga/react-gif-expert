import PropTypes from 'prop-types';
import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [ inputValue, setInputValue ] = useState('One Punch');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        // console.g('Hola Mundo desde onSubmit')
        event.preventDefault();

        if(inputValue.trim().length <= 1) return;

        // const newInputValue = inputValue.trim();
        // if(newInputValue.length <= 1) return;
        // console.log(inputValue)
        // onAddCategory( categories => [...categories, inputValue]);
        setInputValue('');
        onNewCategory( inputValue.trim() );
        // onNewCategory(inputValue.trim() );
        
    }

    return (

        <form onSubmit={ (event) => onSubmit(event) } aria-label='form'>
            <input 
                type="text" 
                placeholder="Buscar Gifs" 
                value={inputValue} 
                // onChange={ (event) =>  onInputChange( event)} 
                onChange={ onInputChange } 
            />
        </form>
    )
}


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}

