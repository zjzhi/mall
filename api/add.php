<?php
require('link.php');

$id =isset($_GET["id"])?$_GET["id"]:null;
$num = isset($_GET["num"])?$_GET["num"]:1;
//查询是否存在
$sql = "SELECT * FROM `buycar` WHERE id = '$id'";
//执行sql语句,查询结果
$result = $conn -> query($sql);

$row = $result -> fetch_all(MYSQLI_ASSOC);
//如果存在则数量加一
 if ($row){
    $sql1 = "SELECT num FROM `buycar` WHERE id = '$id'";
    //执行sql语句,查询结果
    $result = $conn -> query($sql1);
    $row1 = $result -> fetch_all(MYSQLI_ASSOC);
    $num*=1;
    $num = $row1[0]['num']*1+$num;
    // $num =$row1[0]+1;

    $sql2 ="UPDATE `buycar` SET `num`=$num WHERE id='$id'";
    //执行sql语句,查询结果
    $conn -> query($sql2);
    
    
 }
else{
    if($id){
        //获取该商品的属性
    $sql5 = "SELECT * FROM `zgoodslist` WHERE id = '$id'";
    //执行sql语句,查询结果
    $result5 = $conn -> query($sql5);
    $row5 = $result5 -> fetch_all(MYSQLI_ASSOC);

    $id1 = $row5[0]['id'];
    $name1 = $row5[0]['name'];
    $prices1 = $row5[0]['prices'];
    $sale1 = $row5[0]['sale'];
    $color1 = $row5[0]['color'];
    $eyel = isset($_GET["eyel"])?$_GET["eyel"]:1;
    $eyer = isset($_GET["eyer"])?$_GET["eyer"]:1;
    
    $img = $row5[0]['img'];
    $poin = $row5[0]['poin'];
    $detailImg = $row5[0]['detailImg'];
    $xq = $row5[0]['详情'];
    $pinpai = $row5[0]['品牌'];
    $zhouqi = $row5[0]['周期'];
    $hanshui = $row5[0]['含水量'];
    $dingzhi = $row5[0]['定制'];
    $fenlei = $row5[0]['分类'];
    $kuanshi = $row5[0]['款式'];
    $fengge = $row5[0]['风格'];
    $kuangxing = $row5[0]['框型'];
        //否则写入数据库
    $sql3 = "INSERT INTO `buycar`(`id`, `name`, `prices`, `sale`, `color`, `eyel`, `eyer`, `num`, `img`, `poin`, `detailImg`, `详情`, `品牌`, `周期`, `含水量`, `定制`, `分类`, `款式`, `风格`, `框型`) VALUES ('$id1',' $name1','$prices1','$sale1','$color1','$eyel','$eyer','$num','$img','$poin','$detailImg','$xq','$pinpai','$zhouqi','$hanshui','$dingzhi','$fenlei','$kuanshi','$fengge','$kuangxing')";

    //执行sql语句,查询结果
    $conn -> query($sql3);
    
    }
    
}
$sqlAll = "SELECT * FROM `buycar` WHERE 1";
//执行sql语句,查询结果
$resultAll = $conn -> query($sqlAll);

$rowAll = $resultAll -> fetch_all(MYSQLI_ASSOC);
$strAll = json_encode($rowAll);
echo $strAll;

// 关闭数据库，避免资源浪费
    $conn -> close();

?>