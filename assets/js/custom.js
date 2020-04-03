function filter(e) {
	document.getElementById("filterInsert").classList.toggle("filterInsertA"),
		e.classList.toggle("filtroA"),
		(filtroA = document.querySelector(".filtroA")),
		null != filtroA
			? document
					.querySelector("body")
					.setAttribute(
						"style",
						"overflow-x: hidden;overflow-y: hidden;"
					)
			: document.querySelector("body").setAttribute("style", "");
}
function cfilter(e, t, i) {
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
	var c = document.getElementById("contadorFiltro").getAttribute("cantidad");
	(filtrovar = document.getElementById("contadorFiltro")),
		c
			? ((moreselect = parseInt(c) + parseInt(1)),
			  filtrovar.setAttribute("cantidad", moreselect),
			  (filtrovar.innerHTML = `Has seleccionado ${moreselect} elemento`))
			: (filtrovar.setAttribute("cantidad", 1),
			  (filtrovar.innerHTML = "Has seleccionado 1 elemento"));
}

function meN_Mo() {
	document.querySelector(".NavMob").classList.add("NavMobA"),
		document.querySelector(".fndo_Mo").classList.add("fndo_MoA");
}

function fndo_Mo(e) {
	document.querySelector(".NavMob").classList.remove("NavMobA"),
		document.querySelector(".fndo_Mo").classList.remove("fndo_MoA");
}

function seac_Mo() {
	document.querySelector(".seMobF").classList.add("seMobFA");
}

function cseac_Mo() {
	document.querySelector(".seMobF").classList.remove("seMobFA"),
		document.querySelector(".listSearch").classList.remove("listSearchA"),
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
