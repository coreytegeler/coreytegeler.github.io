var colors = [
	"aliceblue",
	"antiquewhite",
	"aqua",
	"aquamarine",
	"bisque",
	"blanchedalmond",
	"burlywood",
	"cadetblue",
	"coral",
	"cornflowerblue",
	"cornsilk",
	"darkgoldenrod",
	"darkkhaki",
	"darksalmon",
	"darkturquoise",
	"deepskyblue",
	"floralwhite",
	"gold",
	"goldenrod",
	"honeydew",
	"ivory",
	"khaki",
	"lavender",
	"lemonchiffon",
	"lightblue",
	"lightcoral",
	"lightgray",
	"lightgreen",
	"lightgrey",
	"lightseagreen",
	"lightskyblue",
	"lightslategray",
	"lightyellow",
	"lime",
	"mediumaquamarine",
	"mediumseagreen",
	"mediumspringgreen",
	"mintcream",
	"mistyrose",
	"oldlace",
	"orchid",
	"palegoldenrod",
	"palevioletred",
	"papayawhip",
	"peachpuff",
	"plum",
	"powderblue",
	"salmon",
	"seashell",
	"silver",
	"snow",
	"tan",
	"thistle",
	"violet",
	"wheat",
	"white",
	"yellowgreen"
];

for (var i = colors.length - 1; i > 0; i--) {
	var j = Math.floor(Math.random() * (i + 1));
	var temp = colors[i];
	colors[i] = colors[j];
	colors[j] = temp;
}

var index = 0;
var colorElement = document.querySelector("#filter");
colorElement.style.backgroundColor = colors[index];
setInterval(function() {
	colorElement.style.backgroundColor = colors[index];
	index = index === colors.length -1 ? 0 : index += 1;
	console.log(colors[index]);
}, 10000);