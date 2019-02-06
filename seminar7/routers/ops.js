const express = require('express');
const router = express.Router();

router.post('/add', function (req, res) {
  let op1 = req.body.op1
  let op2 = req.body.op2
  res.status(200).json({res: op1 + op2})
});

router.use((req, res, next) => {
    if('Reject' in req.headers){
        res.status(401).json({message: 'rejected'})
    }else{
        next()
    }
})

module.exports = router;