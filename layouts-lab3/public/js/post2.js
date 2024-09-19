const content = {
    "2019": {
        title: "Mercedes-AMG A35 2021 ",
        description: "Starting at $46,900.",
        image: "https://hips.hearstapps.com/hmg-prod/images/2020-mercedes-amg-a35-sedan-105-1553617759.jpg?crop=0.907xw:0.764xh;0.0465xw,0.151xh&resize=1200:*",
        imageDescription: "The 2021 Mercedes-AMG A35 sports a 302-hp turbo four that snorts like a hog on steroids and kicks like a mule when launched from a stop. Barnyard analogies aside, the A35 is based on the Mercedes-Benz A-class compact sedan but overhauled by the AMG performance sub-brand with the aforementioned engine upgrade and comprehensive chassis enhancements. While the A35's dual-clutch automatic might occasionally stumble, and its brittle ride and noisy interior fall short of Mercedes' luxury pedigree, the small four-door is a hoot to drive hard. Its lively steering benefits from strong front-end grip, and the all-wheel-drive system mimics the tenacious traits of rally-inspired icons such as the Mitsubishi Lancer Evo. That comparison might offend badge snobs, but the A35—with its sub-$50,000 starting price and stylish cabin—is an accessible and appealing entry point to AMG fandom."
    },
    "2020": {
        title: "Mercedes-AMG GT43 2022",
        description: "Starting at $93,550.",
        image: "https://hips.hearstapps.com/hmg-prod/images/2022-mercedes-amg-gt53-108-1623708026.jpg?crop=1.00xw:0.844xh;0,0.156xh&resize=1200:*",
        imageDescription: "If you like the idea of blasting around in the Mercedes-AMG GT sports car but need a rear seat to justify dropping that kind of cash, allow us to suggest the 2022 GT sedan. It combines the performance and grin-inducing handling of the GT with a rear seat—your choice of a three-seat bench or two bucket seats—so that you can share your high-speed adventures with friends and family. The base powertrain in the GT43 delivers a robust 362 hp; the GT53 makes 429 hp. After you've left your mark on the race course or have finished tearing up your favorite local backroad, the GT sedan can almost emulate Mercedes' other luxury cars thanks to an adjustable suspension with a comfort mode and a host of luxury-and-convenience features to pamper both driver and passengers." 
    },
    "2021": {
        title: "Mercedes-AMG GT63 2023",
        description: "Starting at $97,050.",
        image: "https://hips.hearstapps.com/hmg-prod/images/2023-mercedes-amg-gt-63-21c0293-107-source-1649250184.jpg?crop=0.885xw:0.750xh;0.0433xw,0.197xh&resize=1200:*",
        imageDescription: "The 2023 Mercedes-AMG GT sedan synthesizes performance and presence in a way that few four-doors can. Mechanically, it’s based on the E-class wagon not the GT sports car, but no matter—it behaves much the same as the two-seater. The inline-six in the GT43 and GT53 models have plenty of muscle but its the twin-turbo V-8-powered GT63 models that are the apex predators of the lineup. Handling is satisfyingly sporty for such a large vehicle—and brilliant in the most aggressive models. The fact that you can bring three passengers along on your joy rides is an added plus. Despite the car's performance potential, it doesn't skimp on luxury; the interior is nicely tailored in fine materials and dotted with modern conveniences. Rear-seat headroom isn't as generous here as it is in the E63 sedan, but the GT's low fastback roofline offsets that deficit with a more exotic look."
    },
    "2022": {
        title: "Mercedes-AMG GT Coupe 2024",
        description: "Starting at $136,050.",
        image: "https://hips.hearstapps.com/hmg-prod/images/2024-mercedes-amg-gt63-643-66b52543c907c.jpg?crop=0.647xw:0.545xh;0.112xw,0.355xh&resize=1200:*",
        imageDescription: "The new Mercedes-AMG GT Coupe borrows much of its brains and muscle from the SL roadster. The new GT Coupe is longer, wider, and has a longer wheelbase than before, but the big news is its standard all-wheel-drive system—something the AMG GT has never offered before. Buyers can get any engine they want in their GT, as long as it's a twin-turbo 4.0-liter V-8. The difference between the GT55, which produces 469 horsepower and 516 pound-feet of torque, and the GT63 which busts out 577 ponies and 590 pound-feet of torque will be heard and felt. The new GT Coupe features trick chassis components such as a hydraulic anti-roll system and rear wheel steering to help improve handling, making it all the better for chasing down Porsche 911 Turbos on the track."
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

// Initialize with default year
updateContent();

document.getElementById('commentForm').addEventListener('submit', function(event) {
event.preventDefault();

const name = document.getElementById('name').value;
const comment = document.getElementById('comment').value;
const commentsList = document.getElementById('commentsList');

if (name && comment) {
const listItem = document.createElement('li');
listItem.innerHTML = `
    <strong>${name}:</strong> ${comment}
    <button onclick="deleteComment(this)">Delete</button>
`;
commentsList.appendChild(listItem);

// Clear the form
document.getElementById('name').value = '';
document.getElementById('comment').value = '';
}
});

function deleteComment(button) {
const commentItem = button.parentElement;
commentItem.remove();
}