let env = process.env.NODE_ENV || 'dev'   // 1
let mongodb_url = process.env.MONGODB_URI || 'mongodb://localhost:27017/testdb;';
// URL to debug flow on test server
//let mongodb_uri = process.env.MONGODB_URI || 'mongodb://MongoDBTestServerAdmin:Cellfone01@54.206.53.18:27017/LNB-MerchantProfileDB' 
console.log('the env is ' + env);
process.env.NODE_ENV  = env;
process.env.MERCHANT_APPOINTMENT_SVC_USERNAME = process.env.MERCHANT_APPOINTMENT_SVC_USERNAME || 'ajlewis90@live.com'
process.env.MERCHANT_APPOINTMENT_SVC_PASSWORD = process.env.MERCHANT_APPOINTMENT_SVC_PASSWORD || 'Cellfone01'

//process.env.PORT = 8001;
//process.env.PORT = 8081;
process.env.MONGODB_URL = mongodb_url;




if (process.env.NODE_ENV == 'dev'){
	process.env.HOST = 'localhost';
	process.env.TZ = 'Pacific/Auckland';
	process.env.PORT = '8084';
}
else if (process.env.NODE_ENV == 'Prod'){
	process.env.PORT = '8081';
}

console.log('port number is:' + process.env.PORT);