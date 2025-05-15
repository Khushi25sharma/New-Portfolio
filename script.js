document.addEventListener('DOMContentLoaded', () => {
  console.log("✅ script.js loaded");

  const toggleBtn = document.getElementById('dark-toggle');
  console.log("🔘 toggle button:", toggleBtn);

  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
  }

  toggleBtn.addEventListener('click', () => {
    const html = document.documentElement;
    html.classList.toggle('dark');

    if (html.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
});


  
  