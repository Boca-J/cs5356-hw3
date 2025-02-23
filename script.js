
async function get_data() {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();
    document.getElementById('joke').innerHTML = `${data.setup} <br><strong>${data.punchline}</strong>`;
    console.log(data)
}




    
