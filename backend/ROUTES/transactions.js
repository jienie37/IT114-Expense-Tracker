const { addExpense, deleteExpense, getExpenses: getExpense } = require('../controllers/expense')
const { addIncome, deleteIncome, getIncomes } = require('../controllers/income')
addExpense
const router = require('express').Router()


router //income
    .post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)

    //expense
    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpense)
    .delete('/delete-expense/:id', deleteExpense)

module.exports = router