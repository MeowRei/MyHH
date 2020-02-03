const configURL = require('.')
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const vacans = 'https://api.hh.ru/vacancies?specialization=1.221'

const regMoscow = ''
const regPiter = ''

const vacansFront = ''
const vacansBack = ''
const vacansFS = ''


function getJSON(url) {
	let resp ;
	let xmlHttp ;
	
	resp  = '' ;
	xmlHttp = new XMLHttpRequest();
	
	if(xmlHttp != null)
	{
		xmlHttp.open( "GET", url, false );
		xmlHttp.send( null );
		resp = xmlHttp.responseText;
	}
	
	return resp ;
}

let gjson = getJSON(vacans);
