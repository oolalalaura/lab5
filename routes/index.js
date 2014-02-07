// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	res.render('index', data
	);
function initializePage() {
	console.log("Javascript Connected!");
	$("a.nameListener").click(nameClick);
}

function nameClick(e) {
	console.log("Name clicked");
	e.preventDefault();

	var currentName = $(this).text();
	console.log(currentName);
	$(this).text(anagrammedName(currentName));
}

};

