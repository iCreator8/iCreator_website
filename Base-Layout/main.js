

// Mobile Menu Toggle 
document.querySelector('div input').onclick = function() {
    if(this.checked)
      this.setAttribute("aria-expanded",true)
    else
      this.setAttribute("aria-expanded",false)
}