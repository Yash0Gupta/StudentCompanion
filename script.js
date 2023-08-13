async function fetchClubInfo() {
    try {
      const response = await fetch('https://event-info.yashgupta212.repl.co/api/v1/infos/club'); // Adjust the endpoint URL
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching club info:', error);
      return [];
    }
  }
  
  function saveInfo() {
    const username = document.getElementById('username').value;
    const clubID = parseInt(document.getElementById('clubID').value);
    const info = document.getElementById('info').value;
  
    fetch('https://event-info.yashgupta212.repl.co/api/v1/infos/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: username, clubID, info })
    })
      .then(response => response.json())
      .then(() => refreshInfoList())
      .catch(error => console.error('Error saving info:', error));
  }
  
  function refreshInfoList() {
      const infoListDiv = document.getElementById('infoList');
      infoListDiv.innerHTML = '';
  
      fetchClubInfo().then(infoArray => {
          infoArray.forEach(info => {
              const infoDiv = document.createElement('div');
              infoDiv.className = 'info-item';
              infoDiv.innerHTML = `
                  <div class="info-header">
                      <h2>${info.user}</h2>
                  </div>
                  <div class="info-details">
                      <p>${info.info}</p>
                  </div>
                  <hr>
              `;
              infoListDiv.appendChild(infoDiv);
          });
      });
  }
  
  
  refreshInfoList();
  