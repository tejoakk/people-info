import React from "react";

export const Details = ({ details }) => (
         <article className="details">
           <p>
             <img
               alt="wa"
               width="300"
               height="300"
               src={details.imageurl}
             ></img>
             <li>
               Name :
               {details.firstName +
                 " " +
                 details.middleName +
                 " " +
                 details.lastName}
             </li>
             <li> DOB : {details.dob}</li>
           </p>
         </article>
       );
