
import { Hello } from './js/Hello'
import WebpackLogo from './images/logo.svg'
import './styles/index.scss'



const app = document.querySelector('#root');
app.innerHTML=`
	<img src="${WebpackLogo}" alt="${HelloWorld()}">
	<h1>${HelloWorld()}</h1>
`;

