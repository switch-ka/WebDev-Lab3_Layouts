const content = {
    "2019": {
        title: "Lamborghini Huracan 2019 ",
        description: "Starting at $209,469.",
        image: "https://hips.hearstapps.com/hmg-prod/images/2019-lamborghini-huracan-v10-106-1548279633.jpg?crop=0.891xw:0.752xh;0.109xw,0.248xh&resize=1200:*",
        imageDescription: "The 2019 Lamborghini Huracán is a special kind of machine that gets parked in a venture capitalist's garage and posted on a dreamer's wall. After all, anything that bears the legendary Lamborghini logo is instantly identified as supercar royalty. Still, the Huracán family has proved its high-performance pedigree time after time. This star-studded cast includes the conspicuous entry-level coupe and convertible—spyder in this case—variants and escalates to the track-focused Performante and Performante Spyder. The heavily refreshed Huracán Evo will introduce the mid-cycle update when it goes on sale this spring. Until then, the current lineup still offers many pieces that will be familiar on the latest iteration."
    },
    "2020": {
        title: "Lamborghini Huracan 2020",
        description: "Starting at $212,266.",
        image: "https://hips.hearstapps.com/hmg-prod/images/2020-lamborghini-huracan-evo-104-1576597210.jpg?crop=0.938xw:0.792xh;0.0619xw,0.208xh&resize=1200:*",
        imageDescription: "Got a need for speed and about a quarter-million dollars to burn? Well, Lamborghini has you covered with the attention-grabbing, hard-charging Huracán. While it's smaller and more affordable than the aging Aventador and trendy Urus, the littlest Lambo still costs six figures. However, that buys a glorious V-10 that pairs with rear- or all-wheel drive to deliver delirious acceleration times. Likewise, the sounds its engine makes are enough to drown out a rock concert. Surprisingly, the mid-engined Italian is easy to drive in traffic and doesn't punish passengers. Now if only American speed limits were uncapped and everyone could afford one, we could officially proclaim the 2020 Huracán as the high-performance messiah." 
    },
    "2021": {
        title: "Lamborghini Huracan 2021",
        description: "Starting at $214,866.",
        image: "https://hips.hearstapps.com/hmg-prod/images/2021-lamborghini-huracan-evo-mmp-1-1600293029.jpg?crop=1.00xw:0.844xh;0,0.120xh&resize=1200:*",
        imageDescription: "No matter how affordable and badass the mid-engine Corvette is, it's still nowhere near as desirable or visceral as the 2021 Lamborghini Huracán. Although the Lambo's six-figure price tag makes it basically unobtainable to the vast majority of drivers, we can still drool over its dramatic design and drop our jaws when we learn about its impressive performance credentials. The latter are courtesy of its mid-mounted 600-plus-hp naturally aspirated V-10, which makes truly inspiring sounds and helps both the coupe and convertible (a.k.a. Spyder) version feel like they are launched out of a cannon. Despite its designation as an exotic sports car and the ability to obliterate lap times at the local racetrack, the 2021 Huracán is civil enough to be driven every day. However, packing light is a necessity because storage space is at a premium."
    },
    "2022": {
        title: "Lamborghini Huracan 2022",
        description: "Starting at $213,104.",
        image: "https://hips.hearstapps.com/hmg-prod/images/2022-lamborghini-huracan-tecnica-101-1649342000.jpg?crop=0.893xw:0.752xh;0.0833xw,0.0553xh&resize=1200:*",
        imageDescription: "The 2022 Lamborghini Huracán draws everyone's attention, but it's the way it assaults the driver's senses that makes it special. The main attraction is the 600-plus-hp naturally aspirated V-10 that is mounted in the middle of the exotic-looking Lamborghini. The engine sounds magnificent when revved to its lofty redline, and it helps deliver hilariously quick acceleration. The Huracán can be configured as a coupe or as the Spyder convertible, and both offer rear- or all-wheel drive. While the only way to truly unlock the full potential of its incredible performance is to go to a racetrack, its ride is surprisingly civil when driven on public roads. Just don't expect the Lambo to be a great travel companion due to its limited interior cubby storage. Otherwise, the 2022 Huracán has all the hallmarks of supercar stardom—including a six-figure price tag."
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