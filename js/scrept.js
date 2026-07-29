let tumplate = document.querySelector(".tumplate")
let name = document.querySelector(".name")
let caption = document.querySelector(".caption")
let postbutton = document.querySelector(".postbutton")
let updatebutton = document.querySelector(".updatebutton")
let errorOne = document.querySelector(".errorOne")
let errorTwo = document.querySelector(".errorTwo")

let arr = []
let indexStore; 


postbutton.addEventListener("click", () => {
  errorOne.innerHTML = ""
  errorTwo.innerHTML = ""

  let namePattern = /^[a-zA-Z\u0980-\u09FF\s]+$/; 

  if (name.value.trim() === "") {
    errorOne.innerHTML = "Please enter Your name"
    return;
  } else if (!namePattern.test(name.value)) {
    errorOne.innerHTML = "Numbers and special characters are not allowed"
    return;
  }

  if (caption.value.trim() === "") {
    errorTwo.innerHTML = "Please enter Your Caption"
    return;
  }

 
  arr.push({
    name: name.value,
    caption: caption.value
  })


  name.value = ""
  caption.value = ""

  display()
})


updatebutton.addEventListener("click", () => {
  if (indexStore !== undefined) {
   
    arr[indexStore].name = name.value
    arr[indexStore].caption = caption.value

    
    name.value = ""
    caption.value = ""
    updatebutton.style.display = "none"
    postbutton.style.display = "block"

    display()
  }
})


function display() {
  tumplate.innerHTML = ""

  arr.map((item, index) => {
    tumplate.innerHTML += `
        <div class="card mt-5" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text mt-3">${item.caption}</p>
                <button class="btn btn-primary edit" data-index="${index}">Edit</button>
                <button class="btn btn-danger delete" data-index="${index}">Delete</button>
            </div>
        </div>`
  })


  let deletebtn = document.querySelectorAll(".delete")
  Array.from(deletebtn).map((button, index) => {
    button.addEventListener("click", () => {
      arr.splice(index, 1)
      display()
    })
  })

 
  let editbtn = document.querySelectorAll(".edit")
  Array.from(editbtn).map((button, index) => {
    button.addEventListener("click", () => {
      name.value = arr[index].name
      caption.value = arr[index].caption

      indexStore = index; 

      updatebutton.style.display = "block"
      postbutton.style.display = "none"
    })
  })
}
