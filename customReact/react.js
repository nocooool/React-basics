function customRender(reactElement, container){
    /*const domElement = document.createElement(reactElement.type)
    domElement.innerHTML =  reactElement.Children
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    container.appendChild(domElement)*/
    //above method is a basic method to create own react library

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.Children
    //using for-in loop for setAttribute to make it easy to create props
    for (const prop in reactElement.props) {
        if(prop === 'children') continue; //just a strict check to tackle a children key in props
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'htpps://google.com',
        target: '_blank'
    },
    Children: 'click me to visit google'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);