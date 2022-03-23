let list = {
     inputItem: document.querySelector("#item"),
     btn: document.querySelector("#btn"),
     itemList: document.querySelector(".itemList"),
     paragraph:document.createElement('p'),


     displayItem: function () {

          // this.itemList.innerHTML += "<p>"+ this.inputItem.value;
          // this.inputItem.value = "";

          // console.log(this.itemList);

          this.paragraph.innerHTML = this.inputItem.value;
          this.itemList.add(this.paragraph);
     },
     checkItems: function () {

     },

};

list.btn.addEventListener("click", function () {
     list.displayItem();
});
list.inputItem.addEventListener('keyup', function () {
     if (event.key == "Enter") {
          list.displayItem();
     }
});



