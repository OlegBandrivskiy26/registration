$('.loader').hide(0);
$('#Enter').click(function(){
    let data = localStorage.getItem('db');
    let json = JSON.parse(data);
    let pasword = (json[0].newPassword);
    let login = (json[0].newLogin);
    let loginInfo23 = login23.value;
    let passwordInfo23 = password.value;
    if(pasword == passwordInfo23 && login == loginInfo23 ){
        $('.loader').show(0);
    }
})
