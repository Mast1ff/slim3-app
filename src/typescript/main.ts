import axios from 'axios';

function fetcher() {
    axios.get('/').then(
        () => {
            console.log('fetched!');
        },
    );
}

const button = document.getElementById('button');
if (button) {
    button.addEventListener('click', fetcher);
}
