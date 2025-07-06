//! З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

//todo Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//todo Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

const itemEl = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach(li => {
  //   console.log(li);
  const liTitle = li.querySelector('h2').textContent;
  const liCount = li.querySelectorAll('ul li').length;
  console.log(`Category: ${liTitle}`);
  console.log(`Elements: ${liCount}`);
});
console.log(itemEl);