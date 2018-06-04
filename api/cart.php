<?php
    header('Access-Control-Allow-Origin:*');
    require('link.php');
    $sql = "SELECT * FROM `buycar` WHERE 1";
    //执行sql语句,查询结果
    $result = $conn -> query($sql);
    $row = $result -> fetch_all(MYSQLI_ASSOC);
    $str = json_encode($row);
    echo $str;
    $conn -> close();
?>