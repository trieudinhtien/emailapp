import React from 'react'

import {
    useParams
  } from "react-router-dom";
export const EmailDetailComponent = () => {
    let { folder } = useParams();
    console.log("id:", folder)
    return (
        <div>
            EmailDetailComponent
        </div>
    )
}
