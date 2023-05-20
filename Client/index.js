const urlBase = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', () => {
	const request = new XMLHttpRequest();
	request.open('GET', `${urlBase}/`);
	request.onload = () => {
		if (request.status !== 200) {
			console.log(`Error with status: ${request.status}!`);
		}

		const responseText = request.responseText;
		document.title = responseText;
		document.getElementById('main').innerText = responseText;
		console.log(responseText);
	};
	request.send();
});
