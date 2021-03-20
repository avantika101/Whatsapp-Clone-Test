import React from 'react';
import { useParams } from "react-router-dom";

function Test() {
    const { testvar } = useParams();
    console.log("test-var is : "+testvar);

    return (
        <h1>hello from test</h1>
    );
}

export default Test;