function sum() {
    let num1 = parseFloat(document.getElementById('num1').value); // Получаем значение элементов по ID
    let num2 = parseFloat(document.getElementById('num2').value);
    if (isNaN(num1)==true) num1=0; //проверяем, что в полях цифры
    if (isNaN(num2)==true) num2=0;
    alert((num1 + num2).toFixed(1)); //складываем и выводим с окрулением до 10х
}
