import 'regenerator-runtime/runtime';

document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('.collapsible');
  let instances = M.Collapsible.init(elems);

  async function delNodes(nList) {
    await nList.forEach((n) => n.remove());
  }

  const day1Links = document.querySelectorAll('.day-1 > .card-action > a');
  const day2Links = document.querySelectorAll('.day-2 > .card-action > a');
  // const day3Links = document.querySelectorAll('.day-3 > .card-action > a');
  // const day4Links = document.querySelectorAll('.day-4 > .card-action > a');
  // const day5Links = document.querySelectorAll('.day-5 > .card-action > a');

  let now = new Date();
  let today = now.getDate();
  let thisMonth = now.getMonth();
  let thisYear = now.getFullYear();

  if (thisYear === 2022) {
    if (thisMonth !== 1) {
      delNodes(day1Links);
      delNodes(day2Links);
    } else if (thisMonth === 1) {
      if (today < 5) {
        delNodes(day1Links);
        delNodes(day2Links);
      } else if (today < 6) {
        delNodes(day2Links);
      }
    }
  } else if (thisYear < 2022) {
    delNodes(day1Links);
      delNodes(day2Links);
  }  else {
    // If it's not less or equal it must be greater
  }

  // if(thisMonth === 0){
  //   if(today < 9){
  //     delNodes(day1Links);
  //     delNodes(day2Links);
  //   } else if(today < 10) {
  //     delNodes(day2Links);
  //   } else {
  //     //* do nothing
  //   }
  // } else {
  //   delNodes(day1Links);
  //   delNodes(day2Links);
  // }
  const activities = document.querySelectorAll('.sched-item > .card-content');

  for (let act of activities) {
    let actSize = parseInt(act.querySelector('.hidden').innerText);
    let increase = 60 * (actSize / 15 - 1);
    act.style.height = `${120 + increase}px`;
  }
});
