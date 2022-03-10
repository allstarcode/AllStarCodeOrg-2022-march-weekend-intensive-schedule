import 'regenerator-runtime/runtime';

document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('.collapsible');
  let instances = M.Collapsible.init(elems);

  async function delNodes(nList) {
    await nList.forEach((n) => n.remove());
  }

  const day1Links = document.querySelectorAll('.day-1 > .card-action > a');
  const day2Links = document.querySelectorAll('.day-2 > .card-action > a');

  let now = new Date();
  let today = now.getDate();
  let thisMonth = now.getMonth();
  let thisYear = now.getFullYear();

  if (thisYear === 2022) {
    if (thisMonth !== 2) {
      delNodes(day1Links);
      delNodes(day2Links);
    } else if (thisMonth === 2) {
      if (today < 19) {
        delNodes(day1Links);
        delNodes(day2Links);
      } else if (today < 20) {
        delNodes(day2Links);
      }
    }
  } else if (thisYear < 2022) {
    delNodes(day1Links);
    delNodes(day2Links);
  } else {
    // If it's not less or equal it must be greater
  }

  const activities = document.querySelectorAll('.sched-item > .card-content');

  for (let act of activities) {
    let actSize = parseInt(act.querySelector('.hidden').innerText);
    let increase = 60 * (actSize / 15 - 1);
    act.style.height = `${120 + increase}px`;
  }
});
