router.get('/', function (req, res){
  res.sendFile('index.html', { root: 'public' });
});

module.exports = router;
