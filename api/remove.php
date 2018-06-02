<?php
require('link.php');

$id =isset($_GET["id"])?$_GET["id"]:null;
$sql4 = "DELETE FROM `buycar` WHERE id = '$id'";
//执行sql语句,查询结果
$result1 = $conn -> query($sql4);
$sql = "SELECT * FROM `buycar` WHERE 1";
//执行sql语句,查询结果
$result = $conn -> query($sql);
$row = $result -> fetch_all(MYSQLI_ASSOC);
$str = json_encode($row);
echo $str;

// 关闭数据库，避免资源浪费
$conn -> close();

?>