function getBotResponse(input) {

    // Simple responses
    if (input == "hello") {
        return "Hello there!, We Will Contact You As Soon As Possible If You Can Send Us Your Name With Your Email To Contact With You . If You Dont Just Send No"; 
    } 
    else if (input == "hi"){
        return "Hi there!, We Will Contact You As Soon As Possible If You Can Send Us Your Name With Your Email To Contact With You .If You Dont Just Send No"
        ;

    }
    else if(input == "yes"){
        return "Give Us Your Name And Your Email"
    }
    else if(input =="no"){
        return "It Was A Pleasure Doing Business With You . Best Regards ! "
    }
    else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Thank You ,  We Will Contact You As Soon Is Possible !";
    }

    

}