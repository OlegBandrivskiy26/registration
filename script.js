let db = JSON.parse(localStorage.getItem('arr')) || [];
$('#popUp2').hide(0);
$('#popUp').hide(0);

$('#register').click(function(){
    let loginInfo = newLogin.value;
    let passwordInfo = newPassword.value;
    let repidPasswordInfo = repidPassword.value;
    let object = {
        newPassword: passwordInfo,
        newLogin: loginInfo
    }
    if(passwordInfo == repidPasswordInfo && passwordInfo.length>3 && loginInfo.length>1){
        console.log('Реєстрація прйшла успішно')
        db.push(object);
        localStorage.setItem('db', JSON.stringify(db));
        $('#popUp').show(0);
    }else if(passwordInfo !== repidPasswordInfo){
        $('#popUp2').show(0);
    }else if(loginInfo.length<1){
        $('#popUp2').show(0);
    }else if(passwordInfo.length<3){
        $('#popUp2').show(0);
    }
})
$('.pop_up_return').click(function(){
    $('#popUp2').hide(0);
})
