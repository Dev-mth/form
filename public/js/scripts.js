const form = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
/* Verificar a estrutura do email */
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;


addEventListener("submit", (event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();
    mainPasswordValidate();
    comparePassword();
});


/*form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();
    mainPasswordValidate();
    comparePassword();
});*/

/* Validar error */
function setError(index)
{
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

/*Remover error */
function removeError(index)
{
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}
/* Validar nome */
function nameValidate() {
    if (campos[0].value.length < 3)
    {
        setError(0);
    }
    else
    {
        removeError(0);
    }
}
/* Validar email */
function emailValidate()
{
    if(!emailRegex.test(campos[1].value))
    {
        setError(1);
    }
    else
    {
        removeError(1);
    }
}
/* Validar senha */
function mainPasswordValidate()
{
    if(campos[2].value.length < 8)
    {
        setError(2);
    }
    else
    {
        removeError(2);
        comparePassword();
    }
}
/* comparar senhas */
function comparePassword()
{
    if(campos[2].value == campos[3].value && campos[3].value.length >= 8)
    {
        removeError(3);
    }
    else
    {
        setError(3);
    }
}
