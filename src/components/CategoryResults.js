import React from 'react'
import {useParams} from "react-router-dom"
import {useEffect , useState} from "react"
import getDataFromAPI from '../services/getDataFromAPI'
import Recipe from "./Recipe"
import { v4 as uuidv4 } from 'uuid'; 

const CategoryResults = () => {
    
    const {query} = useParams()
    console.log(query)
    const [categoryResults, setCategoryResults] = useState(undefined) 
    
    
    useEffect(()=>{
        (async ()=>{
            const data = await getDataFromAPI(query)
            console.log("This is the data",data)
            setCategoryResults(data)
        })()
    },[])

    
    return (
        <div>
            
            {categoryResults?.data.hits.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
        </div>
    )
}


export default CategoryResults;