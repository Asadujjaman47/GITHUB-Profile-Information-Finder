let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');
let ui = new UI();


searchBtn.addEventListener('click', (e)=>{
    let userText = searchUser.value;
    if(userText != ''){
        //alert(userText);
        // Fetch API
        fetch(`https://api.github.com/users/${userText}`)
        .then(result => result.json())  //github thake ase data
        .then(data => {
            console.log(data);
            if(data.message == 'Not Found'){
                // ShowAlert

                ui.showAlert("User not Found!", "alert alert-danger");
            }else{
                // Show Profile
                ui.showProfile(data);

            }
        })
    } else{
        // Clear Profile
        ui.clearProfile();
    }
});