import React from "react";

function Home(props) {
    return <div>
        <h1>Welcome to Bank of React!</h1>
        {props.currentBalance}
    </div>
}
export default Home;