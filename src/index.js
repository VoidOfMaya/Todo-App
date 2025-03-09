console.log(` we are in ${process.env.NODE_ENV}`);

const body = document.getElementById('content');
const title = document.createElement('h1');
title.innerHTML = `Todo list`;
body.appendChild(title);