// BEHIND THE SCENE: React work like this
// When give an element it will evaluate same like reactElement like tree structure.


function customRender(reactElement, container){

 /* Version:1
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
*/

// Version:2

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)
}


// first thing to do
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click here to visit google'
}

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)




