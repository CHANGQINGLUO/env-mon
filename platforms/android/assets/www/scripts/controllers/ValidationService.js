var ValidationService = {

    validateName : function(rootScope,name){

      if($.trim(name)==''){
        rootScope.popup('姓名为空');
        return false;
      }else if(!/^[\u4E00-\u9FA5]{2,4}$/.test(name)){
        rootScope.popup("无效的姓名");
        return false;
      }
      return true;
    },
  
    validateUserId : function(rootScope,userId){

      if($.trim(userId)==''){
        //navigator.notification.alert('用户名为空', null, 'title', 'OK');
        rootScope.popup('用户名为空');
        return false;
      }else if(userId.length>30){
        rootScope.popup("用户名长度超过30个字符");
        return false;
      }else if(!/^[a-zA-Z0-9!@_]*$/.test(userId)){
        rootScope.popup("无效的用户名");
        return false;
      }
      return true;
    },

    validatePassword : function(rootScope,password){

        if($.trim(password)==''){
          rootScope.popup('密码为空');
          return false;
        }else if(password.length>30){
          rootScope.popup("密码长度超过30个字符");
          return false;
        }else if(!/^[a-zA-Z0-9!@_]*$/.test(password)){
          rootScope.popup("无效的密码");
          return false;
        }
        return true;
      },

    validateEmail : function(rootScope,email){

        if($.trim(email)==''){
          rootScope.popup('电子邮件地址为空');
          return false;
        }else if(!/^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(email)){
          rootScope.popup("无效的电子邮件地址");
          return false;
        }
        return true;
    },

    validatePhone : function(rootScope,phone){

        if($.trim(phone)==''){
          rootScope.popup('手机号码为空');
          return false;
        }else if(!/^(?:13\d|14\d|15\d|17\d|18\d)-?\d{5}(\d{3}|\*{3})$/.test(phone)){
          rootScope.popup("无效的手机号码");
          return false;
        }
        return true;


    },

    validateAddress : function(rootScope,address){

        if($.trim(address)==''){
          rootScope.popup('地址为空');
          return false;
        }else if(address.length>50){
          rootScope.popup("地址长度超过50个字符");
          return false;
        }
        return true;
    },

    validateCompany : function(rootScope,company){

        if($.trim(company)==''){
          rootScope.popup('公司名称为空');
          return false;
        }else if(company.length>50){
          rootScope.popup("公司名称长度超过50个字符");
          return false;
        }
        return true;
    },

    validateSamePassword :function(rootScope,password1, password2){
        if($.trim(password1)!=$.trim(password2)){
          rootScope.popup('新密码不一致');
          return false;
        }
        return true;
    }

};