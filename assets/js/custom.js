function filter(e) {
	document.getElementById("filterInsert").classList.toggle("filterInsertA"),
		e.classList.toggle("filterA"),
		(filterA = document.querySelector(".filterA")),
		null != filterA
			? document
					.querySelector("body")
					.setAttribute(
						"style",
						"overflow-x: hidden;overflow-y: hidden;"
					)
			: document.querySelector("body").setAttribute("style", "");
}
function filterActive(e, t, i) {
	if (1 == i) var n = "genero";
	if (2 == i) n = "year";
	var o = document.getElementById("cadenota").getAttribute(n);
	if (o)
		if (-1 != o.indexOf(t));
		else {
			var r = o + t + ",";
			document.getElementById("cadenota").setAttribute(n, r);
		}
	else document.getElementById("cadenota").setAttribute(n, t + ",");
	e.setAttribute("onclick", "nofilter(this, '" + t + "', '" + i + "');"),
		e.classList.toggle("filterON");
	var c = document.getElementById("count-filter").getAttribute("cantidad");
	(filtervar = document.getElementById("count-filter")),
		c
			? ((moreselect = parseInt(c) + parseInt(1)),
			  filtervar.setAttribute("cantidad", moreselect),
			  (filtervar.innerHTML = `Has seleccionado ${moreselect} elemento`))
			: (filtervar.setAttribute("cantidad", 1),
			  (filtervar.innerHTML = "Has seleccionado 1 elemento"));
}
function nofilter(e, t, i) {
    if (1 == i) var n = "genero";
    if (2 == i) n = "year";
    var o = document.getElementById("cadenota").getAttribute(n);
    o && -1 != o.indexOf(t) && (cadenada = o.replace(t + ",", ""), document.getElementById("cadenota").setAttribute(n, cadenada)), e.setAttribute("onclick", "cfilter(this, '" + t + "', '" + i + "');"), e.classList.toggle("filterON");
    var r = document.getElementById("count-filter").getAttribute("cantidad");
    r && (moreselect = parseInt(r) - parseInt(1), filtrovar = document.getElementById("count-filter"), filtrovar.setAttribute("cantidad", moreselect), filtrovar.innerHTML = `Has seleccionado ${moreselect} elemento`)
}
function menu() {
	document.querySelector(".nav-menu").classList.add("nav-menuA"),
		document.querySelector(".fondo").classList.add("new-fondo");
}

function fondoBlueClick(e) {
	document.querySelector(".nav-menu").classList.remove("nav-menuA"),
		document.querySelector(".fondo").classList.remove("new-fondo");
}

function searchMenu() {
	document.querySelector(".search-form").classList.add("search-formA");
}

function closeSearchMenu() {
	document.querySelector(".search-form").classList.remove("search-formA"),
		document.querySelector(".list-search").classList.remove("list-searchA"),
		(document.getElementById("autoseach").value = "");
}

function carruselMovidy(e, t) {
	var n = document
		.querySelector(".contenedorCarrusel")
		.getElementsByTagName("article");
	(itemsAnchura = parseInt(e) / parseInt(t)),
		(itemsContenedor = parseInt(itemsAnchura) * parseInt(n.length)),
		document
			.querySelector(".contenedorCarrusel")
			.setAttribute("style", "width: " + itemsContenedor + "px;");
	for (var o = 0; o < n.length; o++)
		if (2 == t)
			if (0 == o || 2 == o || 4 == o) {
				var i = parseInt(itemsAnchura) - parseInt(10);
				n[o].setAttribute(
					"style",
					"width: " + i + "px;margin: 0 10px 0 0;"
				);
			} else n[o].setAttribute("style", "width: " + itemsAnchura + "px;");
		else n[o].setAttribute("style", "width: " + itemsAnchura + "px;");
}

function nextC(e, t) {
	echo.init({
		callback: function(e, t) {}
	});
	var n = document.getElementById("movidyCarrusel").getAttribute("items"),
		o = document
			.querySelector(".contenedorCarrusel")
			.getElementsByTagName("article").length,
		i = Math.ceil(parseInt(o) / parseInt(n));
	if (i >= t) {
		(sumaPage = parseInt(t) + parseInt(1)),
			e.setAttribute("onclick", "nextC(this, " + sumaPage + ");"),
			i < sumaPage &&
				document
					.querySelector(".carrNext")
					.setAttribute("style", "cursor: no-drop;opacity: 0.6;");
		var s = document.getElementById("movidyCarrusel").offsetWidth;
		(itemsAnchura = parseInt(s) / parseInt(n)),
			2 == n
				? (2 == t && (cosa = 2),
				  3 == t && (cosa = 4),
				  4 == t && (cosa = 6))
				: (2 == t && (cosa = 1),
				  3 == t && (cosa = 2),
				  4 == t && (cosa = 3),
				  5 == t && (cosa = 4),
				  6 == t && (cosa = 5)),
			(move = parseInt(itemsAnchura) * parseInt(cosa));
		var a = document.querySelector(".contenedorCarrusel").offsetWidth;
		document
			.querySelector(".contenedorCarrusel")
			.setAttribute(
				"style",
				"width: " + a + "px;margin-left:-" + move + "px;"
			),
			(restaPage = parseInt(t) - parseInt(1)),
			document
				.querySelector(".carrPrev")
				.setAttribute(
					"onclick",
					"prevC(this, " + restaPage + ", " + move + ");"
				),
			document
				.querySelector(".carrPrev")
				.setAttribute("style", "cursor: pointer;opacity: 1;");
	}
}

function prevC(e, t, n) {
	var o = document.getElementById("movidyCarrusel").getAttribute("items"),
		i = document
			.querySelector(".contenedorCarrusel")
			.getElementsByTagName("article").length;
	Math.ceil(parseInt(i) / parseInt(o));
	if (t > 0) {
		var s = document.getElementById("movidyCarrusel").offsetWidth;
		(itemsAnchura = parseInt(s) / parseInt(o)),
			2 == o
				? (2 == t && (move = parseInt(n) / parseInt(2)),
				  1 == t && (move = 0))
				: (move = parseInt(n) - parseInt(itemsAnchura)),
			(restaPage = parseInt(t) - parseInt(1)),
			document
				.querySelector(".carrPrev")
				.setAttribute(
					"onclick",
					"prevC(this, " + restaPage + ", " + move + ");"
				),
			0 == restaPage &&
				document
					.querySelector(".carrPrev")
					.setAttribute("style", "cursor: no-drop;opacity: 0.6;");
		var a = document.querySelector(".contenedorCarrusel").offsetWidth;
		document
			.querySelector(".contenedorCarrusel")
			.setAttribute(
				"style",
				"width: " + a + "px;margin-left:-" + move + "px;"
			),
			(sumaPage = parseInt(t) + parseInt(1)),
			document
				.querySelector(".carrNext")
				.setAttribute("onclick", "nextC(this, " + sumaPage + ");"),
			document.querySelector(".carrNext").setAttribute("style", "");
	}
}
function menuTap(who, id) {
	var n = document.getElementsByClassName("nav-li");
	for (i = 0; i < n.length; i++) n[i].classList.remove("nav-active");
	var cnt = document.querySelector(".section-cards");
	 cnt.innerHTML = `<div class="loadingvideo">${svg_load}</div>`;

	var data = new FormData();
	data.append('id', id);

	fetch(URLBASE+'/json/indexJson', {
	method: 'POST',
	body: data
	}) .then(res => res.json())
	.then( data => {

		if (data.status==202) {
			who.classList.add("nav-A");
			cnt.innerHTML = data.result;
			echo.init({ callback: function(e, t) {} });
		}

		if (data.status==200) {
			cnt.innerHTML = '<div class="noResLive"><p style="background: #1b1b1b;">No hay contenido disponible para esta opciÃ³n</p></div>';
		}

		if (data.status==404) {
			cnt.innerHTML = '<div class="noResLive"><p>Hubo un error inesperado, intenelo mas tarde</p></div>';
		}

	}).catch(function(error) {
		cnt.innerHTML = '<div class="noResLive"><p>Hubo un error inesperado, intenelo mas tarde</p></div>';
	});

}
function nextSing(who, id) {

	var n = document.getElementsByClassName("nav-li");
	for (i = 0; i < n.length; i++) n[i].classList.remove("nav-active");
	who.classList.add("nav-A");

	var k = document.getElementsByClassName("in");
	for (i = 0; i < k.length; i++) k[i].classList.remove("content-link-directors");
	document.querySelector(".in"+id).classList.add("content-link-directors");
	echo.init({ callback: function(e, t) {} });
}
