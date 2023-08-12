<?php
include('server.php');

session_start();

if( ! isset($_SESSION["username"]) ){  
	header("Location: login.php");
	} 
?>

<!DOCTYPE html>
<html>
<body>

<?php
session_start();

$username = "";
$email    = "";
$errors = array(); 

$db = mysqli_connect('sql208.infinityfree.com', 'if0_34806115', 'NmjOePTLzNR', 'if0_34806115_project');


if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
}



$sql = "SELECT id, username, email, img FROM users";
$result = $db->query($sql);


if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        print "<br> id: ". $row["id"]. "<br> - Name: ". $row["username"]. "<br> - Email: " . $row["email"] . "<br>";
      print "<img src=\"".$row["img"]."\">";
     
    }
} else {
    print "0 results";
}



$db->close();   
        ?> 



</body>
</html>
