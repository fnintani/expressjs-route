const router = require('express').Router();

router.get('/product', (req, res) => {
    const {page, total} = req.query;
    res.json({
        status: 'success',
        message: 'welcome to product',
        page,
        total,
    })
})

module.exports = router