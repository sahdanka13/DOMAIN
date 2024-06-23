document.getElementById('domainForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const domain = document.getElementById('domain').value;
    const apiKey = 'h1Ua31ocV7ca_EgWXR7jTr3eaMWMCJfrhbk'; // Ganti dengan API key Anda
    const apiSecret = 'QQka7zsg35D6vShjZZKC8s'; // Ganti dengan API secret Anda
    const apiUrl = `https://api.godaddy.com/v1/domains/available?domain=${domain}`;

    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Authorization': `sso-key ${apiKey}:${apiSecret}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const resultDiv = document.getElementById('result');
        if (data.available) {
            resultDiv.innerHTML = `Domain ${domain} is <strong>available</strong>.`;
        } else {
            resultDiv.innerHTML = `Domain ${domain} is <strong>registered</strong>.`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = 'An error occurred. Please try again later.';
    });
});
