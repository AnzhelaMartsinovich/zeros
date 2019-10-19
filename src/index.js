module.exports = function zeros(expression) {
   let arrExpr = expression.split('*');
   let counter = 0;

   arrExpr.forEach(elem => {

    if (elem.includes('!!')) {
       //преобразуем индекс массива в число, т.е. обрезаем восклицательные знаки + приведение к типу
      let num = Number(elem.slice(0, -2));

        while (num > 0) {
          let value = num;

          while (value % 5 === 0) {
            value /= 5;
            counter++;
          }
          num -= 2;
        }
    }


    if (elem.includes('!')) {
      let num = Number(elem.slice(0, -1));

      for (let i = 5; num / i >= 1; i *= 5) {
        counter += Math.floor(num / i);
      }
    }

  });
  return counter;

}
