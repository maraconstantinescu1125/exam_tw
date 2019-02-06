'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')


const sequelize = new Sequelize('sequelize_tests','root','',{
	dialect : 'mysql',
	define : {
		timestamps : false
	}
})

const Op = sequelize.Op

const Book = sequelize.define('book', {
	title : Sequelize.STRING,
	content : Sequelize.TEXT
})

const Customer = sequelize.define('customer', {
    name: { type: Sequelize.STRING, allowNull: false },
    address: {type: Sequelize.STRING, allowNull: false},
    email: {type: Sequelize.STRING, allowNull: false, validate: {isEmail: true}},
    phone: {type: Sequelize.STRING, allowNull: false, validate: {is : /^0[0-9]{9}$/}}
})

const app = express()
app.use(bodyParser.json())

app.get('/create', async (req, res) => {
	try{
		await sequelize.sync({force : true})
		res.status(201).json({message : 'created'})
	}
	catch(e){
		console.warn(e)
		res.status(500).json({message : 'server error'})
	}
})

app.get('/customers', async (req, res) => {
    try{
        if(req.query && req.query.filter){
            let customer = await Customer.findAll({where:{
                name: {
                    [Op.like] : `%${req.query.filter}%`
                }
            }})
        }else{
            let customers = await Customer.findAll();
            res.status(200).json(customers)
        }
    }
    catch(e){
        console.warn(e);
        res.status(500).json({message: 'server error'})
    }
})

app.get('/books', async (req, res) => {
	try{
		let books = await Book.findAll()
		res.status(200).json(books)
	}
	catch(e){
		console.warn(e)
		res.status(500).json({message : 'server error'})
	}
})


app.post('/customers', async (req, res) => {
	try{
		if (req.query.bulk && req.query.bulk == 'on'){
			await Customer.bulkCreate(req.body)
			res.status(201).json({message : 'created'})
		}
		else{
			await Customer.create(req.body)
			res.status(201).json({message : 'created'})
		}
	}
	catch(e){
		console.warn(e.stack)
		res.status(500).json({message : 'server error'})
	}
})

app.post('/books', async (req, res) => {
	try{
		if (req.query.bulk && req.query.bulk == 'on'){
			await Book.bulkCreate(req.body)
			res.status(201).json({message : 'created'})
		}
		else{
			await Book.create(req.body)
			res.status(201).json({message : 'created'})
		}
	}
	catch(e){
		console.warn(e)
		res.status(500).json({message : 'server error'})
	}
})

app.get('/books/:id', async (req, res) => {
	try{
		let book = await Book.findById(req.params.id)
		if (book){
			res.status(200).json(book)
		}
		else{
			res.status(404).json({message : 'not found'})
		}
	}
	catch(e){
		console.warn(e)
		res.status(500).json({message : 'server error'})
	}
})
https://github.com/FineUploader/fine-uploader/issues/187https://github.com/FineUploader/fine-uploader/issues/187
app.put('/books/:id', async (req, res) => {
	try{
		let book = await Book.findById(req.params.id)
		if (book){
			await book.update(req.body)
			res.status(202).json({message : 'accepted'})
		}
		else{
			res.status(404).json({message : 'not found'})
		}
	}
	catch(e){
		console.warn(e)
		res.status(500).json({message : 'server error'})
	}
})

app.delete('/books/:id', async (req, res) => {
	try{
		let book = await Book.findById(req.params.id)
		if (book){
			await book.destroy()
			res.status(202).json({message : 'accepted'})
		}
		else{
			res.status(404).json({message : 'not found'})
		}
	}
	catch(e){
		console.warn(e)
		res.status(500).json({message : 'server error'})
	}
})

app.listen(8080)