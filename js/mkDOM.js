var mkDOM = function (tag, props = {}) {
  if (tag === "script" || tag === "style") {
    throw Error("Sorry script and style tags are not allowed");
  }
  const element = document.createElement(tag);
  Object.entries(props).forEach(([k, v]) => {
    element.setAttribute(k, v);
  });
  return {
    element,
    markup: () => {
      return element.outerHTML;
    },
    append(node) {
      if (node.element) {
        element.appendChild(node.element);
      } else {
        element.appendChild(node);
      }
      return this;
    },
    data(key, value) {
      if (!value) return element.dataset[key];
      else element.dataset[key] = value;
      return;
    },
    content: function (text) {
      if (!text) return element.textContent;
      else element.textContent = text;

      return this;
    },
    attr(key, value) {
      if (!value) return element.getAttribute(key);
      else element.setAttribute(key, value);
      return this;
    },
    css(attr, value) {
      if (!value) return (element.style[attr] = value);
      else element.style[attr] = value;
      return this;
    },
    on(event, func) {
      if (typeof func === "string") {
        element.setAttribute("on" + event, func);
      } else {
        element["on" + event] = func;
      }
      return this;
    },
    appendArray(arr, func) {
      arr.forEach((e) => this.append(func(e)));
      return this;
    },
    clear() {
      const children = Array.from(element.children);
      children.forEach((e) => {
        element.removeChild(e);
      });

      element.childNodes.forEach((e) => {
        element.removeChild(e);
      });

      return this;
    },
    remove() {
      element.remove();
    },
    AppendTo(_selector) {
      document.querySelector(_selector).appendChild(element);
      return this;
    },
  };
};
