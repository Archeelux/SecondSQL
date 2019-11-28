import hljs from "highlight.js/lib/highlight";
import sql from "highlight.js/lib/languages/sql";

hljs.registerLanguage("sql", sql);

document.addEventListener("DOMContentLoaded", event => {
	document.querySelectorAll("pre code").forEach(block => {
		hljs.highlightBlock(block);
	});
});
