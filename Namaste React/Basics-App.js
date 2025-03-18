import React from 'react';
import ReactDOM from 'react-dom/client';
// Create h1 tag using React
// createElement will return an object of h1 with attributes defined in
// 2nd parameter and children defined in 3rd parameter

/**
 * <div>
 *   <div>
 *       <h1>
 *           Hi i am h1 tag
 *       </h1>
 *      <h1>
 *          Hi I am inside another h1 tag
 *      </h1>
 *   </div>
 * </div>
*/
// This is a React element
const heading = React.createElement("div", {
    id: "parent",
},
    React.createElement("div", { id: "child" },
        [React.createElement("h1", { id: "heading" }, "Hi I am Namaste react tag"),
        React.createElement("h1", { id: "heading2" }, "Hi I am inside another h1 tag")
        ]
    ));



// Component Composition
const HeadingComponent = () => {
    return <>Namaste React Functional HeadingComponent
        <br></br>
        {heading}
        Title is: <Title/>
        2nd time calling the title component: {Title()}
        {/**This is Javascript below */}
        I am a number: {number}
        <FooterComponent/>
    </>
}
// Another way of writin a functional component without the {}
const HeadingComponent2 = () => <h1 className="heading">Another Functioanl Heading component</h1>;

const FooterComponent = function() {
    return (
        <h5>Footer Component is here</h5>
    )
}

const Title = () => <h3>Title Component</h3>
// This below line will also create a React element using JSX
const jsx = <h1>I am a heading inside jsx</h1>
const root = ReactDOM.createRoot(rootElem);
// rootElem.appendChild(heading);

const number = 1000;

root.render(<HeadingComponent/>);