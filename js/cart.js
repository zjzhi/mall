;requirejs(['base'],function(){
    function autoHtml($obj,arr){
        let str='';
        let $priceSum = 0;
        let $youhui = 0;
        let $saleSum =0;
        arr.map(function(item){
            let $psum = item.num*item.sale;
            $priceSum+=item.prices*item.num;
            $youhui+=(item.prices-item.sale)*item.num;
            $saleSum+=$psum;
            str+=`<tr car-id="${item.id}">
                            <td><img src="${item.img}"/></td>
                            <td><h2>${item.name}</h2></td>
                            <td>
                                左眼光度：<span class="guangdul">${item.eyel}</span>
                                <br />
                                右眼光度：<span class="guangdur">${item.eyer}</span>
                            </td>
                            <td class="shuliang">
                                <i class="jian">-</i>
                                <span>${item.num}</span>
                                <i class="jia">+</i>
                                <br />
                                <i class="jian">-</i>
                                <span>${item.num}</span>
                                <i class="jia">+</i>
                            </td>
                            <td class="price"><span>${item.sale}</span></td>
                            <td class="sum"><span>${$psum}</span></td>
                            <td><span class="del">删除</span></td>
                        </tr>`;
        });
        $obj.html(str);
        $('.sumPrices h2 .prices').text($priceSum.toFixed(2));
        $('.sumPrices h3 .prices').text($youhui.toFixed(2));
        $('.sumPrices p').html(`总计（不含运费）：<span>${$saleSum.toFixed(2)}</span>
                            <button>去结算&nbsp;&gt;</button>`);
    }
    $.ajax({
        type:"get",
        url: "http://localhost:868/src/api/cart.php",
        success: function(data) {
           let $carlistArr=JSON.parse(data);
           $('#cartTotal').text($carlistArr.length);
           autoHtml($('.cartList tbody'),$carlistArr);
           //点击删除当前商品
           $('.cartList tbody').on('click','.del',function(){
                let carId = $(this).closest('tr').attr('car-id');
                $.ajax({
                    type:"get",
                    url: "http://localhost:868/src/api/remove.php",
                    data:{
                        id:carId
                    },
                    success: function(data) {
                        $carlistArr = $.parseJSON(data);
                        $('#cartTotal').text($carlistArr.length);
                        autoHtml($('.cartList tbody'),$carlistArr);
                    }
                })
            });
           //点击增加当前商品数量
           $('.cartList tbody').on('click','.jia',function(){
                let carId = $(this).closest('tr').attr('car-id');
                $.ajax({
                    type:"get",
                    url: "http://localhost:868/src/api/tianjia.php",
                    data:{
                        id:carId
                    },
                    success: function(data) {
                        $carlistArr = $.parseJSON(data);
                        $('#cartTotal').text($carlistArr.length);
                        autoHtml($('.cartList tbody'),$carlistArr);
                    }
                })
            });
           //点击减少当前商品数量
           $('.cartList tbody').on('click','.jian',function(){
                let carId = $(this).closest('tr').attr('car-id');
                $.ajax({
                    type:"get",
                    url: "http://localhost:868/src/api/jianshao.php",
                    data:{
                        id:carId
                    },
                    success: function(data) {
                        $carlistArr = $.parseJSON(data);
                        $('#cartTotal').text($carlistArr.length);
                        autoHtml($('.cartList tbody'),$carlistArr);
                    }
                })
            });
        }
    });
    $('.cartLogo').on('click',function(){
        location.href = '../index.html';
    })
    
});