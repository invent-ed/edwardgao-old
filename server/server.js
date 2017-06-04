// express
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// request handlers
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(cookieParser());

// routes
app.use('/', express.static('../portfolio/public'));
app.use('/resume', express.static('../resume/public'));

// start express server
if(!module.parent) {
	app.listen(PORT, _ => {
		console.log(`Server listening at port ${PORT}`);
	});
}
