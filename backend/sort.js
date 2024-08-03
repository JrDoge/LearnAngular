// const db = require('./db.json')
function sortMiddleware(req, res, next){
    // res.locals.data = db


    const { _sort, _order }  = req.query
    if(_sort && _order) {
        res.locals.data.courses.sort((a, b) => {
            if(_order === 'desc'){
                return b[_sort].localeCompare(a[_sort])
            }
            return a[_sort].localeCompare(b[_sort])
        })
    };
    next();
}

module.exports = sortMiddleware