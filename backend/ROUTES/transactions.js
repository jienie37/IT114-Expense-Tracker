const { addExpense, deleteExpense, getExpense } = require('../controllers/expense')
const { addIncome, deleteIncome, getIncome } = require('../controllers/income')
addExpense
const router = require('express').Router()


router //income
    .post('/add-income', addIncome)
    .get('/get-income', getIncome)
    .delete('/delete-income/:id', deleteIncome)

    //expense
    .post('/add-expense', addExpense)
    .get('/get-expense', getExpense)
    .delete('/delete-expense/:id', deleteExpense)

module.exports = router