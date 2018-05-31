<?php
require('link.php');
$uname=isset($_GET["uname"])?$_GET["uname"]:null;
$upassword=isset($_GET["upassword"])?$_GET["upassword"]:null;

//查询是否存在
$sql = "SELECT * FROM `user` WHERE uname = '$uname'";
//执行sql语句,查询结果
$result = $conn -> query($sql);

$row = $result -> fetch_all(MYSQLI_ASSOC);

if($row){
    if ($row[0]['upassword']==$upassword){
    echo '登录成功！';
    
     }
    else{
        echo '用户密码错误！';
    }
}
else{
    echo '用户不存在！';
}
?>