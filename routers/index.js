const express = require ('express')
const router = express.Router ()
const { newUserCheck } = require ('../middleware/auth')
const { frontend, backend, fullstack } = require ('../models/vacans')

router.get ('/', async (req, res) => {
	res.render ('index', {
		title: 'Elbarus HH',
		frontend: frontend.items,
		backend: backend.items,
		fullstack: fullstack.items,
	})
})

router.get ('/login', async (req, res) => {
	res.render ('login')
})

module.exports = router
