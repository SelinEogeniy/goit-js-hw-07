const itemEl = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach(li => {
  //   console.log(li);
  const liTitle = li.querySelector('h2').textContent;
  const liCount = li.querySelectorAll('ul li').length;
  console.log(`Category: ${liTitle}`);
  console.log(`Elements: ${liCount}`);
});
