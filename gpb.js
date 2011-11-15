javascript: (function() {
    var iframe_url = "http://ctrlq.org/plusone/" + "?u=" + encodeURIComponent(document.location.href);
    var div = document.createElement("div");
    div.id = "labnol_plusone";
    var str = "

<style>

#labnol_plusone {
position: fixed;
top: 10px;
left: 10px;
width: 500px;
height: 350px;
z-index: 9999;
background: white;
padding: 10px;
border: 2px inset;
}

#ex small {
font: Verdana, Geneva, sans-serif;
font-size: 9px;
float: right;
display: block
}

</style>

<div id='ex'>
	<small>
		<a href='#' onClick=\"document.getElementById('labnol_plusone').style.display='none'; return false;\" title='Click to close this window'>
			Close
		</a>
	</small>
	<iframe frameborder='0' scrolling='no' src='" + iframe_url + "' style='position: fixed; top:10px; left:10px; backgroundColor: white; width:500px; height:350px'>
	</iframe>
</div>";
    div.innerHTML = str;
    document.body.insertBefore(div, document.body.firstChild);
}
)();