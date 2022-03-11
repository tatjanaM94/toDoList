let list={
     inputItem: document.querySelector("#item"),
     btn:document.querySelector("#btn"),
     itemList:document.querySelector(".itemList"),

     displayItem:function(){
         this.itemList.innerHTML += "<li>"+ this.inputItem.value;
         this.inputItem.value = "";
     },
 
};

list.btn.addEventListener("click",function(){
     list.displayItem();
     console.log()
     
});
list.inputItem.addEventListener('keyup',function(){
    if (event.key == "Enter") {
     list.displayItem();
    }
})


