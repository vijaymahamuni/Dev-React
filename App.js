import React from "react";
import ReactDOM from "react-dom/client";


const Elements=()=>(
    <h1>Dev Role</h1>

)

const Heading = () => {
    return (
        <div>
        <Elements/>
        {Elements()}
            <h1>
                Hello Developer Vijay
            </h1>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Heading />
);
