import _ from 'lodash';
import'./style.css';
import { createHeadline, bgPic, someTxt} from './homepage';





const divContent = document.querySelector("#content");

divContent.appendChild(createHeadline());
//document.body.appendChild(bgPic());

divContent.appendChild(someTxt());
