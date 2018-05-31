//定义轮播图插件
;requirejs(['jquery-3.3.1','base'],function(){
    (function($){
        $.fn.carousel = function(param){
            var carousel = param.carousel,//轮播框架
            indexContainer = param.indexContainer,//下标框架
            list = $(carousel).children("li"),//轮播内容
            len = list.length,//轮播内容数量
            prev = param.prev,//上翻按钮
            next = param.next,//下翻按钮
            timing = param.timing,//自动轮播间隔时间
            animateTime = param.animateTime,//动画时间
            autoPlay = param.autoPlay,//自动播放 true/false
            timer,//定时器
            index = 1,//索引值
            indexList,//下标列表
            indexClassName = "js_index",//下标高亮类名
            action = true,//开始滚动 true/false
            totalWidtn = list.width()*(list.length+2),//轮播框架总宽度
            direction = param.direction;//滚动方向
            
            /*初始化*/
            for(var i = 1;i <= list.length;i++){
                $(indexContainer).append("<li>"+i+"</li>")
            }
            $(carousel).width(totalWidtn)
            .append($(list[0]).clone())
            .prepend($(list[list.length-1]).clone())
            .css("left","-"+list.width()+"px");
            list = $(carousel).children("li");
            indexList = $(indexContainer).children("li");
            $(indexList[index-1]).addClass(indexClassName);

            /*判断是否自动播放*/
            if (autoPlay) {
                startTiming();
                $(carousel+","+prev+","+next+","+indexContainer).hover(function(){
                    window.clearInterval(timer);
                },function(){
                    startTiming();
                });
            }

            /*计时方法*/
            function startTiming(){
                /*判断方向*/
                switch (direction) {
                    case "right" :
                        timer = window.setInterval("$.rightChangeImg();",timing);
                    break;
                    case "left" :
                        timer = window.setInterval("$.leftChangeImg();",timing);
                    break;
                    default:
                        timer = window.setInterval("$.leftChangeImg();",timing);
                }
            };

            /*切换高亮下标*/
            $.extend({changeIndex:function(index){
                $(indexList).removeClass(indexClassName);
                $(indexList[index]).addClass(indexClassName);
            }});
            
            /*向左切换图片*/
            $.extend({leftChangeImg:function(){
                action = false;
                if (index==len) {
                    index = 0;
                    $(carousel).stop(true,true).css("left","0px");
                }
                index++;
                $(carousel).stop(true,true).animate({
                    left : "-="+list.width()+"px"
                },animateTime);
                setTimeout(function(){
                    if (index==len) {
                        index = 0;
                        $(carousel).stop(true,true).css("left","0px");
                    }
                    action = true;
                },animateTime);
                $.changeIndex(index-1);
            }});
            /*向右切换图片*/
            $.extend({rightChangeImg:function(){
                action = false;
                if (index==0) {
                    index = len;
                    $(carousel).stop(true,true).css("left","-"+left+"px");
                }
                index--;
                var left = totalWidtn-list.width()*2;
                $(carousel).stop(true,true).animate({
                    left : "+="+list.width()+"px"
                },animateTime);
                setTimeout(function(){
                    if (index==0) {
                        index = len;
                        $(carousel).stop(true,true).css("left","-"+left+"px");
                    }
                    action = true;
                },animateTime);
                if (index == 0) {
                    $.changeIndex(len-1);
                }else{
                    $.changeIndex(index-1);
                }
            }});
            /*下翻点击处理*/
            $(next).on("click",function(){
                var nowLeft = Math.abs(parseInt($(carousel).css("left")));
                var left = totalWidtn-list.width()*2;
                if (action) {
                    if (nowLeft == left) {
                        index = 0;
                        $(carousel).stop(true,true).css("left","0px");
                    }
                    $.leftChangeImg();
                }
            });

            /*上翻点击处理*/
            $(prev).on("click",function(){
                var nowLeft = Math.abs(parseInt($(carousel).css("left")));
                var left = totalWidtn-list.width()*2;
                if (action) {
                    if (nowLeft == 0) {
                        index = len;
                        $(carousel).stop(true,true).css("left","-"+left+"px");
                    }
                    $.rightChangeImg();
                }

            });
            /*下标点击处理*/
            indexList.on("click",function(){
                var no = $(this).index()+1;
                if (action) {
                    if (no > index) {
                        $.changeIndex(no-1);
                        action = false;
                        var left = (no - index)*list.width();
                        index = no;
                        $(carousel).stop(true,true).animate({
                            left : "-="+left+"px"
                        },animateTime);
                        setTimeout(function(){
                            action = true;
                        },animateTime);
                    }else if (no < index) {
                        $.changeIndex(no-1);
                        action = false;
                        var left = (index - no)*list.width();
                        index = no;
                        $(carousel).stop(true,true).animate({
                            left : "+="+left+"px"
                        },animateTime);
                        setTimeout(function(){
                            action = true;
                        },animateTime);
                    }
        
                }
            });
        }
    })(jQuery);

    //引用轮播图插件
    $(".ban_c").carousel({
    carousel: ".carousel", //轮播图容器
    indexContainer: ".img-index", //下标容器 
    prev: ".carousel-prev", //左按钮 
    next: ".carousel-next", //右按钮 
    timing: 3000, //自动播放间隔
    animateTime: 700, //动画时间 
    autoPlay: true, //是否自动播放 true / false 
    direction: "left", //滚动方向right / left
    });
    //设置轮播图点击
    $(".ban_c").hover(function() {
            $(".carousel-prev,.carousel-next").fadeIn(300);
        }, function() {
            $(".carousel-prev,.carousel-next").fadeOut(300);
        });
        $(".carousel-prev").hover(function() {
            $(this).find("img").attr("src", "img/bannerimg/left2.png");
        }, function() {
            $(this).find("img").attr("src", "img/bannerimg/left1.png");
        });
        $(".carousel-next").hover(function() {
            $(this).find("img").attr("src", "img/bannerimg/right2.png");
        }, function() {
            $(this).find("img").attr("src", "img/bannerimg/right1.png");
        });
    //促销活动和最新动态tab特效
    $('.cont_top_r_sp2').on('mouseover',function(){
        $(this).css({'background':'#fff'});
        $('.cont_top_r_sp1').css({'background':'#ccc'});
        $('.cont_top_r_dv1').css({'display':'none'});
        $('.cont_top_r_dv2').css({'display':'block'});
    })
    $('.cont_top_r_sp1').on('mouseover',function(){
        $(this).css({'background':'#fff'});
        $('.cont_top_r_sp2').css({'background':'#ccc'});
        $('.cont_top_r_dv2').css({'display':'none'});
        $('.cont_top_r_dv1').css({'display':'block'});
    })
    //秒杀活动tab特效
    $('.cont_scond_l_tbtn').on('mouseover',function(){
        $(this).css({'background':'#fff','color':'#90C31F','border-left':'5px solid #90C31F'});
        $('.cont_scond_l_bbtn').css({'background':'#ccc','color':'#B2B2B2','border-left':'none'});
        $('.cont_scond_l_ul2').css({'display':'none'});
        $('.cont_scond_l_ul1').css({'display':'block'});
    })
    $('.cont_scond_l_bbtn').on('mouseover',function(){
        $(this).css({'background':'#fff','color':'#90C31F','border-left':'5px solid #90C31F'});
        $('.cont_scond_l_tbtn').css({'background':'#ccc','color':'#B2B2B2','border-left':'none'});
        $('.cont_scond_l_ul1').css({'display':'none'});
        $('.cont_scond_l_ul2').css({'display':'block'});
    })
    //从数据库里获取商品数据
    let $goodslistArr = [];
    $.ajax({
        type:"get",
        url: "http://localhost:868/src/api/getList.php",
        //context: document.body,
        success: function(data) {
            //获取到商品信息
            $goodslistArr = $.parseJSON(data);
            // console.log($goodslistArr);
            //设置主页商品左侧边栏排行榜商品
            let $list_top = $goodslistArr.slice(0,3);
            let str = '';
            $list_top.map(function(item){
                let $imgsrc = item.img.slice(3);
                let $name = item.name.slice(0,12);
                str+=`<li data-id=${item.id} class="lists">
                            <img src="${$imgsrc}"/>
                            <p>${$name}</p>
                            <span>${item.sale}</span><del>${item.prices}</del>
                            <img src="img/xingxing.PNG"/>
                        </li>`;
            });
            $('.c1f_l_list').append(str);
            //设置主页商品列表
            let $goodslist = $goodslistArr.slice(0,11);
            let str1 = '';
            $goodslist.map(function(item){
                let $imgsrc = item.img.slice(3);
                let $name = item.name.slice(0,12);
                str1+=`<li data-id=${item.id} class="lists"><img src="${$imgsrc}"/><p>${item.sale}</p><h5>${$name}</h5><h6>积分可抵扣10元</h6></li>`;
            }).join('\n');
            
            $('.c1f_r ul').html(str1);
            $('.c1f_r ul li:nth-child(7)').html('<img src="img/1f_ban2.jpg"/>');
            //设置主页1f底部商品
            let str2='';
            let $list_bot = $goodslistArr.slice(20,28);
            $list_bot.map(function(item) {
                let $imgsrc2 = item.img.slice(3);
                str2+= `<li data-id=${item.id} class="lists"><img src="${$imgsrc2}"/></li>`;
            }).join('\n');
            $('.c1f_b ul').html(str2);
            //设置商品点击事件,点击商品跳转详情页
            $('#main').find('.lists').on('click',function(){
                location.href = '../html/details.html?id=' + $(this).attr('data-id');
            });
            
        }


    });
});