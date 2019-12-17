"use strict";
import Services from "../Services/Services";
import Globals from "../Globals/Globals";

const util = {
  math: {
    createRandomNumber(max, min, currentNumber) {
      var newNumber = Math.floor(Math.random() * (max - min) + min);
      if (currentNumber !== undefined) {
        if (newNumber === currentNumber) {
          newNumber = util.math.createRandomNumber(
            Globals.game.allBlocks.length,
            0,
            currentNumber
          );
        }
      } else {
        newNumber = util.math.createRandomNumber(max, min);
      }
      return newNumber;
    },
    sum(acc, currentValue) {
      return acc + currentValue;
    },
    multiply(acc, currentValue) {
      return acc * currentValue;
    },
    subtract(currentValue, acc) {
      return currentValue - acc;
    },
    divide(currentValue, acc) {
      return currentValue / acc;
    },
    getTodaysDate() {
      const date = new Date();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const year = date.getFullYear();
      const today = String(`${month}/${day}/${year}`);
      return today;
    },
    netValue(gross, ...deductions) {
      return gross - math.sum(...deductions);
    },
    netValue_tax(gross, ...taxes) {
      // how to use map for this?
      for (var i = 0; i < taxes.length; i++) {
        taxes[i] > 1 ? (taxes[i] = taxes[i] / 100) : false;
      }
      return math.subtract(gross, math.multiply(gross, math.sum(...taxes)));
    }
  },
  str: {
    addCommas(content) {
      typeof content !== "string" ? (content = String(content)) : false;
      let formatted = content.replace(/[\D\s\._\-]+/g, "");
      formatted ? (formatted = parseInt(formatted, 10)) : 0;
      return formatted.toLocaleString("en-US");
    },
    check_alpha(content) {
      const alpha = /^[a-zA-Z]*$/;
      return alpha.test(content);
    },
    check_alphanumeric(content) {
      const alphanumeric = /^[a-z0-9]+$/i;
      return alphanumeric.test(content);
    },
    check_numeric(content) {
      const numeric = /^[0-9]+$/;
      return numeric.test(content);
    },
    currency(content) {
      // future add on: use str.toFixed(2) //returns 123.45 in case user needs .xx factored in - also can put in an option to round up
      typeof content !== "string" ? (content = String(content)) : false;
      if (content === "$" || content === "") {
        return content.substr(1, content.length);
      } else {
        if (str.check_numeric(str.removeNonNumeric(content))) {
          return content.replace(content, "$" + str.addCommas(content));
        }
      }
    },
    percent(content) {
      if (event.key !== "Backspace") {
        if (str.check_numeric(str.removeNonNumeric(content))) {
          return content.replace(content, str.addCommas(content) + "%");
        }
      } else {
        return content.substr(0, content.length);
      }
    },
    removeCommas(content) {
      return content.replace(/,/g, "");
    },
    removeNonNumeric(content) {
      return content.replace(/\D/g, "");
    },
    titleCase(content) {
      content = content.toLowerCase();
      content = content.charAt(0).toUpperCase() + content.slice(1);
      return content;
    }
  },
  cookies: {
    getCookie(name) {
      var start = document.cookie.lastIndexOf(name + "=");
      var len = start + name.length + 1;
      if (!start && name != document.cookie.substring(0, name.length))
        return null;
      if (start == -1) return null;
      var end = document.cookie.indexOf(";", len);
      if (end == -1) end = document.cookie.length;
      return unescape(document.cookie.substring(len, end));
    },
    setCookie(name, value, maxage, expires, path, domain, secure) {
      var dt = expires ? new Date(expires) : "";
      document.cookie =
        name +
        "=" +
        escape(value) +
        (maxage ? ";max-age=" + maxage : "") +
        (dt ? ";expires=" + dt.toGMTString() : "") +
        (path ? ";path=" + path : "") +
        (domain ? ";domain=" + domain : "") +
        (secure ? ";secure" : "");
    },
    delCookie(name) {
      document.cookie =
        name + "=; expires=Thu, 01-Jan-70 00:00:01 GMT" + "; path=/";
    }
  },
  elementLib: {
    bindElements(bindFrom) {
      const bindFromContent = bindFrom.value || bindFrom.textContent;
      const bindTo = document.querySelector(
        `[bindTo=${bindFrom.getAttribute("bindfrom")}]`
      );
      if (bindTo.value) {
        if (bindFromContent !== "") {
          bindTo.value = bindFromContent;
        } else {
          bindTo.value = bindTo.getAttribute("initialValue");
        }
      } else {
        if (bindFromContent !== "") {
          bindTo.textContent = bindFromContent;
        } else {
          bindTo.textContent = bindTo.getAttribute("initialValue");
        }
      }
    },
    buildElement(obj) {
      var element = document.createElement(obj.type);
      obj.attrs != ""
        ? util.elementLib.setAttributes(element, obj.attrs)
        : false;
      obj.content != "" ? (element.textContent = obj.content) : false;
      obj.appendTo != "" ? obj.appendTo.appendChild(element) : false;
      obj.setEvent != "" ? setEvent(element, obj.setEvent) : false;

      return element;

      // ******* Scoped Function(s) -> {buildElement}
      function setEvent(element, functionInfo) {
        element.addEventListener(functionInfo.functionType, function() {
          functionInfo.functionName(functionInfo.argument);
        });
      }
    },
    classChange(element, directive, ...className) {
      directive === "add"
        ? element.classList.add(...className)
        : element.classList.remove(...className);
    },
    classCheck(element, className) {
      if (element.classList.contains(className)) {
        return true;
      } else {
        return false;
      }
    },
    classChangeDelay(elements, speed, ...className) {
      if (elements.length) {
        elements.forEach(element => {
          element.classList.add(...className);
          setTimeout(() => {
            element.classList.remove(...className);
          }, speed);
        });
      } else {
        elements.classList.add(...className);
        setTimeout(() => {
          elements.classList.remove(...className);
        }, speed);
      }
    },
    toArray(values) {
      if (Array.from) {
        return Array.from(values);
      } else {
        var newArray = [];
        for (var i = 0; i < values.length; i++) {
          newArray.push(values[i]);
        }
        return newArray;
      }
    },
    filter_attrs(element, ...toMatch) {
      let attrs = util
        .convertToArray(element.attributes)
        .map(attr => attr.nodeName);

      const filtered = attrs.filter(index => toMatch.includes(index));
      return filtered;
    },
    getAttrValues(element, attrs) {
      let filteredValues = [];
      attrs.forEach(attr => {
        filteredValues.push(element.getAttribute(attr));
      });
      return filteredValues;
    },
    isEmptyObj(obj) {
      if (Object.entries(obj).length === 0 && obj.constructor === Object) {
        return true;
      } else {
        return false;
      }
    },
    getIndexByClass(elements, className) {
      elements.forEach(function(element) {
        if (element.classList.contains(className)) {
          const index = elements.indexOf(element);
        }
      });
      return index;
    },
    makeFile(content, fileType) {
      let newFile = null;
      var data = new Blob([JSON.stringify(content, null, 2)], {
        type: `${fileType}`
      });
      if (newFile !== null) {
        window.URL.revokeObjectURL(newFile);
      }
      newFile = window.URL.createObjectURL(data);
      return newFile;
    },
    objExists(val, obj) {
      for (var key in obj) {
        if (key === val) {
          return true;
        }
      }
    },
    setAttributes(el, attrs) {
      for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
      return el;
    },
    shuffleArray(array) {
      // Randomize array element order in-place: Durstenfeld shuffle algorithm.
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    }
  },
  timer: {
    t: "",
    counter: 3, // Set number to count down/up from
    timer_is_on: 0,
    timedCount: function(timerElement) {
      timerElement.innerHTML = util.timer.counter;
      util.timer.counter--; // -- to count down, ++ to count up
      util.timer.t = setTimeout(function() {
        util.timer.timedCount(timerElement);
      }, Globals.music.bpm[1]); // timer counts down at speed of song's bpm

      if (util.timer.counter < 1) {
        // if timer hits 0
        setTimeout(function() {
          util.timer.stopCount();
        }, 500);
      }
    },
    startCount: function() {
      if (!util.timer.timer_is_on) {
        util.timer.timer_is_on = 1;
        util.timer.timedCount(timerElement);
      }
    },
    stopCount: function() {
      clearTimeout(util.timer.t);
      util.timer.counter = 3;
      util.timer.timer_is_on = 0;
    }
  },
  setEvents: {
    elements: {
      dynamicElements: [].slice.call(document.querySelectorAll("[dynamic]")),
      bindingElements: [].slice.call(document.querySelectorAll("[bindFrom]")),
      formatElements: [].slice.call(document.querySelectorAll("[formatAs]")),
      stickyNavigation: document.querySelector("[stickyNav]")
    },
    methods: {
      init_stickyNav() {
        stickyNav(
          setEvents.elements.stickyNavigation,
          document.querySelector(".content")
        );
      },
      bindingElements() {
        // Set an attr of bindFrom="" on elements you want to trigger binding from.  Set bindTo="" to set the element to bind to.  Match the attr values
        setEvents.elements.bindingElements.forEach(bindingElement => {
          bindingElement.addEventListener(
            bindingElement.getAttribute("eventType"),
            function() {
              elementLib.bindElements(this);
            }
          );
        });
      },
      formatAs() {
        // Set attrs of eventType="" and  formatAs="" on elements that you want to format using str
        setEvents.elements.formatElements.forEach(formatElement => {
          formatElement.addEventListener(
            formatElement.getAttribute("eventType"),
            function(ev) {
              if (ev.target.value) {
                ev.target.value = str[formatElement.getAttribute("formatAs")](
                  this.value,
                  ev
                );
              } else {
                ev.target.textContent = str[
                  formatElement.getAttribute("formatAs")
                ](this.textContent, ev);
              }
            }
          );
        });
      },
      dynamicEvents() {
        util.setEvents.elements.dynamicElements.forEach(dynamicElement => {
          dynamicElement.addEventListener(
            dynamicElement.getAttribute("eventType"),
            function() {
              Services[dynamicElement.getAttribute("functionName")](
                this,
                event
              );
            }
          );
        });
      }
    }
  }
};

export default util;
