'use strict';

const {Database, Model} = require('mongorito');
const db = new Database('localhost/ccbudget');

const init = function () {
  try {
    console.log('init!')
    await db.connect();
  } catch (error) {
  }
}

exports.insertRecords = function (month, year, transactionList) {

  try {
    class Transaction extends Model {
    }
    db.register(Transaction);

    for (let item in transactionList) {

      let trans = new Transaction({
        type: item['type'],
        transDate: new Date(item['transDate']),
        postDate: new Date(item['postDate']),
        description: item['description'],
        amount: parseInt(item['amount'])
      })

      // SAVE
      await trans.save();
    }
  } catch (error) {

  }
}

init();
