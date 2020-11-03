import { Hello } from './js/Hello';
import WebpackLogo from './images/logo.svg';
import './styles/index.scss';

const app = document.querySelector('#app');
app.innerHTML = `
	<img src="${WebpackLogo}" alt="${Hello()}">
	<h1>${process.env.APP_TITLE_APP}</h1>
`;
