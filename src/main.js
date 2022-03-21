import 'regenerator-runtime/runtime';

document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('.collapsible');
  let instances = M.Collapsible.init(elems);

  async function delNodes(nList) {
    await nList.forEach((n) => n.remove());
  }

  const day1Links = document.querySelectorAll('.day-1 > .card-action > a');
  const day2Links = document.querySelectorAll('.day-2 > .card-action > a');

  let day1Date = dayjs(new Date(2022, 2, 19));
  let day2Date = dayjs(new Date(2022, 2, 20));

  const today = dayjs();

  if (today.valueOf() <= day1Date.valueOf()) {
    delNodes(day1Links);
    delNodes(day2Links);
  } else if (today.valueOf() <= day2Date()) {
    delNodes(day2Links);
  }

  const activities = document.querySelectorAll('.sched-item > .card-content');

  for (let act of activities) {
    let actSize = parseInt(act.querySelector('.hidden').innerText);
    let increase = 60 * (actSize / 15 - 1);
    act.style.height = `${120 + increase}px`;
  }
});
