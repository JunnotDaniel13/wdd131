const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function () {
  if (input.value.trim() !== "") {
    const li = document.createElement("li");

    const deleteButton = document.createElement("button");
    
    li.textContent = input.value.trim(); 
    
    deleteButton.textContent = "❌";
    
    deleteButton.setAttribute(
      "aria-label",
      `Remove ${input.value.trim()}`
    );
    
    li.append(deleteButton);
    
    list.append(li);
    
    deleteButton.addEventListener("click", function () {
      list.removeChild(li); 
      input.focus(); 
    });
    
    input.value = "";
  } else {
    
  }
  input.focus();
});


input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); 
    button.click(); 
  }
});
