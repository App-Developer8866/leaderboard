import './style.css';
import * as allVar from './modules/Variables.js';

allVar.Form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const userObj = {
    user: e.target.user.value,
    score: e.target.score.value,
  };

  const postRequest = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userObj),
  };

  await fetch(allVar.BASE_URL, postRequest).then((res) => res.json()).then((json) => console.log('data', json));
});

const showList = (data) => {
  allVar.List.innerHTML += `<p class="info">${data.user} : ${data.score} </p>`;
};

fetch(allVar.BASE_URL)
  .then((res) => res.json())
  .then((data) => data.result.map((resp) => showList(resp)));

allVar.Refresh.addEventListener('click', () => {
  window.location.reload();
});