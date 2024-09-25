// AIRTABLE PAGE
// API: https://airtable.com/developers/web/api/introduction
function get_page_from_airtable( recID ){
	var Airtable = require("airtable");
	var base = new Airtable({ apiKey: "pattA7nyQpqdRuVkV.5da2261a64ad65d025c024cd1c6a9d35fe1fb299738eab1f73ab9c412da94c91" }).base("appBKn1E7gk7Kakkj");

	base("Pages").find(recID, function (err, record) {
		if (err) {
			console.error(err);
			return;
		}
		// console.log("Retrieved", record.id);
		// console.log(record);
		// console.log(record.fields.Content);
		//
		var converter = new showdown.Converter();
		var html = converter.makeHtml(record.fields.Content);
		// console.log(html);
		document.getElementById("airtable_content").innerHTML = html;
		document.getElementById("airtable_title").innerHTML = record.fields.Title;
	});
}
