var mkDOM = function(tag, props ={}){
    if(tag === 'script' || tag === 'style') {
        throw Error("Sorry script and style tags are not allowed");
    }
    const element =  document.createElement(tag);
    Object.entries(props).forEach(([k ,v]) => {
        element.setAttribute(k ,v)
    })
    return {
        element,
        markup: () => {
            return element.outerHTML;
        },
        append(node) {
            if(node.element){
                element.appendChild(node.element);
            }else{

                element.appendChild(node);
            }
            return this;
        },
        data(key , value){
            element.dataset[key] = value
        },
        data(key){
            return element.dataset[key];
        },
        content(text) {
            element.textContent = text;
            return this;
        },
        content() {
            return element.textContent;
        },
        attr(key , value) {
            element.setAttribute(key , value);
            return this;
        },
        attr(key){
            return element.getAttribute(key)
        },
        css(attr , value){
            element.style[attr] = value;
            return this;
        },
        css(attr){
            return element.style[attr] = value;
        },
        on(event , func){
            if(typeof func === 'string'){
                element.setAttribute('on'+ event , func) 
            }else{

                element['on'+ event] = func;
            }
            return this;
        },
        appendArray(arr , func){
            arr.forEach(e => this.append(func(e)));
            return this;
        }
    }
}
