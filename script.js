// // Get references to the elements
// const sideMenu = document.getElementById('sideMenu');
// const toggleBtn = document.getElementById('toggleBtn');

// // Toggle the side menu when the button is clicked
// toggleBtn.addEventListener('click', () => {
//   console.log('Toggle button clicked!'); // Check if the event listener is triggered
//   sideMenu.classList.toggle('show-menu');
// });
function openmenu()
{
    document.getElementById("category-bar").style.display="Block";
    document.getElementById("menu-btn").style.display="none";
    document.getElementById("close-btn").style.display="Block";
}
function closemenu()
{
    document.getElementById("category-bar").style.display="none";
    document.getElementById("menu-btn").style.display="Block";
    document.getElementById("close-btn").style.display="none";
}

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }



  document.addEventListener('DOMContentLoaded', function() {
    const productContainers = document.querySelectorAll('.product-container');
    const productDetailsContainer = document.getElementById('product-details');
  
    productContainers.forEach(container => {
      container.addEventListener('click', function() {
        const productId = container.getAttribute('data-product-id');
        const productDetail = document.querySelector(`.product-details[data-product-id="${productId}"]`).innerHTML;
        productDetailsContainer.innerHTML = productDetail;
      });
    });
  });
  