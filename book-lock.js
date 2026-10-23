// A casual cover lock, not authentication. Site source remains public on GitHub Pages.
(() => {
 const content=document.getElementById('atlas-content');
 const cover=document.getElementById('book-cover');
 const form=document.getElementById('book-lock');
 const pin=document.getElementById('book-pin');
 const message=document.getElementById('pin-message');
 const close=document.createElement('button');
 close.type='button';close.id='close-book';close.textContent='Close book';
 document.querySelector('header').append(close);
 function seal(){document.body.classList.add('book-sealed');content.inert=true;cover.hidden=false;pin.value='';message.textContent='Enter your four-digit PIN.';pin.removeAttribute('aria-invalid');pin.focus();}
 close.addEventListener('click',seal);
 form.addEventListener('submit',event=>{
  event.preventDefault();
  if(pin.value!=='1234'){message.textContent='That key does not fit. Try again.';pin.setAttribute('aria-invalid','true');pin.value='';pin.focus();return;}
  document.body.classList.remove('book-sealed');content.inert=false;cover.hidden=true;pin.value='';
  window.dispatchEvent(new Event('resize'));
  window.dispatchEvent(new Event('atlas-open'));
  document.getElementById('journeys').focus();
 });
 // Refreshing or opening a new tab always starts with the book closed.
})();
