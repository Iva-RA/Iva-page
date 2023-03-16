var sendMsg = document.getElementById('sendMsg');

sendMsg.addEventListener('click', function(e){
    e.preventDefault();
    var yourName = document.getElementById('yourName');
    var number = document.getElementById('number');
    var email = document.getElementById('email');
    var message = document.getElementById('message');
    var body = `name: ${yourName} <br/> number: ${number} >br/> email: ${email} <br/> message: ${message}`;

    Email.send({
        Host : "smtp.gmail.com",
        Username : "ivarajkovic1628@gmail.com",
        Password : "qzlaybalvbkbqmvy",
        To : 'ivarajkovic1628@gmail.com',
        From : email,
        Subject : yourName,
        Body : body
    }).then(
      message => alert(message)
    );
})

