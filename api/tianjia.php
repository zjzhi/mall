<?php
header('Access-Control-Allow-Origin:*');
require('link.php');
$id =isset($_GET["id"])?$_GET["id"]:null;
$sql4 = "SELECT num FROM `buycar` WHERE id = '$id'";
//执行sql语句,查询结果
$result1 = $conn -> query($sql4);
$row1 = $result1 -> fetch_all(MYSQLI_ASSOC);

$num = $row1[0]['num']*1+1;
// $num =$row1[0]+1;

$sql2 ="UPDATE `buycar` SET `num`=$num WHERE id='$id'";
//执行sql语句,查询结果
$conn -> query($sql2);

$sql = "SELECT * FROM `buycar` WHERE 1";
//执行sql语句,查询结果
$result = $conn -> query($sql);
$row = $result -> fetch_all(MYSQLI_ASSOC);
$str = json_encode($row);
echo $str;
// 关闭数据库，避免资源浪费
$conn -> close();
?>