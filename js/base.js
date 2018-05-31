;require.config({
    paths: {
        'jquery': 'jquery-3.3.1',
        //一个组件 一个模块
        'zTop': '../js/zTop/zTop',
        'zHeader': '../js/zHeader/zHeader',
        'zNav': '../js/zNav/zNav',
        'zFoodter': '../js/zFoodter/zFoodter',
        'details' : '../js/details',
        'login': '../js/login',
        'jqzoom':'../lib/jqzoom',
        'list':'../js/list',
        'cart':'../js/cart',
        'common':'../js/common'
    },
    shim:{
        'jqzoom':{
            deps:["jquery"]
         },
        'details':{
             deps: ["jquery","zNav","jqzoom",'common']//设置依赖
        },
        'list':{
            deps: ["jquery","zNav",'zHeader','zTop','zFoodter']
        },
        'cart':{
            deps:["jquery"]
        }
    }
   
});

require(['jquery', 'zTop', 'zHeader', 'zFoodter','zNav','details','login','list','cart','common'], function($, zTop, zHeader, zFoodter,zNav) {
    $("zTop").zTop();
     $("zNav").zNav();
    $("zHeader").zHeader();
    $("zFoodter").zFoodter();
    $('.nav_list').css({'display':'none'});
    $('.li1').addClass('has-menu').append('<i class="fa fa-chevron-right"></i>');
    $('.li2').append('<i class="fa fa-chevron-right"></i>');
    $('.nav_list').on('mouseover','.has-menu',function(){
        $(this).children('i').hide();
        $(this).children('div').show();
        // $(this).removeChild('.fa');
    })
    .on('mouseout','.has-menu',function(){
        $(this).children('i').show();
        $(this).children('div').hide();
        // $(this).append('<i class="fa fa-chevron-right"></i>')
    });
    $('.nav_right').append("<img src='img/nav_right.png'/>");
});