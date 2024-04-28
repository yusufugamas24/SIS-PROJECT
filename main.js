document.addEventListener("DOMContentLoaded", function() {
    const sidebarDropdownToggles = document.querySelectorAll('.sidebar-nav-link.dropdown-toggle');
  
    sidebarDropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        const dropdownMenu = this.nextElementSibling;
        if (dropdownMenu.style.display === 'block') {
          dropdownMenu.style.display = 'none';
        } else {
          dropdownMenu.style.display = 'block';
        }
      });
    });
  
    const headerDropdownToggle = document.querySelector('.dropdown-toggle');
    const headerDropdownMenu = document.querySelector('.dropdown-menu');
  
    headerDropdownToggle.addEventListener('click', function() {
      headerDropdownMenu.classList.toggle('show');
    });
  
    // Close dropdown when clicking outside
    window.addEventListener('click', function(e) {
      if (!headerDropdownToggle.contains(e.target)) {
        headerDropdownMenu.classList.remove('show');
      }
    });
  });
  