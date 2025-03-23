import {useState} from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch' ]);
    const onAddCategory = ( NewCategory) => {

        if ( categories.includes(NewCategory) ) return;
        setCategories([NewCategory,...categories ]);
        // console.log(NewCategory)
        // categories.push(NewCategory);
        // setCategories([...categories]);
    }
    return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            // onAddCategory= {setCategories}
            onNewCategory = {( value) =>  onAddCategory( value) }
        />
        { 
            categories.map( (category) => ( 
                <GifGrid key={category} category={ category} />
            ))
        }
        
    </>
    )
}
