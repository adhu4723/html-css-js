async function fetchqns() {
  const res = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple');
  const data = await res.json();
  console.log(data); // Now you get the actual question data
}
fetchqns();


function fetchqns() {
  fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
    .then(res => 
      res.json()
    ).then(data => console.log(data))
    .catch(err=>{
      console.error('Failed to fetch questions:', err.message);
    });
}
fetchqns();

async function fetchqns() {
  try {
    const res = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple');
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error('Failed to fetch questions:', err.message);
  }
}

fetchqns();

