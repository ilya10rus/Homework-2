import '../index.css';
import JS_IMAGE from '../assets/JavaScript.png';

const image = document.createElement('img');
image.src = JS_IMAGE;

document.body.append(image);

const title = document.createElement('h2')
title.textContent = 'I love JavaScript'
document.body.append(title)