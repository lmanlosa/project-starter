const panels = document.querySelectorAll('.panel');

//loop through the panels and listen to click event. When click, then add the "active" class.
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
      removeActiveClass()
      panel.classList.add('active')
  })
})

//function to remove the "Active" css class  so that it removes flex 5
function removeActiveClass(){
    panels.forEach((panel) => {
    panel.classList.remove('active')
    })
}