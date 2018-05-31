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
    echo '用户已存在！';
    $conn -> close();
}
else{
    if($uname){
        $sql = "INSERT INTO `user`(`uname`, `upassword`) VALUES ('$uname','$upassword')";
        //执行sql语句
        $conn -> query($sql);
        echo '注册成功！';
        // 关闭数据库，避免资源浪费
        $conn -> close();

    }
    
}
?>