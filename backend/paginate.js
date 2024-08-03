function paginateMiddleware(req, res, next){
    const page = parseInt(req.query._page, 10) ;
    const limit = parseInt(req.query._limit, 10) ;

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

  next();
}

module.exports = paginateMiddleware