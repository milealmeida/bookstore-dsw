function validateForm(objForm){
    let name = objForm.name;

    if(name.value == ''){
        window.alert('Preencha o campo Nome Completo.');
        name.focus();
        return false;
    }

    let email = objForm.email;
    let caracter = '';
    let temArroba = false;
    let temPonto = false;
    if(email.value == ''){
        window.alert('Preencha o campo email');
        email.focus();
        return false;
    }
    for(let i = 0; i < email.value.length; i++){
        caracter = email.value.charAt(i);
        if(caracter == '@') temArroba = true;
        if(caracter == '.') temPonto = true; 
    }
    if(temArroba == false || temPonto == false){
        window.alert('O campo email deve ter ao menos um @ e um .');
        email.value = '';
        email.focus();
        return false;
    }

    let cpf = objForm.cpf;

    if(cpf.value == ''){
        window.alert('Preencha o campo CPF.');
        cpf.focus();
        return false;
    }

    let whatsapp = objForm.whatsapp;

    if(whatsapp.value == ''){
        window.alert('Preencha o campo Whatsapp.');
        whatsapp.focus();
        return false;
    }

    let password = objForm.password;

    if(password.value == ''){
        window.alert('Preencha o campo Senha.');
        password.focus();
        return false;
    }

    return true;

}

function formataWhats(obj){
    if(event.keyCode != 8){
        switch(obj.value.length){
            case 1: obj.value = '(' + obj.value; break;
            case 3: obj.value = obj.value + ')'; break;
            case 10: obj.value = obj.value += '-'; break;
        }
    }
}

function formataCPF(objCpf){
    let cpf = objCpf.value;
    let valor = cpf.charAt(cpf.length - 1);
    if(valor != '.' && valor != '-' && isNaN(valor)){
        window.alert('Digite somente números');
        objCpf.value = ''
    }

    switch(objCpf.value.length){
        case 3: objCpf.value += '.'; break;
        case 7: objCpf.value += '.'; break;
        case 11: objCpf.value += '-'; break;
    }
    
}

function validateFormBook(objBook){
    let book = objBook.book;

    if(book.value == ''){
        window.alert('Preencha o campo Título do livro.');
        book.focus();
        return false;
    }

    let name_author = objBook.name_author;

    if(name_author.value == ''){
        window.alert('Preencha o campo Nome do autor.');
        name_author.focus();
        return false;
    }

    let image = objBook.image;

    if(image.value == ''){
        window.alert('Preencha o campo Link da capa do livro.');
        image.focus();
        return false;
    }

    let synopsis = objBook.synopsis;

    if(synopsis.value == ''){
        window.alert('Preencha o campo Sinopse do livro.');
        synopsis.focus();
        return false;
    }

    let price = objBook.price;

    if(price.value == ''){
        window.alert('Preencha o campo Preço.');
        price.focus();
        return false;
    }
}