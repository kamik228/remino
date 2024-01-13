var URL = "http://89.108.81.229:9090/api/v1";

window.onload = function () {
  getNotes();
};


//list
document.addEventListener('DOMContentLoaded', function () {
  var modeSwitch = document.querySelector('.mode-switch');

  modeSwitch.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark');
    modeSwitch.classList.toggle('active');
  });

  var listView = document.querySelector('.list-view');
  var gridView = document.querySelector('.grid-view');
  var projectsList = document.querySelector('.project-boxes');

  listView.addEventListener('click', function () {
    gridView.classList.remove('active');
    listView.classList.add('active');
    projectsList.classList.remove('jsGridView');
    projectsList.classList.add('jsListView');
  });

  gridView.addEventListener('click', function () {
    gridView.classList.add('active');
    listView.classList.remove('active');
    projectsList.classList.remove('jsListView');
    projectsList.classList.add('jsGridView');
  });

  document.querySelector('.messages-btn').addEventListener('click', function () {
    document.querySelector('.messages-section').classList.add('show');
  });

  document.querySelector('.messages-close').addEventListener('click', function () {
    document.querySelector('.messages-section').classList.remove('show');
  });

  //nickname
  document.getElementById("nickname").innerHTML = localStorage.getItem("user");

  //Дата
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  n = new Date();
  y = n.getFullYear();
  m = monthNames[n.getMonth()];
  d = n.getDate();
  document.getElementById("date").innerHTML = d + " " + m + " " + y;
});

function getNotes() {
  fetch(URL + "/note/list?user_id=" + localStorage.getItem("id"))
    .then(function (response) {
      return response.json();
    })

    .then(function (notes) {
      let placeholder = document.querySelector("#notes");
      let out = "";
      document.getElementById("count-notes").innerHTML = notes.length;
      for (let note of notes) {
        console.log(note);
        out += `
        <div class="project-box-wrapper">
    <div class="project-box">
        <div class="project-box-header">
            <span>December 10, 2020</span>
        </div>
        <div class="project-box-content-header">
            <p class="box-content-header">Note name</p>
            <p class="box-content-subheader">${note.text}</p>
            <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 22" id="icon-01">
                    <path
                        d="M18.29,5.76l-.7-1.37A2.59,2.59,0,0,0,15.29,3H10.71a2.59,2.59,0,0,0-2.3,1.39l-.7,1.37a2.6,2.6,0,0,1-2.3,1.39H3.58A2.57,2.57,0,0,0,1,9.71V20.44A2.57,2.57,0,0,0,3.58,23H22.42A2.57,2.57,0,0,0,25,20.44V9.71a2.57,2.57,0,0,0-2.58-2.56H20.59A2.6,2.6,0,0,1,18.29,5.76Z"
                        transform="translate(0 -2)" />
                    <ellipse cx="13" cy="12.99" rx="4.52" ry="4.49" />
                </symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 22" id="icon-02">
                    <line x1="25" y1="12.58" x2="25" y2="9.42" />
                    <line x1="21" y1="14.16" x2="21" y2="7.84" />
                    <line x1="17" y1="15.74" x2="17" y2="6.26" />
                    <line x1="13" y1="21" x2="13" y2="1" />
                    <line x1="9" y1="17.32" x2="9" y2="4.68" />
                    <line x1="5" y1="13.63" x2="5" y2="8.37" />
                    <line x1="1" y1="11.53" x2="1" y2="10.47" />
                </symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 22" id="icon-03">
                    <polygon points="8.08 10 1 21 25 21 18.09 12.66 13.78 17.45 8.08 10" />
                    <circle cx="8" cy="4" r="3" />
                </symbol>
            
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" id="shape-01">
                    <polygon stroke="var(--shape-color-03)" points="155.77 140.06 141.08 152.42 159.12 158.96 155.77 140.06" />
                </symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" id="shape-02">
                    <g stroke="var(--shape-color-02)">
                        <line x1="158.66" y1="146.73" x2="141.54" y2="152.29" />
                        <line x1="147.32" y1="140.95" x2="152.88" y2="158.07" />
                    </g>
                </symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" id="shape-03">
                    <circle stroke="var(--shape-color-01)" cx="150.1" cy="149.51" r="13" />
                </symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" id="shape-04">
                    <circle fill="var(--shape-color-01)" cx="150.1" cy="149.51" r="4" />
                </symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" id="shape-05">
                    <rect stroke="var(--shape-color-03)" x="141.1" y="140.51" width="18" height="18"
                        transform="translate(40.44 -31.76) rotate(13.94)" />
                </symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" id="shape-06">
                    <g stroke="var(--shape-color-02)">
                        <line x1="158.48" y1="152.78" x2="141.72" y2="146.24" />
                        <line x1="153.37" y1="141.13" x2="146.83" y2="157.89" />
                    </g>
                </symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" id="shape-07">
                    <rect stroke="var(--shape-color-03)" x="138.1" y="137.51" width="24" height="24"
                        transform="translate(-42.94 62.23) rotate(-20.56)" />
                </symbol>
            
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" id="shape-08">
                    <circle fill="var(--shape-color-01)" cx="150.1" cy="149.51" r="4" />
                </symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" id="shape-09">
                    <circle stroke="var(--shape-color-01)" cx="150.1" cy="149.51" r="8" />
                </symbol>
            </svg>
        </div>
        <div class="box-progress-wrapper">
            <p class="box-progress-header">Timer</p>
            <div class="box-progress-bar">
                <span class="box-progress" style="width: 80%; background-color: #096c86"></span>
            </div>
            <p class="box-progress-percentage">80%</p>
        </div>
        <div class="project-box-footer">
            <div class="wrapper">
                <input class="more" type="checkbox" />
                <div class="btn"></div>
                <div class="tooltip">
                    <svg>
                        <use xlink:href="#icon-01" class="icon icon-01" />
                    </svg>
                    <svg>
                        <use xlink:href="#icon-02" class="icon icon-02" />
                    </svg>
                    <svg>
                        <use xlink:href="#icon-03" class="icon icon-03" />
                    </svg>
                </div>
                <svg>
                    <use xlink:href="#shape-01" class="shape shape-01" />
                    <use xlink:href="#shape-02" class="shape shape-02" />
                    <use xlink:href="#shape-03" class="shape shape-03" />
                    <use xlink:href="#shape-04" class="shape shape-04" />
                    <use xlink:href="#shape-05" class="shape shape-05" />
                    <use xlink:href="#shape-06" class="shape shape-06" />
                    <use xlink:href="#shape-07" class="shape shape-07" />
                    <use xlink:href="#shape-08" class="shape shape-08" />
                    <use xlink:href="#shape-09" class="shape shape-09" />
                </svg>
            </div>
            <div class="days-left" style="color: #096c86;">
            2 Days Left
        </div>
        </div>
    </div>
</div>
        `;
      }


      placeholder.innerHTML = out;
    })
};

document.querySelector('.more-button').addEventListener('click', function () {
  document.querySelector('.list-container').classList.toggle('active');
});
