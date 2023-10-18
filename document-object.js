var today = new Date();

var year = today.getFullYear();

var est = new Date('Oct 17, 2023 9:24:20');

var difference = today.getTime() - est.getTime();

difference = (difference / 3156900000);

var elMsg = document.getElementById('message');

elMsg.textContent = Math.floor(difference) + ' years of online travel advice';