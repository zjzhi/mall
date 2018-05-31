;requirejs(['base'],function(){
    $.ajax({
        type:"get",
        url: "http://localhost:868/src/api/cart.php",
        success: function(data) {
           let $carlistArr=JSON.parse(data);
           console.log($carlistArr);
           let str='';
           $carlistArr.map(function(item){
                let $psum = item.num*item.sale;
                str+=`<tr car-id="${item.id}">
                                <td><img src="${item.img}"/></td>
                                <td><h2>${item.name}</h2></td>
                                <td>
                                    左眼光度：<span class="guangdul">${item.eyel}</span>
                                    <br />
                                    右眼光度：<span class="guangdur">${item.eyer}</span>
                                </td>
                                <td class="shuliang">
                                    <i>-</i>
                                    <span>${item.num}</span>
                                    <i>+</i>
                                    <br />
                                    <i>-</i>
                                    <span>${item.num}</span>
                                    <i>+</i>
                                </td>
                                <td class="price"><span>${item.sale}</span></td>
                                <td class="sum"><span>${$psum}</span></td>
                                <td><span class="del">删除</span></td>
                            </tr>`;
           });
            $('.cartList tbody').html(str);
        }
    });
});