let tumplate = document.querySelector(".tumplate")
let name = document.querySelector(".name")
let caption = document.querySelector(".caption")
let postbutton = document.querySelector(".postbutton")
let errorOne = document.querySelector(".errorOne")
let errorTwo = document.querySelector(".errorTwo")

let arr = []

postbutton.addEventListener("click", () => {
  errorOne.innerHTML = ""
  errorTwo.innerHTML = ""


  let namePattern = /^[a-zA-Z\s]+$/;

  if (name.value.trim() === "") {
    errorOne.innerHTML = "Please enter Your name"
    return;
  }
  else if (!namePattern.test(name.value)) {
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

  tumplate.innerHTML = ""
  display()

  name.value = ""
  caption.value = ""
})

function display() {
  tumplate.innerHTML = ""
  arr.map(item => {
    tumplate.innerHTML += `
    <div class="card mt-5" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text mt-3">${item.caption}</p>
        <button class="btn btn-primary edit-btn">Edit</button>
        <button class="btn btn-danger delete-btn">Delete</button>
      </div>
    </div>`
  })
}
