// import PrefixTree from "./PrefixTree"

const tree = new PrefixTree;

var input = document.getElementById("input")
var searchButton = document.getElementById("search-web")
var tab = document.getElementById("recent-result")
var inputValue = ""

input.addEventListener("focusin", function(e) {
    e.preventDefault()

    var child = tab.lastElementChild;  
    while (child) { 
        tab.removeChild(child); 
        child = tab.lastElementChild; 
    } 
    
    const recent = tree.logAllWords(this.value)
    console.log(recent)
    if (recent.length === 0) {
        document.getElementById("tab-title").innerHTML = "No Search History"
        document.getElementById("main-tab").style["height"] = 0
    }else {
        document.getElementById("tab-title").innerHTML = "Recent Search"
        document.getElementById("main-tab").style["height"] = `calc(calc(var(--sh) / 2) * ${recent.length + 1})`

    }
    recent.map(function(element,index) {
        let div1 = document.createElement("div");
        div1.setAttribute('class', `li li-${index+1 > 3 ? 3 : index+1}`);

        let div2 = document.createElement("div");
        div2.setAttribute('class', `li-icon`);

        let icon = document.createElement("i");
        icon.setAttribute('data-feather', "search");
        icon.setAttribute('class', "icon");

        
        let div3 = document.createElement("div");
        div3.setAttribute('class', `li-text`);
        div3.innerHTML = element;   
        
        div2.appendChild(icon)
        div1.appendChild(div2)
        div1.appendChild(div3)

        tab.appendChild(div1)
    })
})

input.addEventListener("focusout", function(e) {
    e.preventDefault()

    document.getElementById("main-tab").style["height"] = 0
})


input.addEventListener("input", function(e) {
    e.preventDefault()
    // console.log(this.value)
    inputValue = this.value

    var child = tab.lastElementChild;  
    while (child) { 
        tab.removeChild(child); 
        child = tab.lastElementChild; 
    } 

    const recent = tree.logAllWords(inputValue)
    console.log(recent)
    if (recent.length === 0) {
        document.getElementById("tab-title").innerHTML = "No Search History"
        document.getElementById("main-tab").style["height"] = 0
    } else {
        document.getElementById("tab-title").innerHTML = "Recent Search"
        document.getElementById("main-tab").style["height"] = `calc(calc(var(--sh) / 2) * ${recent.length + 1})`
    }
    recent.map(function(element,index) {
        let div1 = document.createElement("div");
        div1.setAttribute('class', `li li-${index+1 > 3 ? 3 : index+1}`);

        let div2 = document.createElement("div");
        div2.setAttribute('class', `li-icon`);

        let icon = document.createElement("i");
        icon.setAttribute('data-feather', "search");
        icon.setAttribute('class', "icon");

        
        let div3 = document.createElement("div");
        div3.setAttribute('class', `li-text`);
        div3.innerHTML = element;   
        
        div2.appendChild(icon)
        div1.appendChild(div2)
        div1.appendChild(div3)

        tab.appendChild(div1)
    })
})

searchButton.addEventListener("click",function(e) {
    e.preventDefault()

    if (inputValue !== "" ) {
        const recent = tree.logAllWords(inputValue) 
        if(!recent.includes(inputValue)){
            tree.addWord(inputValue)
        }
    }
    
    input.value = ""
    document.getElementById("placeholder").style["opacity"] = 100
    
})