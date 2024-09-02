let env = process.env.NODE_ENV || 'dev'   // 1
let mongodb_url = process.env.MONGODB_URL || 'mongodb://localhost:27017/nodejs_test_db;';
// URL to debug flow on test server
//let mongodb_uri = process.env.MONGODB_URI || 'mongodb://MongoDBTestServerAdmin:Cellfone01@54.206.53.18:27017/LNB-MerchantProfileDB' 
console.log('the env is ' + env);
process.env.NODE_ENV  = env;

//process.env.PORT = 8001;
//process.env.PORT = 8081;
process.env.MONGODB_URL = mongodb_url;