const { addExpense, deleteExpense, getExpenses } = require('../controllers/expense')
const { addIncome, deleteIncome, getIncomes } = require('../controllers/income')
const router = require('express').Router()


router //income
    .post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)

    //expense
    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpenses)
    .delete('/delete-expense/:id', deleteExpense)

module.exports = router