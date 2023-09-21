import React from 'react'
import Box from './BoxUi';

function Output(props) {
    const boxes =props.movies.map(
        (item, index)=>{
            return <Box key={index} title={item.title} overview={item.release_date} rating={item.vote_average} image={item.poster_path} />
        }
    )
  return (
    <div className='w-full grid sm:grid-cols-2 md:grid-cols-6 gap-5 border-[#000]-3'>
     
      {boxes}
        
    </div>
  )
}

export default Output

