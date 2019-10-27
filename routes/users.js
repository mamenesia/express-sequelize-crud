var express = require('express')
var router = express.Router()
var model = require('../models/index')

/* GET users listing. */
router.get('/', async function(req, res, next) {
	try {
		const users = await model.users.findAll({})
		if (users.length !== 0) {
			res.json({
				status: 'OK',
				messages: '',
				data: users
			})
		} else {
			res.json({
				status: 'ERROR',
				messages: 'EMPTY',
				data: {}
			})
		}
	} catch (err) {
		res.json({
			status: 'ERROR',
			messages: 'err.message',
			data: {}
		})
	}
})

router.post('/', async function(req, res, next) {
	try {
		const { name, email, gender, phoneNumber } = req.body
		const users = await model.users.create({
			name,
			email,
			gender,
			phone_number: phoneNumber
		})

		if (users) {
			res.status(201).json({
				status: 'OK',
				messages: 'User berhasil ditambahkan',
				data: users
			})
		}
	} catch (err) {
		res.status(400).json({
			status: 'ERROR',
			messages: err.message,
			data: {}
		})
	}
})

router.patch('/:id', async function(req, res, next) {
	try {
		const userId = req.params.id
		const { name, email, gender, phoneNumber } = req.body

		const users = await model.users.update(
			{
				name,
				email,
				gender,
				phone_number: phoneNumber
			},
			{
				where: {
					id: userId
				}
			}
		)
		if (users) {
			res.json({
				status: 'OK',
				messages: 'User berhasil diupdate',
				data: users
			})
		}
	} catch (err) {
		res.status(400).json({
			status: 'ERROR',
			messages: err.message,
			data: {}
		})
	}
})

router.delete('/:id', function(req, res, next) {
	res.send('this is delete route')
})

module.exports = router
