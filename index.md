
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
  integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
crossorigin="anonymous"></script>
<link href="https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css" rel="stylesheet">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css" >
    <script src="./app.js"></script>
</head>
<body>
    <p>Online code-editor</p>
    
<div class="codeContainer">
    <ul class="list-item">
        <li class="toggle" id="html">HTML</li>
        <li class="toggle" id="css">CSS</li>
        <li class="toggle" id="js">JS</li>
        <li class="toggle" id="result">Result</li>
        <button class="toggle run-btn">Run</button>
    </ul>
   
    
    <textarea class="codeContainner" id="htmlcontainer" placeholder="HTML"></textarea>

    <textarea class="codeContainner" id="csscontainer" placeholder="CSS"></textarea>

    <textarea class="codeContainner" id="jscontainer" placeholder="JS"></textarea>
  

  
</div>
<div>
<span style="font-weight: bold; font-size: 1.5rem;" >Result</span>
<iframe class="iframe-css" id="myframe"></iframe>
</div>
</body>
</html>
