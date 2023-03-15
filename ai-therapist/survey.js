const surveyJson = {
    title: "Pre-Session Survey",
    showProgressBar: "top",
    firstPageIsStarted: true,
    startSurveyText: "Start Survey",
    pages: [{
        elements: [{
            type: "html",
            html: "This page consists of 8 questions, answer before you begin your AI Therapy session.<br>Enter your name below and click <i>Start Survey</i> to begin."
        }, {
            type: "text",
            name: "username",
            titleLocation: "hidden",
            isRequired: true
        }]
    }, {
        elements: [{
            type: "radiogroup",
            title: "Did you smile today?",
            isRequired: true,
            choices: [
                "Yes", "No"
            ]
        }]
    }, {
        elements: [{
            type: "radiogroup",
            title: "Would you say you had a good day today?",
            isRequired: true,
            choices: [
                "Yes", "No"
            ]
        }]
    }, {
        elements: [{
            type: "radiogroup",
            title: "Did you do something nice today, for someone other than yourself?",
            isRequired: true,
            choices: [
                "Yes", "No"
            ]
        }]
    },  {
        elements: [{
            type: "radiogroup",
            title: "Have you sought professional help from a mental health professional in the past?",
            isRequired: true,
            choices: [
                "Yes", "No"
            ]
        }]
    }, {
        elements: [{
            type: "radiogroup",
            title: "Do you feel like you have a good support system in place for when you're feeling stressed or overwhelmed?",
            choices: [
                "Yes", "Sometimes","No"
            ]
        }]

    },  {
        elements: [{
            type: "radiogroup",
            title: "Do you feel a lack of interest or pleasure in things you used to enjoy?",
            isRequired: true,
            choices: [
                "Yes", "Sometimes","No"
               
            ]
        }]

    }, {
        elements: [{
            type: "radiogroup",
            title: "Do you feel like your mental health concerns are impacting your daily life?",
            isRequired: true,
            choices: [
                "Yes", "Sometimes","No"
               
            ]
        }]

    },  {
          elements: [{
            type: "radiogroup",
            title: "Do you feel like you're in control of your emotions, or do you feel like your emotions controlling you?",
            isRequired: true,
            choices: [
                "Yes", "Sometimes", "No"
               
            ]
        }]
       
    }],
    completedHtml: "<h3>Thank you, for being vulnerable with us! Please continue onto the Start Session module</h3>",

   
};


/*function redirect (){
    setTimeout(myURL, 45);
    var result = document.g
}*/

const survey = new Survey.Model(surveyJson);

$(function() {
    $("#surveyContainer").Survey({ model: survey });
});