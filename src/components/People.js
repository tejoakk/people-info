import React from 'react'
import { Link } from 'react-router-dom'

export const People = ({ people, excerpt }) => (
         <article className={excerpt ? "post-excerpt" : "post"}>
           {excerpt && (
             <Link to={`/people/${people.id}`}>
               <h2>{people.firstName}</h2>
             </Link>
           )}
         </article>
       );
