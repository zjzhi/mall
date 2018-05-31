//先引入jquery,并且定义一个bsheader模块
define(['jquery'],function($,html){
    return $.fn.extend({
        zNav: function() {
            var html =`
                    <div id="nav">
            <div class="container clearfix">
                <div class="nav_l fl">
                    全部商品分类
                    <i class="fa fa-navicon "></i>
                </div>
                <div class="nav_list">
                <ul>
                        <li class="li1">

                            <a href="#">
                                <i class="fa fa-bullseye"></i>
                                <span>透明隐形眼镜</span>
                            </a>
                            <div >
                                <ul>
                                    <li class="li2">品牌
                                        <ul>
                                            <li class="fontColor">博士伦</li>
                                            <li>强生</li>
                                            <li>视康爱尔康</li>
                                            <li class="fontColor">库博</li>
                                            <li>海昌</li>
                                            <li>卫康</li>
                                            <li>美若康</li>
                                            <li class="fontColor">Miru米如</li>
                                            <li>依视明</li>
                                            <li>奥克拉</li>
                                            <li>实瞳</li>
                                            <li>科莱博</li>
                                            <li>蔡司</li>
                                            <li>茵洛</li>
                                            <li>菲士康</li>
                                            <li>更多品牌>></li>
                                        </ul>
                                    </li>
                                    <li class="li2">周期
                                        <ul>     
                                            <li class="fontColor">日抛</li>
                                            <li>双周抛</li>
                                            <li>月抛</li>
                                            <li>季抛</li>
                                            <li class="fontColor">半年抛</li>
                                            <li>年抛</li>
                                        </ul>
                                    </li>
                                    <li class="li2">含水量
                                        <ul>  
                                            <li class="fontColor">43-69%</li>
                                            <li>38-42%</li>
                                            <li>≤37%</li>
                                        </ul>
                                    </li>
                                    <li class="li2">定制
                                        <ul>  
                                            <li class="fontColor">高度近视</li>
                                            <li>近视散光</li>
                                            <li>远视散光</li>
                                        </ul>
                                    </li>
                                    <li class="li2">热门
                                        <ul>  
                                            <li class="fontColor">硅水凝胶(超长戴)</li>
                                            <li>防紫外线(抗UV)</li>
                                            <li>防眼干/眼红</li>
                                        </ul>
                                    </li>
                                </ul>
                                <div class="nav_right"></div>
                            </div>
                        </li>
                        <li class="li1">

                            <a href="#">
                                <i class="fa fa-eye"></i>
                                <span>彩色隐形眼镜</span>
                            </a>
                            <div>
                                <ul>
                                <li class="li2">品牌
                                    <ul> 
                                        <li class="fontColor">博士伦</li>
                                        <li class="fontColor">强生</li>
                                        <li>海昌</li>
                                        <li class="fontColor">实瞳</li>
                                        <li class="fontColor">诺思</li>
                                        <li>心の拉花</li>
                                        <li>视康</li>
                                        <li>科莱博</li>
                                        <li>海俪恩</li>
                                        <li>库博</li>
                                        <li>安娜苏</li>
                                        <li>NEO</li>
                                        <li>美若康</li>
                                        <li>茵洛</li>
                                        
                                    </ul>
                                </li>
                                <li class="li2">周期
                                    <ul>     
                                        <li>日抛</li>
                                        <li>双周抛</li>
                                        <li>月抛</li>
                                        <li>季抛</li>
                                        <li>半年抛</li>
                                        <li>年抛</li>
                                    </ul>
                                </li>
                                <li class="li2">色系
                                    <ul>  
                                        <li>黑色</li>
                                        <li>棕色</li>
                                        <li>灰色</li>
                                        <li>蓝色</li>
                                        <li>紫色</li>
                                        <li>粉色</li>
                                        <li>绿色</li>
                                    </ul>
                                </li>
                                <li class="li2">直径
                                    <ul>    
                                        <li>≤13.5mm</li>
                                        <li>13.6mm-14.00mm</li>
                                        <li>≥14.1mm</li>
                                    </ul>
                                </li>
                                <li class="li2">价格
                                    <ul>    
                                        <li><100元</li>
                                        <li>100-199元</li>
                                        <li>200-299元</li>
                                    </ul>
                                </li>
                                <li class="li2">热门
                                    <ul>         
                                        <li>自然甜美</li>
                                        <li>大直径</li>
                                        <li>个性混血</li>
                                        <li>小圆环(增大增亮)</li>
                                        <li>蕾丝花纹</li>
                                        <li>男生美瞳</li>
                                    </ul>
                                </li>
                                </ul>
                                <div class="nav_right"></div>
                            </div>
                        </li>
                        <li class="li1">

                            <a href="#">
                                <i class="fa fa-leaf"></i>
                                <span>护理用品</span>
                            </a>
                            <div>
                                 <ul>
                                    <li class="li2">品牌
                                        <ul> 
                                            <li>博士伦</li>
                                            <li>强生</li>
                                            <li>海昌</li>
                                            <li>实瞳</li>
                                            <li>诺思</li>
                                            <li>心の拉花</li>
                                            <li>视康</li>
                                            <li>科莱博</li>
                                            <li>海俪恩</li>
                                            <li>库博</li>
                                            <li>安娜苏</li>
                                            <li>NEO</li>
                                            <li>美若康</li>
                                            <li>更多品牌>></li>
                                        </ul>
                                    </li>
                                    <li class="li2">热门
                                        <ul>          
                                            <li>促销装</li>
                                            <li>旅行装</li>
                                            <li>原装进口</li>
                                            <li>彩瞳专用</li>
                                            <li>双氧水</li>
                                            <li>洗眼液</li>
                                        </ul>
                                    </li>
                                    <li class="li2">工具
                                        <ul>     
                                            <li>伴侣盒</li>
                                            <li>双联盒/镊子</li>
                                            <li>超声波清洗器</li>
                                            <li>取戴器</li>
                                        </ul>
                                    </li>
                                </ul>
                                <div class="nav_right"></div>
                            </div>
                        </li>
                        <li class="li1">

                            <a href="#">
                                <i class="fa fa-eye-slash"></i>
                                <span>近视眼镜</span>
                            </a>
                            <div>
                                <ul>
                                <li class="li2">品牌
                                    <ul>           
                                        <li>HAN</li>
                                        <li>KD</li>
                                        <li>Koffein</li>
                                        <li>Police</li>
                                        <li>Ray</li>
                                        <li>Ban</li>
                                        <li>CK</li>
                                        <li>MCM</li>
                                        <li>NIKE</li>
                                        <li>Chloé</li>
                                        <li>更多>></li>
                                    </ul>
                                </li>
                                <li class="li2">款式
                                    <ul>          
                                        <li>男款</li>
                                        <li>女款</li>
                                       
                                    </ul>
                                </li>
                                <li class="li2">风格
                                    <ul>   
                                        <li>商务</li>
                                        <li>休闲</li>
                                        <li>复古</li>
                                        <li>潮款</li>
                                        <li>学生</li>
                                    </ul>
                                </li>
                                </ul>
                                <div class="nav_right"></div>
                            </div>  
                        </li>
                        <li class="li1">

                            <a href="#">
                                <i class="fa fa-sun-o"></i>
                                <span>太阳眼镜</span>
                            </a>
                            <div>
                                 <ul>
                                    <li class="li2">品牌
                                        <ul>           
                                            <li>HAN</li>
                                            <li>KD</li>
                                            <li>Koffein</li>
                                            <li>Police</li>
                                            <li>Ray</li>
                                            <li>Ban</li>
                                            <li>CK</li>
                                            <li>MCM</li>
                                            <li>NIKE</li>
                                            <li>Chloé</li>
                                            <li>更多>></li>
                                        </ul>
                                    </li>
                                    <li class="li2">款式
                                        <ul>          
                                            <li>男款</li>
                                            <li>女款</li>
                                            <li>儿童款</li>
                                           
                                        </ul>
                                    </li>
                                    <li class="li2">框型
                                        <ul>      
                                            <li>蛤蟆镜</li>
                                            <li>大框</li>
                                            <li>偏圆框</li>
                                            <li>偏方框</li>
                                        </ul>
                                    </li>
                                </ul> 
                                <div class="nav_right"></div>
                            </div>
                        </li>
                        <li class="li1">

                            <a href="#">
                                <i class="fa fa-binoculars"></i>
                                <span>功能眼镜</span>
                            </a>
                            <div>
                                <ul>
                                    <li class="li2">热门
                                        <ul>              
                                            <li>防辐射眼镜</li>
                                            <li>偏光太阳镜</li>
                                            <li>近视太阳镜</li>
                                            <li>儿童太阳镜</li>
                                            
                                        </ul>
                                    </li>
                                    <li class="li2">运动镜
                                        <ul>            
                                            <li>运动镜</li>
                                            <li>近视游泳镜</li>
                                            <li>司机驾驶镜</li>
                                           
                                        </ul>
                                    </li>
                                    <li class="li2">老化镜
                                        <ul>
                                            <li>老花镜</li>
                                            <li>吉祥</li>
                                            <li>方圆</li>
                                            <li>Podreader</li>
                                            <li>原点</li>
                                        </ul>
                                    </li>
                                    <li class="li2">配件
                                        <ul>
                                            <li>框架配件</li>
                                            <li>镜盒/镜布</li>
                                            <li>护理剂/鼻垫</li>
                                           
                                        </ul>
                                    </li>
                                </ul> 
                                <div class="nav_right"></div>
                            </div>
                        </li>
                        <li class="li1">

                            <a href="#">
                                <i class="fa fa-flask"></i>
                                <span>美妆个妆</span>
                            </a>
                            <div>
                                <ul>
                                    <li class="li2">眼部保健
                                        <ul>                   
                                            <li>眼罩（蒸汽眼罩）</li>
                                            <li>护眼贴</li>
                                            <li>眼膜</li>
                                            <li>眼霜</li>
                                            <li>洗眼液</li>
                                            <li>其他</li>
                                            
                                        </ul>
                                    </li>
                                    <li class="li2">面部护理
                                        <ul>                  
                                            <li>面膜</li>
                                            <li>保湿水</li>
                                            <li>乳液</li>
                                            <li>喷雾</li>
                                            <li>面霜</li>
                                            <li>精华</li>
                                            <li>套装</li>
                                           
                                        </ul>
                                    </li>
                                    <li class="li2">身体护理
                                        <ul> 
                                            <li>洁面</li>
                                            <li>洗发</li>
                                            <li>护发</li>
                                            <li>脱毛膏</li>
                                            <li>剃毛器</li>
                                            <li>沐浴露</li>
                                            <li>痘痘贴</li>
                                            <li>洗手液</li>
                                            <li>身体乳</li>
                                            <li>护手霜</li>
                                            <li>蒸脸器</li>
                                            <li>湿巾</li>
                                            <li>口罩</li>
                                        </ul>
                                    </li>
                                    <li class="li2">彩妆专区
                                        <ul>          
                                            <li>卸妆</li>
                                            <li>眼线</li>
                                            <li>眉笔/染眉膏/眉粉</li>
                                            <li>眼影</li>
                                            <li>妆前乳/隔离/防晒 修颜/腮红</li>
                                            <li>粉底液/bb霜/气垫bb</li>
                                            <li>粉饼/散粉</li>
                                            <li>唇膏</li>
                                            <li>口红</li>
                                            <li>美妆工具</li>
                                            <li>指尖色彩</li>
                                        </ul>
                                    </li>
                                    <li class="li2">品牌分类
                                        <ul> 
                                            <li>博士伦</li>
                                            <li>强生</li>
                                            <li>海昌</li>
                                            <li>实瞳</li>
                                            <li>诺思</li>
                                            <li>心の拉花</li>
                                            <li>视康</li>
                                            <li>科莱博</li>
                                            <li>海俪恩</li>
                                            <li>库博</li>
                                            <li>安娜苏</li>
                                            <li>NEO</li>
                                            <li>美若康</li>
                                            <li>更多品牌>></li>
                                        </ul>
                                    </li>
                                </ul> 
                                <div class="nav_right"></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <ul class="fl nav_top">
                    <li><a href="../index.html">首页</a></li>
                    <li><a href="#">海外购</a></li>
                    <li><a href="#">彩瞳</a></li>
                    <li><a href="#">隐形眼睛</a></li>
                    <li><a href="#">护理用品</a></li>
                    <li><a href="#">框架眼镜</a></li>
                    <li><a href="#">美妆个妆</a></li>
                    <li><a href="#">积分商城</a></li>
                </ul>
            </div>
        </div>`;
            return this.each(function() {
                $(this).html(html);
            });
        }
    });
});