const counter = document.querySelector('.website-view-counter');

async function updateCounter() {
  console.log('running lambda function');
  let response = await fetch(
    'https://342h3yv5dl6sdfaca43liedqlu0cvxjf.lambda-url.us-east-1.on.aws/'
  );
  let data = await response.json();
  counter.innerHTML = `Website Views: ${data}`;
}

updateCounter();
