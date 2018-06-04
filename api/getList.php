<?php
    header('Access-Control-Allow-Origin:*');
    require('link.php');
    $sql1 = "SELECT * FROM `zgoodslist` WHERE 1";
    //执行sql语句,查询结果
    $result1 = $conn -> query($sql1);
    $zgoodslist = $result1 -> fetch_all(MYSQLI_ASSOC);
    echo json_encode($zgoodslist,JSON_UNESCAPED_UNICODE);
?>