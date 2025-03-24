let menubtn = document.getElementById("menubtn");
let sidebar = document.querySelector('.sidebar');

menubtn.onclick = function(){
    sidebar.classList.toggle('on');
}

function showContent(sectionId) {
    let sections = document.querySelectorAll('.inside-content1');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById(sectionId).style.display = 'block';
}

const ewan = document.getElementById("dashboard-content");
ewan.style.display = 'block'; 
//eto ung naka default na lalabas once makapaglog in sa admin and madirect sa page natoh
//display block para sa default na styling ng content

document.getElementById('dashboard-btn').addEventListener('click', function() {
    showContent('dashboard-content');
});

document.getElementById('events-btn').addEventListener('click', function() {
    showContent('events-content');
});

document.getElementById('announcement-btn').addEventListener('click', function() {
    showContent('announcement-content');
});

document.getElementById('membership-btn').addEventListener('click', function() {
    showContent('membership-content');
});

document.getElementById('analytics-btn').addEventListener('click', function() {
    showContent('analytics-content');
});


const time = document.getElementById('time');

function formatCurrentTime() {
  const date = new Date();
  const day = date.toLocaleString('en-US', { weekday: 'long' });
  const month = date.toLocaleString('en-US', { month: 'short' });
  const dayOfMonth = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? 'pm' : 'am';
  const formattedTime = `${day} / ${month} ${dayOfMonth} / ${year} / ${hours % 12 || 12}:${minutes.toString().padStart(2, '0')}${ampm} / ${seconds} sec`;

  return formattedTime;
}

setInterval(() => {
  time.textContent = formatCurrentTime();
}, 1000);