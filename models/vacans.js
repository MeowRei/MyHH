const XMLHttpRequest = require ('xmlhttprequest').XMLHttpRequest
const FE = 'https://api.hh.ru/vacancies?text=Frontend'
const BE = 'https://api.hh.ru/vacancies?text=Backend'
const FS = 'https://api.hh.ru/vacancies?text=FullStack'

const mst = '&area=1'
const spb = '&area=2'

const location = '&area=1'

const j = 'junior'
const m = 'middle'
const s = 'senior'

const skill = ''

function getJSON (url) {
	let resp
	let xmlHttp
	
	resp = {}
	xmlHttp = new XMLHttpRequest ()
	
	if (xmlHttp != null) {
		xmlHttp.open ('GET', url, false)
		xmlHttp.send (null)
		resp = JSON.parse (xmlHttp.responseText)
	}
	
	return resp
}

let frontend = getJSON (FE+skill+location)
let backend = getJSON (BE+skill+location)
let fullstack = getJSON (FS+skill+location)

module.exports = { frontend, backend, fullstack }