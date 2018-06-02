//先引入jquery,并且定义一个bsheader模块
define(['jquery'],function($,html){
    return $.fn.extend({
        zTop: function() {
            var html =`
                    <div id="top">
                        <div class="container">
                            <p class="fl">
                                <i class="fa fa-star"></i>
                                收藏可得网
                            </p>
                            <p class="fl">您好，欢迎光临可得眼镜网！<a href="login.html">登录</a><a href="login.html">[免费注册]</a></p>
                            <ul class="top_r fr">
                                <li>
                                    <a href="#">
                                        <i></i>
                                        我的优惠券
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        
                                        我的可得
                                        <i class="fa fa-sort-down "></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        
                                        帮助中心
                                        <i class="fa fa-sort-down "></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="cart.html">
                                        <i class="fa fa-shopping-cart "></i>
                                        购物车
                                        
                                        <span id="cartTotal">0</span>
                                        件
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-mobile fa-lg"></i>
                                        手机版
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-qq"></i>
                                        客服电话：4006-20-20-20 ( 8:30-23:45 )
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>`;
            return this.each(function() {
                $(this).html(html);
            });
        }
    });
});