;requirejs(['jquery','base'],function(){
    //设置导航图片地址
    $('.nav_list img').attr({'src':'../img/nav_right.png'});
    //点击左侧菜单展开二级菜单
    $('.main_l ul').on('click','.fenleiList',function(){
        $(this).find('ul').toggle(400);
    })
    //点击更多选项效果
    $('.moreList').on('click',function(){
       $('.main_r_c ul li:nth-last-child(-n+2)').toggle(400);
    })
    //获取商品信息
    let $goodslistArr = [];
    //连接数据库
    $.ajax({
        type:"get",
        
        url: "http://localhost:868/src/api/getList.php",
        //context: document.body,
        success: function(data) {
            //获取到商品信息
            $goodslistArr = $.parseJSON(data);
            
            //设置列表页商品左侧边栏排行榜商品
             topList($('.hotgoodsList'),$goodslistArr,0,9);
            //设置人气推荐商品
            topList($('.main_r_t ul'),$goodslistArr,9,13);
            //生成侧边栏和顶部商品函数
            function topList($jqele,arr,sta,end){
                let $list_r_top = arr.slice(sta,end);
                let str = '';
                $list_r_top.map(function(item){
                    let $name = item.name.slice(0,12);
                    str+=`<li list-id=${item.id} class="lists">
                                <img src="${item.img}"/>
                                <h3>${$name}</h3>
                                <p>${item.sale}</p>
                               
                            </li>`;
                });
                $jqele.append(str);
            }
            //生成列表页商品
            ready($('.goodslist'),$goodslistArr,0,12);
            //生成列表页函数
            ;function ready($jqele,arr,sta,end){
                let $list_r_top = arr.slice(sta,end);
                let str ='';
                $list_r_top.map(function(item){
                    str+=`<li list-id=${item.id} class="lists">
                                <div>
                                    <img src="${item.img}"/>
                                    <span>${item.sale}</span>
                                    <h2>${item.name}</h2>
                                    <p>全新升级，改善滑片，更易配戴。</p>
                                    <h3></h3>
                                </div>
                                <h4>
                                   <span><i class="fa fa-shopping-cart"></i>加入购物车</span><span><i class="fa fa-star-half-empty"></i>收藏</span>
                                </h4>
                            </li>`;
                });
                 $jqele.html('');
                $jqele.append(str); 
            };

            //页码生成
            let pages = Math.ceil($goodslistArr.length/12);
            
            for(let i=0;i<pages;i++){
                $('.page').append(`<li class="fl">${i+1}</li>`);
            }
            //页码点击事件
            $('.page').on('click','li',function(){
                let $qty = $(this).text();
                let sta = ($qty-1)*12;
                if(sta<0){
                    sta=0;
                }
                ready($('.goodslist'),$goodslistArr,sta,sta+12);
                //点击商品跳转详情页
                $('#main').find('.lists').on('click',function(){
                    location.href = '../html/details.html?id=' + $(this).attr('list-id');
                }); 
            })
            $('')
            //点击商品跳转详情页
            $('#main').find('.lists').on('click',function(){
                location.href = '../html/details.html?id=' + $(this).attr('list-id');
            });

        }
    });
});