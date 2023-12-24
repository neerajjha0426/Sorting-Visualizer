//Variables (BE CAREFUL THESE MIGHT BE USED IN OTHER JS FILES TOO)
var inp_as = document.getElementById('a_size'),
    array_size = inp_as.value;
var inp_gen = document.getElementById("generating");
var inp_aspeed = document.getElementById("a_speed");
var last_array = document.getElementById("last-array");
let last_array_size = array_size;
//var array_speed=document.getElementById('a_speed').value;

var butts_algos = document.querySelectorAll(".sorting-algo button");

var div_sizes = [];
var temp = []
var divs = [];
let previous = [];
var margin_size;
var cont = document.getElementById("array_container");
cont.style = "flex-direction:row";

//Array generation and updation.

inp_gen.addEventListener("click", generate_array);
last_array.addEventListener("click", generate_last_array);
inp_as.addEventListener("input", update_array_size);

function generate_array() {

    previous = [];
    for (let i = 0; i < div_sizes.length; i++) {
        previous.push(temp[i]);
    }
    cont.innerHTML = "";
    console.log("count1", cont);

    for (var i = 0; i < array_size; i++) {
        div_sizes[i] = Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min)) + 10;
        temp[i] = div_sizes[i];
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size = 0.1;
        divs[i].style = " margin:0% " + margin_size + "%; background-color:blue; width:" + (100 / array_size - (2 * margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
    // console.log('previous', previous, array_size);
    console.log('new', div_sizes, array_size)
}


function generate_last_array() {
    cont.innerHTML = "";
    divs = []
    console.log("count", cont);
    // last_array_size = previous.length;
    for (let i = 0; i < array_size; i++) {
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size = 0.1;
        divs[i].style = " margin:0% " + margin_size + "%; background-color:blue; width:" + (100 / array_size - (2 * margin_size)) + "%; height:" + (previous[i]) + "%;";
    }
    console.log('previous', previous, array_size);
}

function update_array_size() {
    array_size = inp_as.value;
    generate_array();
}

window.onload = update_array_size();

//Running the appropriate algorithm.
for (var i = 0; i < butts_algos.length; i++) {
    butts_algos[i].addEventListener("click", runalgo);
}

function disable_buttons() {
    for (var i = 0; i < butts_algos.length; i++) {
        butts_algos[i].classList = [];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled = true;
        inp_as.disabled = true;
        inp_gen.disabled = true;
        inp_aspeed.disabled = true;
    }
}

function runalgo() {
    disable_buttons();
    let date1=new Date(); 
    let time1=date1.getTime(); 
    this.classList.add("butt_selected");
    switch (this.innerHTML) {
        case "Bubble":
            Bubble();
            break;
        case "Selection":
            Selection_sort();
            break;
        case "Insertion":
            Insertion();
            break;
        case "Merge":
            Merge();
            break;
        case "Quick":
            Quick();
            break;
        case "Heap":
            Heap();
            break;
    }
    let date2=new Date(); 
    let time2=date2.getTime(); 
    document.getElementById("Time-diff").innerText=time2-time1 + "ms";
}
