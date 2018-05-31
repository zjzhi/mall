//先引入jquery,并且定义一个bsheader模块
define(['jquery'],function($,html){
    return $.fn.extend({
        zFoodter: function() {
            var html =`<div id="foodter">
            <div class="container">
                <img src="../img/nfot-bg-03.gif" />
                <ul class="foodter_link">
                    <li>
                        <ul class="fl">
                            <h3>关于可得</h3>
                            <li>公司简介</li>
                            <li>诚聘英才</li>
                            <li>媒体报道</li>
                        </ul>
                    </li>
                    <li>
                        <ul class="fl">
                            <h3>新手指南</h3>
                            <li>热点问题</li>
                            <li>会员优惠</li>
                            <li>礼券号使用</li>
                        </ul>
                    </li>
                    <li>
                        <ul class="fl">
                            <h3>配镜指南</h3>
                            <li>读懂验光单</li>
                            <li>如何选购隐形眼镜</li>
                            <li>眼镜学堂</li>
                        </ul>
                    </li>
                    <li>
                        <ul class="fl">
                            <h3>支付配送</h3>
                            <li>款到发货</li>
                            <li>支付方式</li>
                        </ul>
                    </li>
                    <li>
                        <ul class="fl">
                            <h3>售后服务</h3>
                            <li>30天随心退换货服务</li>
                            <li>如何办理退换货、退款</li>
                            <li>投诉建议</li>
                        </ul>
                    </li>
                    <li>
                        <ul class="fl">
                            <h3>帮助</h3>
                            <li>找回密码</li>
                            <li>联系我们</li>
                            <li>快递查询</li>
                        </ul>
                    </li>
                </ul>
                <p><a href="#">上海可得光学科技有限公司</a></p>
                <ul class="foodter_link2">
                    <li>联系我们</li>
                    <li> 友情链接</li>
                    <li> 眼镜百科</li>
                    <li>网站地图</li>
                    <li>隐私安全</li>
                </ul>
                <p><a href="#">Copyright 2006-2018 可得眼镜 KEDE.com 版权所有 沪ICP备14001373号  沪公网安备 31010702003385号 全国服务热线：4006-20-20-20</a></p>
                <img src="../img/bottomlink.PNG" alt="" />
            </div>
        </div>`;
            return this.each(function() {
                $(this).html(html);
            });
        }
    });
});