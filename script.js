let container = document.createElement("div");
container.classList.add("container");
document.body.append(container);


let row = document.createElement("div");
row.classList.add("row");
container.append(row);


let cardTop = document.createElement("div");
cardTop.classList.add("col-12");
row.append(cardTop);


let cardLeft = document.createElement("div");
cardLeft.classList.add("col-4");
row.append(cardLeft);


let cardCenter = document.createElement("div");
cardCenter.classList.add("col-4");
row.append(cardCenter);


let cardRight = document.createElement("div");
cardRight.classList.add("col-4");
row.append(cardRight);
