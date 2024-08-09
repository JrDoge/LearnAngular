function coursesMiddleware(req, res, next){
    const { _sort, _order}  = req.query
    const page = parseInt(req.query._page, 10) ;
    const limit = parseInt(req.query._limit, 10) ;
    const searchQuery = req.query.q;
    if(_sort && _order) {
        res.locals.data.sort((a, b) => {
            if(_order === 'desc'){
                return b[_sort].localeCompare(a[_sort])
            }
            return a[_sort].localeCompare(b[_sort])
        })
    };
    if (page < 1) {
        res.status(400).json({ message: "Invalid page number" });
        return;
    }
    res.locals.pagination = {
        page,
        limit,
        startIndex: (page - 1) * limit,
        endIndex: page * limit,
    };
    if(req.path == '/courses'){
        if(searchQuery){
            const searchData = 
            res.locals.data.filter((course) => 
                course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
            course.description.toLowerCase().includes(searchQuery.toLowerCase())||
            course.creationDate.toLowerCase().includes(searchQuery.toLowerCase())
            )
            return res.json(searchData)
        } 
    }
    next();
}

module.exports = coursesMiddleware