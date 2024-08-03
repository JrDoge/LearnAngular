
function searchMiddleware(req, res, next){
    const searchQuery = req.query.q

    if(req.path == '/courses'){
        if(searchQuery){
            const searchData = 
            res.locals.data.courses.filter((course) => 
                course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
            course.description.toLowerCase().includes(searchQuery.toLowerCase())||
            course.creationDate.toLowerCase().includes(searchQuery.toLowerCase())
            )
            // if(searchData.length == 0){
            //     res.sendStatus(404)
            //     return
            // }
            return res.json(searchData)
        } 
    }
    next()
}

module.exports = searchMiddleware