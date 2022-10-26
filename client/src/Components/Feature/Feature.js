import React from 'react'
import useFetch from '../../hooks/useFetch'
import './Feature.css'

export const Feature = () => {
  const {data, loading, error} = useFetch("/hotels/countByCity?cities=Lahore,Karachi,Islamabad")
  // console.log(data);
  return (
    <div className='row featured'>
      {loading?(
        "Loading, Please Wait") : (
      <><div className=" col-sm featuredItem">
        <img className='imagee' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwHyzvyiEKpQiYtnkqUkEJcycP_22sxqPUIA&usqp=CAU" alt="" />
        <div className="featureTitle">
          <h1>Lahore</h1>
          <h3>{data[0]} Properties</h3>
        </div>
      </div>


      <div className=" col-sm featuredItem">
      <img className='imagee' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ-W4DwnXZnUTZKz5jX4d_nj5duarED0nR7w&usqp=CAU" alt="" />

        <div className="featureTitle">
          <h1>Karachi</h1>
          <h3>{data[1]} Properties</h3>
        </div>
      </div>

      <div className=" col-sm featuredItem">
      <img className='imagee' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmzCl4lSfrNsC0Nv-AVkeRuzWAe_bZGkMr6A&usqp=CAU" alt="" />

        <div className="featureTitle">
          <h1>Islamabad</h1>
          <h3>{data[2]} Properties</h3>
        </div>
      </div></>)}
    </div>

    
  )
}
