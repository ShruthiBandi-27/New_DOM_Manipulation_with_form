
let mybr = document.createElement("br");

let h1 = document.createElement("h1");
h1.setAttribute("id","title");
h1.innerHTML = "DOM Manipulation with Forms";
document.body.appendChild(h1);

let des = document.createElement("p");
des.setAttribute("id","description");
des.innerHTML = "Created form using DOM and store form-data in table below on form submission";
document.body.appendChild(des);

let myPara = document.createElement("p");
myPara.innerHTML = "FORM";
myPara.style.font = "bold 20px arial";
document.body.appendChild(myPara);
let mydiv = document.createElement("div");
mydiv.setAttribute("id","mydivId");
document.body.appendChild(mydiv);

let mydivObj = document.getElementById("mydivId");
mydiv.style.border = "2px solid black";
mydiv.style.padding = "14px";
mydiv.style.width = "50%";

let myform = document.createElement("form");
myform.setAttribute("method","post");
myform.setAttribute("id","form");
mydiv.appendChild(myform);

//First Name
let fnDiv= document.createElement("div");
fnDiv.setAttribute("id","fnDiv");
fnDiv.setAttribute("class","form-group");
myform.appendChild(fnDiv);

let fnLabel = document.createElement("label");
fnLabel.setAttribute("for","fnLabel");
fnLabel.innerHTML = "First Name:<br>";
fnDiv.appendChild(fnLabel);

let fname = document.createElement("input");
fname.setAttribute("type","text");
fname.setAttribute("id","first-name");
fname.setAttribute("required",true);
fname.setAttribute("placeholder","first Name");
fnDiv.appendChild(fname);

//Last Name
let lnDiv= document.createElement("div");
lnDiv.setAttribute("id","lnDiv");
lnDiv.setAttribute("class","form-group");
myform.appendChild(lnDiv);

let lnLabel = document.createElement("label");
lnLabel.setAttribute("for","lnLabel");
lnLabel.innerHTML = "<br>Last Name:<br>";
lnDiv.appendChild(lnLabel);

let lname = document.createElement("input");
lname.setAttribute("type","text");
lname.setAttribute("id","last-name");
lname.setAttribute("required",true);
lname.setAttribute("placeholder","last Name");
lnDiv.appendChild(lname);

//Address
let adrsDiv= document.createElement("div");
adrsDiv.setAttribute("id","adrsDiv");
adrsDiv.setAttribute("class","form-group");
myform.appendChild(adrsDiv);

let adrsLabel = document.createElement("label");
adrsLabel.setAttribute("for","adrsLabel");
adrsLabel.innerHTML = "<br>Address:<br>";
adrsDiv.appendChild(adrsLabel);

let addressEle = document.createElement("textarea");
addressEle.setAttribute("id","address");
addressEle.setAttribute("placeholder","address");
adrsDiv.appendChild(addressEle);

//Pincode
let pinDiv= document.createElement("div");
pinDiv.setAttribute("id","pinDiv");
pinDiv.setAttribute("class","form-group");
myform.appendChild(pinDiv);

let pinLabel = document.createElement("label");
pinLabel.setAttribute("for","pinLabel");
pinLabel.innerHTML = "<br>Pin Code:<br>";
pinDiv.appendChild(pinLabel);

let pincodeEle = document.createElement("input");
pincodeEle.setAttribute("type","text");
pincodeEle.setAttribute("id","pincode");
pincodeEle.setAttribute("required",true);
pincodeEle.setAttribute("placeholder","Enter your Pincode");
pinDiv.appendChild(pincodeEle);

//Gender
let genDiv= document.createElement("div");
genDiv.setAttribute("id","genDivId");
myform.appendChild(genDiv);

let genLabel = document.createElement("label");
genLabel.setAttribute("for","genLabelId");
genLabel.innerHTML = "<br>Gender:<br>";
genDiv.appendChild(genLabel);

let male = document.createElement("input");
male.setAttribute("type","radio");
male.setAttribute("name","genName");
male.setAttribute("id","maleId");
male.setAttribute("value","Male");
genDiv.appendChild(male);
let maleLabel = document.createElement("label");
maleLabel.setAttribute("for","maleLabel");
maleLabel.innerHTML = "male";
genDiv.appendChild(maleLabel);

let female = document.createElement("input");
female.setAttribute("type","radio");
female.setAttribute("name","genName");
female.setAttribute("id","femaleId");
female.setAttribute("value","Female");
genDiv.appendChild(female);
let femaleLabel = document.createElement("label");
femaleLabel.setAttribute("for","femaleLabel");
femaleLabel.innerHTML = "female";
genDiv.appendChild(femaleLabel);

//Choice of food
let chDiv= document.createElement("div");
chDiv.setAttribute("id","chDivId");
myform.appendChild(chDiv);

let chLabel = document.createElement("label");
chLabel.setAttribute("for","chLabel");
chLabel.innerHTML = "<br>Choice of food:<br>(choose atleast two)<br>";
chDiv.appendChild(chLabel);

//NorthIndian
let northIndian = document.createElement("input");
northIndian.setAttribute("type","checkbox");
northIndian.setAttribute("id","northIndian");
northIndian.setAttribute("name","foodName");
northIndian.setAttribute("value","northIndianFood");
chDiv.appendChild(northIndian);
let northLabel = document.createElement("label");
northLabel.setAttribute("for","northLabel");
northLabel.innerHTML = "North Indian<br>";
chDiv.appendChild(northLabel);

//SouthIndian
let southIndian = document.createElement("input");
southIndian.setAttribute("type","checkbox");
southIndian.setAttribute("id","southIndian");
southIndian.setAttribute("name","foodName");
southIndian.setAttribute("value","southIndianFood");
chDiv.appendChild(southIndian);
let southLabel = document.createElement("label");
southLabel.setAttribute("for","southLabel");
southLabel.innerHTML = "South Indian<br>";
chDiv.appendChild(southLabel);

//Chinese
let chinese = document.createElement("input");
chinese.setAttribute("type","checkbox");
chinese.setAttribute("id","chinese");
chinese.setAttribute("name","foodName");
chinese.setAttribute("value","ChineseFood");
chDiv.appendChild(chinese);
let chineseLabel = document.createElement("label");
chineseLabel.setAttribute("for","chineseLabel");
chineseLabel.innerHTML = "Chinese<br>";
chDiv.appendChild(chineseLabel);

//Japnese
let japnese = document.createElement("input");
japnese.setAttribute("type","checkbox");
japnese.setAttribute("id","japnese");
japnese.setAttribute("name","foodName");
japnese.setAttribute("value","JapaneseFood");
chDiv.appendChild(japnese);
let japneseLabel = document.createElement("label");
japneseLabel.setAttribute("for","japneseLabel");
japneseLabel.innerHTML = "Japnese<br>";
chDiv.appendChild(japneseLabel);

//Italian
let italian = document.createElement("input");
italian.setAttribute("type","checkbox");
italian.setAttribute("id","italian");
italian.setAttribute("name","foodName");
italian.setAttribute("value","ItalianFood");
chDiv.appendChild(italian);
let italianLabel = document.createElement("label");
italianLabel.setAttribute("for","italianLabel");
italianLabel.innerHTML = "Italian<br>";
chDiv.appendChild(italianLabel);

//State
let stateDiv= document.createElement("div");
stateDiv.setAttribute("id","stateDiv");
myform.appendChild(stateDiv);

let stateLabel = document.createElement("label");
stateLabel.setAttribute("for","stateLabel");
stateLabel.innerHTML = "<br>State:<br>";
stateDiv.appendChild(stateLabel);

let state = document.createElement("input");
state.setAttribute("type","text");
state.setAttribute("id","stateId");
stateDiv.appendChild(state);

//Country
let couDiv= document.createElement("div");
couDiv.setAttribute("id","couDiv");
myform.appendChild(couDiv);

let couLabel = document.createElement("label");
couLabel.setAttribute("for","stateLabel");
couLabel.innerHTML = "<br>Country:<br>";
couDiv.appendChild(couLabel);

let country = document.createElement("input");
country.setAttribute("type","text");
country.setAttribute("id","countryId");
couDiv.appendChild(country);

//Submit

let subDiv= document.createElement("div");
subDiv.setAttribute("id","subDiv");
myform.appendChild(subDiv);
myform.appendChild(mybr);

let btn = document.createElement("button");
btn.setAttribute("type","submit");
btn.setAttribute("id","submit");
btn.classList.add("btn","btn-primary");
btn.innerHTML = "Submit";
myform.appendChild(btn);

//table
let myhr = document.createElement("hr");
document.body.appendChild(myhr);

let tableDiv = document.createElement("div");
tableDiv.setAttribute("id","tableDivId");
document.body.appendChild(tableDiv);

let mytable = document.createElement("table");
mytable.setAttribute("border","1");
mytable.setAttribute("id","tableId");
mytable.setAttribute("class","table");
mytable.style.borderCollapse= "collapse";
tableDiv.appendChild(mytable);

let thead = document.createElement("thead");
mytable.appendChild(thead);

let row1 = document.createElement("tr");
thead.appendChild(row1);

let col1 = document.createElement("th");
col1.innerHTML = "First Name";
row1.appendChild(col1);
let col2 = document.createElement("th");
col2.innerHTML = "Last Name";
row1.appendChild(col2);
let col3 = document.createElement("th");
col3.innerHTML = "Address";
row1.appendChild(col3);
let col4 = document.createElement("th");
col4.innerHTML = "Pincode";
row1.appendChild(col4);
let col5 = document.createElement("th");
col5.innerHTML = "Gender";
row1.appendChild(col5);
let col6 = document.createElement("th");
col6.innerHTML = "Food";
row1.appendChild(col6);
let col7 = document.createElement("th");
col7.innerHTML = "State";
row1.appendChild(col7);
let col8 = document.createElement("th");
col8.innerHTML = "Country";
row1.appendChild(col8);

//let allth = document.getElementsByTagName("th");
//let allth = document.getElementsByTagName("tr");
//allth.style.padding = "50px";
let targetTable = document.getElementById("tableId");
targetTable.cellPadding = "10";

let tbody = document.createElement("tbody");
mytable.appendChild(tbody);
//form-submit
myform.addEventListener("submit",(event) => {
    event.preventDefault();
    let fnValue = document.getElementById("first-name").value;
    let lnValue = document.getElementById("last-name").value;
    let addressValue = document.getElementById("address").value;
    let pinValue = document.getElementById("pincode").value;
    let genObj = document.getElementsByName("genName");
    let genValue;
    for(let i=0; i<genObj.length; i++){
        if(genObj[i].checked)
            genValue = genObj[i].value;
    }
    //let foodValue = document.getElementById("first-name").value;
    let foodObj = document.getElementsByName("foodName");
    let foodValue = "";
    for(let i=0; i < foodObj.length; i++){
        if(foodObj[i].checked)
            foodValue += foodObj[i].value;
            foodValue += " ";
    }
    
    
    let stateValue = document.getElementById("stateId").value;
    let couValue = document.getElementById("countryId").value;
    
    
    let newRow = document.createElement("tr");
    tbody.appendChild(newRow);

    let fntd = document.createElement("td");
    fntd.innerHTML = fnValue;
    newRow.appendChild(fntd);

    let lntd = document.createElement("td");
    lntd.innerHTML = lnValue;
    newRow.appendChild(lntd);

    let addtd = document.createElement("td");
    addtd.innerHTML = addressValue;
    newRow.appendChild(addtd);

    let pintd = document.createElement("td");
    pintd.innerHTML = pinValue;
    newRow.appendChild(pintd);

    let gentd = document.createElement("td");
    gentd.innerHTML = genValue;
    newRow.appendChild(gentd);

    let foodtd = document.createElement("td");
    foodtd.innerHTML = foodValue;
    newRow.appendChild(foodtd);

    let statetd = document.createElement("td");
    statetd.innerHTML = stateValue;
    newRow.appendChild(statetd);

    let coutd = document.createElement("td");
    coutd.innerHTML = couValue;
    newRow.appendChild(coutd);

    document.getElementById("form").reset();
    // alert(`${genValue[0]}`);
    // console.log(`${genValue}`);
});












