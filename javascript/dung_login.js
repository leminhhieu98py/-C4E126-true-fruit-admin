function Checklogin(event)
{
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if (username == '')
    {

        document.getElementById('username').style.backgroundColor = 'yellow';

        innerHTML = 'Tên đăng nhập ko được để trống ';
    }
    

}
