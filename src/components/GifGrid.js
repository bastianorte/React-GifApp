import React from 'react'
import { useFetchGifs } from '../hooks/useFetchHooks'
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

const {data:images,loading} = useFetchGifs(category);



    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>

        { loading && <p className="animate__animated animate__flashs">loading</p> }

        <div className="cardgrid">

                {
                    images.map( img => (
                        <GifGridItem 
                        key={img.id}
                        {...img}
                        />
                    ))
                }

        </div>
        </>
    )
}
