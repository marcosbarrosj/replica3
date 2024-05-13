function toggleOptions() {
    var options = document.getElementById("options");
    if (options.style.display === "none") {
        options.style.display = "block";
    } else {
        options.style.display = "none";
    }
  }
  

  
  document.addEventListener("click", function(event) {
    var options = document.getElementById("options");
    var menu = document.querySelector(".menu");
    var isClickInsideMenu = menu.contains(event.target);
    if (!isClickInsideMenu) {
        options.style.display = "none";
    }
});

function toggleOptions() {
    var options = document.getElementById("options");
    if (options.style.display === "none") {
        options.style.display = "block";
    } else {
        options.style.display = "none";
    }
}



openMenu.addEventListener('click', () => {

	
	menu.style.display = "flex"

	menu.style.right = (menu.offsetWidth * -1) 

	
	setTimeout(()=> {
		
		menu.style.opacity = '1'

		
		menu.style.left = "0"

		openMenu.style.display = 'none'
	}, 10);
})


closeMenu.addEventListener('click', () => {

	menu.style.opacity = '1'

	menu.style.right = (menu.offsetWidth * -1) + 'px'

	
	setTimeout(()=> {
		menu.removeAttribute('style')
		openMenu.removeAttribute('style')
	}, 200);
})



document.querySelector("#myOverlay")