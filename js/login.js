;requirejs(['jquery','base'],function(){
      //点击跳转首页
      $('.loginImg').on('click',function(){
        location.href = '../index.html';
      })
        //点击切换登录页
      $('#foodter img').attr({'src':'../img/nfot-bg-03.gif'});
      $('.denglu').on('click',function(){
        $(this).css({'color':'#89B964'});
        $('.zhuce').css({'color':'#666'});
        $('.dengluList').show();
        $('.zhuceList').hide();
      });
      //点击切换注册页
      $('.zhuce').on('click',function(){
        //生成随机数  
        var rand = parseInt(Math.random() * (9999 - 1000 + 1) + 1000);     
        $(".zhuceList span").text(rand);
        //改变文字样式
        $(this).css({'color':'#89B964'});
        $('.denglu').css({'color':'#666'});
        $('.zhuceList').show();
        $('.dengluList').hide();
      })
      //实现登录
      $('.dengluList button').on('click',function(){
        //获取用户名和密码
        let $uname = $('.dengluList .uname').val();
        let $upassword = $('.dengluList .upassword').val();
        //请求数据库
        $.ajax({
            type:"get",
            url: "http://localhost:868/src/api/login.php",
            data:{
                uname:$uname,
                upassword: $upassword
            },
            success: function(data) {
                data=='登录成功！'?location.href = '../index.html':alert(data);
            
            }
        });
      });
        //点击切换验证码
        $(".zhuceList span").on('click',function(){
            var rand = parseInt(Math.random() * (9999 - 1000 + 1) + 1000); 
            $(".zhuceList span").text(rand);
        });
        // 封装验证输入是否合法的函数
         function cation(element,regExp){
              element.onblur = function(){
                var txt = this.value;
                var title = this.title;
                  if(regExp.test( txt )){
                   
                   $('.zhuceList .error').text('');
                  }
                  else{
                   $('.zhuceList .error').text(title+"错误").css({'color':'red'});
                  }
              }
          }
          //手机号码验证
          var unameEeg =/^1[3|4|5|8][0-9]\d{4,8}$/;
          cation($('.zhuceList .uname')[0],unameEeg);
          //密码验证
          var upasswordReg =/^[a-z][\w\d]{6,32}$/g;
          cation($('.zhuceList .upassword')[0],upasswordReg);
          //验证码验证
          $('.zhuceList .yanzhengma').on('blur',function(){
            if($(this).val()!= $(this).next('span').text()){
                $('.zhuceList .error').text('验证码错误！');
            }
            else{
                $('.zhuceList .error').text('');
            }
          });
        //实现注册
        
        $('.zhuceList button').on('click',function(){
            if($('.zhuceList .error').text()==''){
                //获取用户名和密码
                let $uname = $('.zhuceList .uname').val();
                let $upassword = $('.zhuceList .upassword').val();
                //请求数据库
                $.ajax({
                    type:"get",
                    url: "http://localhost:868/src/api/signin.php",
                    data:{
                        uname:$uname,
                        upassword: $upassword
                    },
                    success: function(data) {
                       data=='注册成功！'?location.href = '../index.html':alert(data);
                
                    }
                });
            }
            else{
                alert('输入信息有误！');
            }
            
        });    
        






      





});