let kgRef= document.getElementById("kg");
let gmRef=document.getElementById("gm");
let milliRef=document.getElementById("milli");

let convertFromKg = () =>{                                          // this is a function only created with arrow function
    let kg=kgRef.value;
    gmRef.value=(kg*1000).toFixed(2);
    milliRef.value=(kg*1000000).toFixed(2);
};
kgRef.addEventListener("input", convertFromKg);

let convertFromGm = () => {
    let gm=gmRef.value;
    kgRef.value=(gm/1000).toFixed(2);
    milliRef.value=(gm*1000).toFixed(2);
};
gmRef.addEventListener("input" ,convertFromGm);

let convertFromMilli = () => {
    let milli= milliRef.value;
    kgRef.value=(milli/1000000).toFixed(2);
    gmRef.value=(milli/1000).toFixed(2);
};
milliRef.addEventListener("input", convertFromMilli);