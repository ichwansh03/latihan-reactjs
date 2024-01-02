import React from "react";

function Student() {
    return <h2>I'm a college student</h2>
}

export default function College() {
    return (
        <>
            <h1>Who learn in my college</h1>
            <Student/>
        </>
    )
}