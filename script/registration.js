var username
var password
var email
var regionIdx
var region
var agree
var date_of_birth

function getDocumentObjectModel() {
    email = document.getElementById("email").value;
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    regionIdx = document.getElementById("region").selectedIndex;
    region = document.getElementsByTagName("option")[regionIdx].value;  
    date_of_birth = document.getElementById("date_of_birth").value;
    agree = (document.getElementById("agree").checked==true);
}

function validate_email(text) {
    if(text==""){
        document.getElementById("error_message").innerHTML = 
        "Please fill the correct email address !";
        return false;
    }
    var ret;
    var condition = [1,1,1,1,1,1];
    var error_message = 
    ["Email Address must contain \'@\'\n",
    "Email Address must not start with \'@\'\n",
    "Email Address must not start with \'.\'\n",
    "Email Address must contain \'.co\', \'.ac\', or \'.com\'\n" ];
    condition[0] = text.includes("@");
    condition[1] = text[0] != "@";
    condition[2] = text[0] != ".";

    condition[3] = text.includes(".ac");
    condition[4] = text.includes(".co");
    
    all_condition = true;
    suffix_conditon = false;

    S = text.split("@");
    if(S.length>2){
        document.getElementById("error_message").innerHTML = 
        "Email Address must have exactly one '@'";
        return false;
    }
    for(let i=0;i<3;i++){
        if(condition[i]==false){
            all_condition = false;
            document.getElementById("error_message").innerHTML = 
            error_message[i];
        }
    }
    for(let i=3;i<5;i++){
        if(condition[i]) suffix_conditon = true;
    }
    if(!suffix_conditon){
        document.getElementById("error_message").innerHTML = 
        error_message[3];
    }
    return all_condition && suffix_conditon;
    //return true;
}

function validate_username() {
    var username_length = username.length;
    if(username_length<5 || username_length>50){
        document.getElementById("error_message").innerHTML = 
        "Username must be between 5 and 50 characters !";
        return false;
    }
    return true;
}

function validate_password(text) {
    var symbols = "~%^|\(@#&*={[}]$,>.?/)_-+:;<!";
    var digits = "1234567890";
    var alphabets = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    var contain_symbol = 0;
    var contain_digit = 0;
    var contain_alphabets = 0;
    var c;
    for(let i = 0; i < text.length; i++){
        c = text.substring(i,i+1);
        if(symbols.includes(c)) contain_symbol++;
        if(digits.includes(c)) contain_digit++;
        if(alphabets.includes(c)) contain_alphabets++;
    }
    if(contain_symbol==0 || contain_digit==0 || contain_alphabets==0){
        document.getElementById("error_message").innerHTML = 
        "Password must contain english letters, symbols and digits";
        return false;
    }
    if(contain_symbol + contain_digit + contain_alphabets < text.length){
        document.getElementById("error_message").innerHTML = 
        "Password must  contain <b>only<b> english letters, symbols and digits";
        return false;
    }
    return true;
}

function validate_not_contain_space(_email,_username){
    var return_value = true;
    if(_email.includes(" ")){
        return_value = false;
        document.getElementById("error_message").innerHTML = "Email should not contain space !";
    }
    else if(_username.includes(" ")){
        return_value = false;
        document.getElementById("error_message").innerHTML = "Username should not contain space !";
    }
    return return_value;
}

function validate_region(region) {
    if(region=="Choose Region"){
        document.getElementById("error_message").innerHTML = 
        "Please choose one of the region !";
        return false;
    }
    return true;
}
function validate_DOB() {
    if(isNaN(Date.parse(date_of_birth))){
        document.getElementById("error_message").innerHTML = 
        "Please fill your date of birth !";
        return false;
    }
    var ret = ( Date.parse(date_of_birth) + 410000000000 < (Date.now()) );
    //umur minimal 13 tahun
    if(ret==false) document.getElementById("error_message").innerHTML = 
    "Sorry, you are underage !";
    return ret;
}
function validate_agree(agree) {
    if(!agree){
        document.getElementById("error_message").innerHTML = 
        "Please Check \"I have read and agree to the Privacy Policy\"";
        return false;
    }
    return true;
}
function validate_all() {
    getDocumentObjectModel(); 
    var valid_6 = validate_agree(agree);
    var valid_5 = validate_DOB(date_of_birth);
    var valid_4 = validate_region(region);
    var valid_3 = validate_password(password);
    var valid_7 = validate_not_contain_space(email,username);
    var valid_2 = validate_username(username);
    var valid_1 = validate_email(email);
    
    console.log(valid_1);
    console.log(valid_2);
    console.log(valid_3);
    console.log(valid_4);
    console.log(valid_5);
    console.log(valid_6);
    console.log(valid_7);

    // document.getElementById("error_message").style.border = "solid red 3px";
    $(".error-container").css({
        "display": "flex"
    })

    document.getElementById("error_message").style.padding = "5px";
    // document.getElementById("error_message").style.font.size = "20px";
    // document.getElementById("error_message").style.color = "white";
    // document.getElementById("errro_message").style.backgroundColor = "red";
    // document.getElementById("error_message").style.fontFamily = "segoe UI";
    if(valid_1 && valid_2 && valid_3 && valid_4 && valid_5 && valid_6 && valid_7)
    {
        //console.log("mau return true tapi false");
        return true;
    }
    else{
        //console.log("mau return false");
        return false;
    }
}