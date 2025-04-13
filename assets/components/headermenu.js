/*  FORMATTING
    <div style="width: 10%; min-width: 3%;"></div>
	<span><a href="index.html">DAVID PACHECO</a></span>
	<div style="width: 100%; min-width: 7%;"></div>
			<ul>
				<li><a href="index.html">Home</a></li>
				<li>
					<a href="games.html">Games</a>
					<ul>
						<li><a href="games-videogames.html">Video Games</a></li>
					    <li><a href="games-gamejams.html">Game Jams</a></li>
						<li><a href="games-tabletopgames.html">Tabletop Games</a></li>
					</ul>
				</li>
				<li>
					<a href="extra.html">Extras</a>
					<ul>
						<li><a href="extra-art.html">Art</a></li>
						<li><a href="extra-blog.html">Blog</a></li>
						<li><a href="extra-video.html">Video Editing</a></li>
					</ul>
				</li>
			    <li><a href="contact.html">About Me</a></li>
			    <li><a href="contact.html">Contact</a></li>
		    </ul>
	<div style="width: 10%; min-width: 3%;"></div>" 
*/

class HeaderMenu extends HTMLElement {
	constructor (){
		super();
	}

	connectedCallback(){
		this.innerHTML = `<nav id="nav">
							<div style="width: 10%; min-width: 3%;"></div>
							<span><a href="index.html">DAVID PACHECO</a></span>
							<div style="width: 100%; min-width: 7%;"></div>
							<ul>
								<li><a href="index.html">Home</a></li>
								<li>
									<a href="games.html">Games</a>
									<ul>
										<li><a href="games-videogames.html">Video Games</a></li>
										<li><a href="games-gamejams.html">Game Jams</a></li>
										<li><a href="games-tabletopgames.html">Tabletop Games</a></li>
									</ul>
								</li>
								<li>
									<a href="extra.html">Extras</a>
									<ul>
										<li><a href="extra-art.html">Art</a></li>
										<li><a href="extra-blog.html">Blog</a></li>
										<li><a href="extra-video.html">Video Editing</a></li>
									</ul>
								</li>
								<li><a href="contact.html">About Me</a></li>
								<li><a href="contact.html">Contact</a></li>
							</ul>
							<div style="width: 10%; min-width: 3%;"></div>
						</nav>`;
	}
}

customElements.define('nav-menu', HeaderMenu);

// function createHeaderMenu(){
//     var navInnerHTML = "";
//     navInnerHTML += "<div style=\"width: 10%; min-width: 3%;\"></div>"
//     navInnerHTML += "<span><a href=\"index.html\">DAVID PACHECO</a></span>";
//     navInnerHTML += "<div style=\"width: 100%; min-width: 7%;\"></div>";
//     navInnerHTML += "<ul>" +
// 				"<li><a href=\"index.html\">Home</a></li>" +
// 				"<li>" +
// 					"<a href=\"games.html\">Games</a>" +
// 					"<ul>" +
// 						"<li><a href=\"games-videogames.html\">Video Games</a></li>" +
// 					    "<li><a href=\"games-gamejams.html\">Game Jams</a></li>" +
// 						"<li><a href=\"games-tabletopgames.html\">Tabletop Games</a></li>" +
// 					"</ul>" +
// 				"</li>" +
// 				"<li>" +
// 					"<a href=\"extra.html\">Extras</a>" +
// 					"<ul>" +
// 						"<li><a href=\"extra-art.html\">Art</a></li>" +
// 						"<li><a href=\"extra-blog.html\">Blog</a></li>" +
// 						"<li><a href=\"extra-video.html\">Video Editing</a></li>" + 
// 					"</ul>" + 
// 				"</li>" + 
// 			    "<li><a href=\"contact.html\">About_Me</a></li>" +
// 			    "<li><a href=\"contact.html\">Contact</a></li>" +
// 		    "</ul>";
//     navInnerHTML += "<div style=\"width: 10%; min-width: 3%;\"></div>";

//     return navInnerHTML;
// }

// $("#nav").load("nav.html");