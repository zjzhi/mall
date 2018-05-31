;requirejs(['base'],function(){
    //设置导航图片地址
    $('.nav_list img').attr({'src':'../img/nav_right.png'});
    // $('#foodter img').attr({'src':'../img/nfot-bg-03.gif'});
    $('.nav_l').on('mouseover',function(){
        $('.nav_list').show().css({'z-index':'100'});
    });
    $('.nav_list ul').on('mouseleave',function(){
        setTimeout(function(){$('.nav_list').hide();}, 500);
    });

    



    //获取商品id
    var arr = ((location.search).slice(1)).split('&');
    var obj ={};
    arr.forEach(function(items){
        var newArr = items.split('=');

        for(var i=0;i<newArr.length;i++){
            obj[newArr[0]] =decodeURI(newArr[1]);
        }
    })
    $goodId=obj.id;
    let $dtlist =[];
    $.ajax({
        type:"get",
        url: "http://localhost:868/src/api/details.php",
        data:{
            id:$goodId
        },
        success: function(data) {
            $dtlist = $.parseJSON(data);
            // console.log($dtlist)
            
            $('.mt_r .title').html($dtlist[0].name);
            $('.mt_r .price span').html($dtlist[0].sale);
            $('.mt_r .price del').html($dtlist[0].prices);
            $('.mt_r .price i').html($dtlist[0].poin);
            $('.mt_r .bianhao span').html($dtlist[0].id);
            let sum = $dtlist[0].prices - $dtlist[0].sale;
            $('.mt_r .price div i').html(sum);


            //设置选择商品列表图片
            $('.checkgood ul li:nth-child(2)').html(`<img src="${$dtlist[0].img}"/>`);

            //设置全部li
            $('#etalage li').html(`<img src="${$dtlist[0].detailImg}" class="etalage_thumb_image"/> <img src="${$dtlist[0].detailImg}" class="etalage_big_image"/>`);
            
            //设置第一张图
            $('#etalage li:first-child').html(`<img src="${$dtlist[0].img}" class="etalage_thumb_image" title="first img"/><img src="${$dtlist[0].img}" class="etalage_big_image" /> `);
            //详情页
            $('.xiangqing').html(`<img src="${$dtlist[0].详情}"/>`);

            //放大镜配置width: 406px;
            $("#etalage").zoom({
                zoom_area_width: 406,
                thumb_image_width: 405,     // 当前展示图片的宽
                thumb_image_height: 405,
                autoplay_interval :3000,
                small_thumbs : 5,
                autoplay : true,
                source_image_height:1200,
            });

            //设置光度选择下拉列表
            $('#zuoyan').on('click',function(){
                $('.guangdu').css({'top':'36px'}).slideToggle();
            });
            $('#youyan').on('click',function(){
                $('.guangdu').css({'top':'66px'}).slideToggle();

            });
            //点击下拉列表，label值为选定值
            $('.guangdu').on('click','li',function(){
                $('i').prev('label').text($(this).text());
                $('.guangdu').slideUp();;
            });
            //点击增加商品数量
            $('.add').on('click',function(){
               let $tx =  $(this).prev('span').text();
               $tx=$tx-0+1;
               $(this).prev('span').text($tx);
            })
            //点击减少商品数量
            $('.del').on('click',function(){
                let $tx =  $(this).next('span').text();
               $tx=$tx-1;
               if($tx<0){
                $tx=0;
               }
               $(this).next('span').text($tx);
            })

        }
    });
})