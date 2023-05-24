const Theme = {
	LIGHT: 'light-theme',
	DARK: 'dark-theme',
  };
  
  const body = document.body;
  const inputRef = document.querySelector('#theme-switch-toggle');
  
  inputRef.addEventListener('change', changeInput);
  
  function changeInput(evt) {
	  if (evt.currentTarget.checked) { darkSet(); } else { lightSet();}
  }
  
  function darkSet() {
	  body.classList.toggle(Theme.DARK, true);
	  body.classList.toggle(Theme.LIGHT, false);
	  localStorage.setItem('theme', Theme.DARK);
	  inputRef.checked = true;
	}
	
  
  function lightSet() {
	  body.classList.toggle(Theme.LIGHT, true);
	  body.classList.toggle(Theme.DARK, false);
	  localStorage.setItem('theme', Theme.LIGHT);
	  inputRef.checked = false;
  }
	
  
  function currentTheme() {
	  const savedTheme = localStorage.getItem('theme');
	  body.classList.toggle(Theme.LIGHT, savedTheme !== Theme.DARK);
	  body.classList.toggle(Theme.DARK, savedTheme === Theme.DARK);
	  localStorage.setItem('theme', savedTheme || Theme.LIGHT);
	  inputRef.checked = savedTheme === Theme.DARK;
	}
  
  currentTheme();