// Selector

let items = document.querySelector("#items");
let quantity = document.querySelector("#quantity");
let inputForm = document.querySelector("#inputForm");
let tableBody = document.querySelector("#tableBody");
let totalCostHtml = document.querySelector("#totalCostHtml");

// functions

function createNewOption(text, value){
    return new Option(text,value);
}

function totalCostCal(){
    let costs = document.querySelectorAll(".cost");
    totalCostHtml.innerText = [...costs].reduce((pv,cv) => pv + Number(cv.innerText), 0) + "¥";
}

function del(event){
    if (confirm("Are you sure to delete?")){
        event.target.parentElement.parentElement.parentElement.remove();
        totalCostCal();
    }
}

// process

products.forEach(function (product){
    items.append(createNewOption(product.name, product.id))
})

inputForm.addEventListener("submit",function (e){

    e.preventDefault();
    let selectedProduct = products.find(product => product.id === Number(items.value));

    // create table with value when button clicked
    let newTr = document.createElement("tr");
    let cost = selectedProduct.price * quantity.value;
    newTr.innerHTML = `
                    <td class="text-center">    
                        <button class="btn btn-danger text-white btn-sm" id="delBtn" onclick="del(event)">
                            <i class="bi-trash"></i>
                        </button>
                    </td>
                    <td>${selectedProduct.name}</td>
                    <td class="text-end">${selectedProduct.price} ¥</td>
                    <td class="text-end">${quantity.value}</td>
                    <td class="text-end cost">${cost}</td>`;

    tableBody.append(newTr);
    inputForm.reset();

    totalCostCal();
})
