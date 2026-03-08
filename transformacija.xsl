<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:mp="mojZapored">
	<xsl:output method="html"></xsl:output>

	<xsl:template match="/">
	
		<html>
			<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Spletna trgovina</title>
    <link rel="stylesheet" href="mystyle.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
    <script src="https://kit.fontawesome.com/306d461829.js" crossorigin="anonymous"></script>
        </head>
			<body>
			<h1 align="center"> Spletna trgovina "Ex-Yu"</h1>

    <p align="center" style="font-size: x-small;"><a href="login.html">LOGIN |</a> <a href="registracija.html">REGISTRACIJA</a></a></p>
    <hr >
    <nav class="navbar navbar-expand-sm">
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link" href="index.html"><i class="fas fa-home"></i>Domov</a>
    </li>
    <li class="nav-item">
      <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Modeli
        <span class="caret"></span></button>
        <ul class="dropdown-menu">
          <li><a href="modeli.html">Splošno</a></li>
        <li><a href="podrobnosti.html#a1">Yugo GV Sport</a></li>
        <li><a href="podrobnosti.html#a2">Zastava Yugo 45</a></li>
        <li><a href="podrobnosti.html#a3">Yugo 55</a></li>
        <li><a href="podrobnosti.html">Yugo Cabrio</a></li>
        <li><a href="podrobnosti.html">Zastava Koral</a></li>
        </ul>
      </div>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="podrobnosti.html"><i class="fas fa-asterisk"></i>Podrobnosti</a>
      </li>
      <li class="nav-item">
      
    </li>
    </ul>
    </nav>
  <hr />
				<h1>Seznam modelov na zalogi</h1>			
				<table border="1">
					<tr>
						<th>ID</th>
						<th>Model</th>
					</tr>
					<xsl:for-each select="mp:seznam/mp:model">
					<tr>
						<td> <xsl:value-of select="@id"/>  </td>
						<td> <xsl:value-of select="mp:naziv"/> </td>
					</tr>
					</xsl:for-each>
				</table>
			</body>	
		</html>	
	</xsl:template>
</xsl:stylesheet>