// init github
github = new Github;
//  init Ui
ui = new UI;


//  search input
const searchUser = document.getElementById('searchUser')

// * add event listener
searchUser.addEventListener('keyup', (e) => {
    // get input text
    const userText = e.target.value;

    if (userText !=="") {
    // Make http call
        github.getUser(userText)
            .then(data => {
            if (data.profile.message === 'Not Found') {
                //  Show alert
                ui.showAlert('User not found', 'alert alert-danger')
                
            } else {
                // show profile
                ui.showProfile(data.profile);
            }
        })
    } else {
        // clear profile
        ui.clearProfile();
    }
})