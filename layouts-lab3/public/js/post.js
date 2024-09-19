const content = {
    "2019": {
        title: "Bugatti Chiron - 2019",
        description: "Starting at $3,395,000.",
        image: "https://hips.hearstapps.com/hmg-prod/images/13manu2018-bugatti-chiron-106-1535735570.jpg?crop=1.00xw:0.929xh;0,0.0576xh&resize=1200:*",
        imageDescription: "2019 Bugatti Chiron: Known for its top speed and luxury. The Chiron, Chiron Sport, and Chiron Super Sport 300+ are motivated by an 8.0-liter 16-cylinder powerplant. This beast of an engine employs four turbochargers to generate a mighty 1500 horsepower and 1180 lb-ft of torque. Bugatti claims that the Chiron makes the dash from zero to 60 mph in a mere 2.3 seconds, and it has a top speed of 261 mph. If the Chiron's standard engine doesn't quench your thirst for speed, step up to the Chiron Super Sport 300+. This model is equipped with a slightly more potent version of the base powerplant, and it produces 1578 horsepower. Piloted by factory test driver Andy Wallace, a model with specs almost identical to those of the Chiron Super Sport 300+ logged a record-setting 304.773 mph when pushed by Bugatti at the track. With every model in the Chiron lineup, power is sent to all four wheels by a seven-speed dual-clutch automatic transmission."
    },
    "2020": {
        title: "Bugatti Chiron - 2020",
        description: "Starting at $3,690,000.",
        image: "https://hips.hearstapps.com/hmg-prod/images/02-ss300p-3i4-front-1567937037.jpg?crop=0.762xw:0.857xh;0.135xw,0.143xh&resize=1200:*",
        imageDescription: "2020 Bugatti Chiron: Improved performance and design. The Chiron's artfully designed interior is truly unique. A series of round controllers protrude from the center of the dashboard and the gear selector lever sprouts from a small chrome circle on the center console. Materials are the definition of luxury: Bugatti says that leather from up to 16 different cows lines the seats, dash, and door panels while real metal accents and diamond-supported speaker diaphragms take the experience to the next level. The exterior's swooping C-shaped flourish is repeated inside the cabin and traces from the center console, up the rear firewall, and onto the ceiling. The driver faces a large analog speedometer that's flanked by two smaller digital displays for navigation and a trip computer. There is no center infotainment display, no driver-assistance options, and limited interior storage space. The Chiron is for going fast and looking chic, not for grocery runs or road-trip podcast binges." 
    },
    "2021": {
        title: "Bugatti Chiron - 2021",
        description: "Starting at $3,990,000.",
        image: "https://hips.hearstapps.com/hmg-prod/images/2021-bugatti-chiron-pur-sport-104-1614922609.jpg?crop=0.627xw:0.564xh;0.224xw,0.210xh&resize=1200:*",
        imageDescription: "2021 Bugatti Chiron: Enhanced driving dynamics. All Chiron models are motivated by an 8.0-liter 16-cylinder powerplant. This beast of an engine employs four turbochargers to generate a mighty 1500 horsepower and 1180 lb-ft of torque. Bugatti claims that the Chiron makes the dash from zero to 60 mph in a mere 2.3 seconds, and it has a top speed of 261 mph. If the Chiron's standard engine doesn't quench your thirst for speed, step up to the Chiron Super Sport 300+. This model is equipped with a slightly more potent version of the base powerplant, and it produces 1578 horsepower. Piloted by factory test driver Andy Wallace, a model with specs almost identical to those of the Chiron Super Sport 300+ logged a record-setting 304.773 mph test-track run. With every model in the Chiron lineup, power is sent to all four wheels by a seven-speed dual-clutch automatic transmission."
    },
    "2022": {
        title: "Bugatti Chiron - 2022",
        description: "Starting at $4,300,000.",
        image: "https://hips.hearstapps.com/hmg-prod/images/bugatti-sur-mesure-chiron-pur-sport-106-1639069047.jpg?crop=0.766xw:0.647xh;0.234xw,0.353xh&resize=1200:*",
        imageDescription: "2022 Bugatti Chiron: Ultimate luxury and performance. The 2022 Chiron isn't only the ultimate Bugatti, it's the ultimate car. Period. This $4 million work of art is capable of pummeling the pavement at over 200 mph thanks to a 16-cylinder engine that features four turbochargers and cranks out at least 1500 horsepower—the more expensive Super Sport model is even more powerful. The Chiron's cabin is just as artfully designed as its exterior, and it coddles occupants in fine materials that help justify its price tag. But let's be honest, people are really paying for the performance here. Those looking for modern conveniences (think Apple CarPlay) or driver-assistance tech, they won't find them here, but after driving this monster, they likely won't care about such minor drawbacks."
    }
};

function goBack() {
    window.location.href = "/";
}

function updateContent() {
    const year = document.getElementById('year').value;
    const contentData = content[year];

    document.getElementById('year-title').innerText = contentData.title;
    document.getElementById('year-description').innerText = contentData.description;
    document.getElementById('year-image').src = contentData.image;
    document.getElementById('image-description').innerText = contentData.imageDescription;
}


updateContent();


const postIdentifier = document.getElementById('year-title').innerText;


function loadComments() {
    const comments = JSON.parse(localStorage.getItem(`comments-${postIdentifier}`)) || [];
    const commentsList = document.getElementById('commentsList');
    commentsList.innerHTML = '';
    comments.forEach((comment, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${comment.name}: ${comment.comment} <button onclick="deleteComment(${index})">Delete</button>`;
        commentsList.appendChild(li);
    });
}


function saveComment(name, comment) {
    const comments = JSON.parse(localStorage.getItem(`comments-${postIdentifier}`)) || [];
    comments.push({ name, comment });
    localStorage.setItem(`comments-${postIdentifier}`, JSON.stringify(comments));
}


function deleteComment(index) {
    const comments = JSON.parse(localStorage.getItem(`comments-${postIdentifier}`)) || [];
    comments.splice(index, 1);
    localStorage.setItem(`comments-${postIdentifier}`, JSON.stringify(comments));
    loadComments();
}


document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    const commentsList = document.getElementById('commentsList');


    const li = document.createElement('li');
    const index = commentsList.children.length;
    li.innerHTML = `${name}: ${comment} <button onclick="deleteComment(${index})">Delete</button>`;
    commentsList.appendChild(li);


    saveComment(name, comment);


    document.getElementById('commentForm').reset();
});


loadComments();