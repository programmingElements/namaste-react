/**
 * <div id="parent">
 *    <div id="child">
 *       <h1></h1>
 *       <h2></h2>
 *    </div>
 *    <div id="child2">
 *       <h1></h1>
 *       <h2></h2>
 *    </div>
 * </div>
 */

const parent = React.createElement(
    "div", 
    {id:"parent"},
    [
        React.createElement(
            "div",
            {  key: "child" , id: "child"},
            [
                React.createElement(
                "h1",
                {key: "heading1"},
                "I'm an h1 tag"
            ),
            React.createElement(
                "h2",
                {key: "heading2"},
                "I'm an h2 tag"
            )
            ]
        ),
        React.createElement(
            "div",
            { key: "child2", id: "child2"},
            [
                React.createElement(
                "h1",
                {key: "heading1"},
                "I'm an h1 tag"
            ),
            React.createElement(
                "h2",
                {key: "heading2"},
                "I'm an h2 tag"
            )
            ]
        )
    ] 
);


console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);