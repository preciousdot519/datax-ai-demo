document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('error');

  // Fake authentication
  if ((username.toLowerCase() === 'demo' && password === '1234') || 
      username.toLowerCase().includes('datax') || 
      username.length > 3) {
    
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('user', username || 'Demo User');
    
    // Fake loading
    const btn = e.target.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = 'Signing in...';
    btn.disabled = true;

    setTimeout(() => {
      window.location.href = 'portal.html';
    }, 800);
  } else {
    errorMsg.classList.remove('hidden');
    setTimeout(() => errorMsg.classList.add('hidden'), 3000);
  }
});