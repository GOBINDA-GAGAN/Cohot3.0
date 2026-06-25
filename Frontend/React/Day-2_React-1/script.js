import react from "react"


console.log("hello ");

let rootElement= document.querySelector("#root")
const h1=React.createElement("h1",{},"Hello this is day 2 from React-core");

let root = ReactDOM.createRoot(rootElement).render(h1);