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
const heading = React.createElement("div", {
    id: "parent",
},
    React.createElement("div", { id: "child" },
        [React.createElement("h1", { id: "heading" }, "Hi I am h1 tag"),
        React.createElement("h1", { id: "heading2" }, "Hi I am inside another h1 tag")
        ]
    ));
const root = ReactDOM.createRoot(rootElem);
rootElem.appendChild(heading);
// root.render(heading);