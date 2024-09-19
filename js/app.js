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
//




// Google Tag Manager
(function (w, d, s, l, i) {
	w[l] = w[l] || [];
	w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
	var f = d.getElementsByTagName(s)[0],
		j = d.createElement(s),
		dl = l != "dataLayer" ? "&l=" + l : "";
	j.async = true;
	j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
	f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-TBH48TW4");
// end Google Tag Manager
