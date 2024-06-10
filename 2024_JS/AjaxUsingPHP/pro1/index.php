<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
</head>
<style>
    html,body{

    }
    .container{
        max-width: 80%;
        background-color: grey;
        margin: auto;
        padding: 25px;
    }
</style>
<body>
    <div class="container">
    <h1>Lets Learn about PHP</h1>
    <?php 
    $age = 25;
    if($age == 25){
echo "You are Eligible";
    }
   elseif ($age < 25) {
    echo "You are Junior";
   }
    # code...
   
    else{
echo "You are senior and can't fit";
    }

    $arr1 = [93,26,66,51,11,21,29];
    echo $arr1[3];
     ?>
    </div>
</body>
</html>