var express = require('express');
var router = express.Router({mergeParams:true});
var AWS = require('aws-sdk');

function update_credentials(id, key){
  AWS.config.update({
    accessKeyId: id,
    secretAccessKey: key,
    region:'us-east-2'
  });
}

/* GET config. */
router.get('/config', function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(JSON.stringify(req.app.get('conf')));
});

router.post('/config', function (req, res) {
  console.log('HERE');
  res.setHeader("Access-Control-Allow-Origin", "*");
  update_credentials(req.body.id, req.body.key);
  res.status(200).json({status: 'success!'});
});

router.get('/buckets', function (req, res) {
  console.log('bucket route');
  let s3 = new AWS.S3();
  s3.listBuckets(function(err, data) {
    if (err){
      console.log("ERROR:", err);
      res.json({status: 'error'});
    } else {
      let buckets = data.Buckets;
      res.json(JSON.stringify({buckets: buckets, status: 'success'}));
    }
  });
});

module.exports = router;
