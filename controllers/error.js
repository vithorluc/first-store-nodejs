exports.get404 = (req, res, next) => {
    console.log('page not found');
    res.status(404).render('404', {pageTitle: 'Page Not Found', path: ''});  
}