import React from 'react'

const Products = ({data}) => {
  return (
    <div>
        <div className='row'>
            {data.map((data,index)=>
                <div key={index} className='col-md-4'>
                    <div className='card' style={{"width": "18rem"}}>
                        <img className='card-img-top'src={data.recipe.image} alt="Card cap" />
                        <div className='card-body'>
                            <center>
                                <h5 className="card-title">{data.recipe.label}</h5>
                                <p>Total Amount Of Calories : {Math.round(data.Calories)}</p>
                                <a href='/' className="btn btn-primary">Buy</a>
                            </center>
                        </div>
                    </div>
                </div>
                )}
        </div>
    </div>
  )
}
export default Products;