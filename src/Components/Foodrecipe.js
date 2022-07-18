import React, {useState} from 'react';
import Products from './Products';

const FoodRecipe = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([])

    const YOUR_APP_ID = "2482da48";
    const YOUR_APP_KEY = "a22bf38ccc7b9401157bd165a07d30d3";

    const submitHandler = e => {
        e.preventDefault();
        fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
            res=> res.json()
        ).then(
            data => setData(data.hits)
        )
    }
  return (
    <div align="center">
        <h1>Food Recipe</h1> <br/>
        <form onSubmit={submitHandler}>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/> <br/> <br/>
            <input type="submit" className='btn btn-primary' value="Search"/> <br/>
        </form>
        <br/>
        {data.length>=1 ? <Products data={data}/>: null }
    </div>
  )
}

export default FoodRecipe