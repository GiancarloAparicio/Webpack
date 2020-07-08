
import { Hello } from './js/Hello'
import WebpackLogo from './images/logo.svg'
import './styles/index.scss'



const root = document.querySelector('#root');
root.innerHTML=`
	<img src="${WebpackLogo}" alt="${Hello()}">
	<h1>${Hello()}</h1>
`;

