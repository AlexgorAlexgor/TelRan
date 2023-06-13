  const input = prompt("Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа  ::::>>     Enter number:");
   const numb1 = Number(input); // NaN
    if (Number.isNaN(numb1)) {
      console.log("enterd value is not  a number ");
    } else {

      console.log(`10% from you number is ${numb1 * 0.1}`);
    }
  