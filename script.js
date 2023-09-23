document.addEventListener('scroll', () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 0) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

const data = JSON.parse(localStorage.getItem("userData")) || [];

function register() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("Phonenumber").value;
    var passwordRegister = document.getElementById("password").value;

    if (username !== "" && email !== "" && passwordRegister !== "") {
        var newUser = { username, email, phoneNumber, password: passwordRegister };
        data.push(newUser);
        localStorage.setItem("userData", JSON.stringify(data));
        window.location.assign("login.html");
    } else {
        alert("Please fill in all the required information");
    }
}





function login() {
    var normalText = document.getElementById("normaltext").value;
    var passwordLogin = document.getElementById("password-login").value;

    var foundUser = data.find(user => user.email === normalText);

    if (foundUser && foundUser.password === passwordLogin) {
        window.location.assign("secondindex.html");
    } else {
        alert("The email or password you entered is invalid. Please try again.");
    }
}



function profile() {
    window.location.assign("profile.html");
}



let profileusername = document.getElementById("profile-user-name");
var finduser = data.find(proname => proname.username);
if (finduser) {
    profileusername.innerText = finduser.username;
}

function handleProfilePicture() {
    const inputfile = document.getElementById("for-file");
    const profileimg = document.getElementById("profileimg");

    inputfile.addEventListener('change', function () {
        const fr = new FileReader();

        fr.readAsDataURL(inputfile.files[0]);

        fr.addEventListener('load', () => {
            const url = fr.result;
            localStorage.setItem('profile', url);

            profileimg.src = url;

            const secondIndexProfileImg = document.getElementById("profile-pic");
            if (secondIndexProfileImg) {
                secondIndexProfileImg.src = url;
            }
        });
    });
}




function handleProfilePicture() {
    const inputfile = document.getElementById("for-file");
    const profileimg = document.getElementById("profilepicture");

    inputfile.addEventListener('change', function () {
        const fr = new FileReader();

        fr.readAsDataURL(inputfile.files[0]);

        fr.addEventListener('load', () => {
            const url = fr.result;
            localStorage.setItem('profile', url);

            profileimg.src = url;

            const secondIndexProfileImg = document.getElementById("profile-pic");
            if (secondIndexProfileImg) {
                secondIndexProfileImg.src = url;
            }
        });
    });
}



window.onload = handleProfilePicture;

const secondIndexProfileImg = document.getElementById("profile-pic");
const secondIndexProfilepicture = document.getElementById("profilepicture");



const url = localStorage.getItem('profile');
if (secondIndexProfileImg && url) {
    secondIndexProfileImg.src = url;
}


const urll = localStorage.getItem('profile');
if (secondIndexProfilepicture && url) {
    secondIndexProfilepicture.src = urll;
}

function account() {
    window.location.assign("secondindex.html")
}




function remove() {
    localStorage.clear()
    window.location.assign("signup.html")
}






function uplode() {
    var blur = document.getElementById("main");
    blur.classList.toggle('active');
    var popup = document.getElementById("popup");
    popup.classList.toggle('active');
}


// ... (your existing code)

function post() {
    var blur = document.getElementById("main");
    blur.classList.toggle('active');
    var popup = document.getElementById("popup");
    popup.classList.toggle('active');

    var postContent = document.getElementById("post-content").value;
    if (postContent) {
        // Generate a unique identifier for the post
        var postId = Date.now().toString();
        
        // Save the post using the generated ID
        localStorage.setItem(postId, postContent);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const mainFirstDiv = document.querySelector(".main-first");

    // Iterate through localStorage to retrieve and display all posts
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (!isNaN(key)) { // Check if key is a number (assumed to be post ID)
            var postContent = localStorage.getItem(key);
            if (postContent) {
                mainFirstDiv.innerHTML += `<p>${postContent}</p>`;
            }
        }
    }
});
