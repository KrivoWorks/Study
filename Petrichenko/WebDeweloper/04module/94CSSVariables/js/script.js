const wrapper = document.querySelector('.wrapper'),
	  wrapperStyle = getComputedStyle(wrapper); // getComputedStyle - получить все стили

document.querySelector('button').addEventListener('click', () => {
	wrapper.style.setProperty('--text-color', 'red');
});