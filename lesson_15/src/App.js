import React from "react";
import Data from "./data/Data";
import Table from "./components/Table";


function App() {
    return (
        <>
            <h1>Курс валют</h1>
            <Table data={Data}/>
        </>
    )
}

export default App;
