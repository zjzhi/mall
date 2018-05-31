//先引入jquery,并且定义一个bsheader模块
define(['jquery'],function($,html){
    return $.fn.extend({
        zHeader: function() {
            var html =`<div id="header">
            <div class="container clearfix">
                <div class="logo fl"></div>
                <div class="h_r fr">
                    <i class="fa fa-search "></i><input type="text" /><button>搜索</button>
                    <ul>
                        <li>热门搜索：</li>
                        <li><a href="#">
                            清凉一日
                        </a></li>
                        <li><a href="#">
                            蕾丝炫眸
                        </a></li>
                        <li><a href="#">
                            新美瞳
                        </a></li>
                        <li><a href="#">
                            诺思
                        </a></li>
                        <li><a href="#">
                            爱尔康
                        </a></li>
                    </ul>
                </div>
            </div>
        </div>`;
            return this.each(function() {
                $(this).html(html);
            });
        }
    });
});