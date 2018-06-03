let correct = 0;
let incorrect = 0;
let unanswered = 0;


var timer;



function timer()   {
    $("#start").on(click, setTimeout(submit), 1000*120);
};

function submit()   {
    $("#submit").on(click, function score());
}

function score ()   {
    function q1()   {
        let a1 = $("input:radio[name='q1']:checked".val());
        console.log(a1);
        if (a1 === "d")   {
            correct++;
        }   else if (a1 !== "d")    {
            incorrect++;
        }   else if (a1 === null)   {
            unanswered++;
        }
    };

    function q2()   {
        let a2 = $("input:radio[name='q2']:checked".val());
        console.log(a2);
        if (a2 === "a") {
            correct++;
        }   else if (a2 !== "a")     {
            incorrect++;
        }   else if (a2 === null)   {
            unanswered++;
        }
    };

    function q3()   {
        let a3 = $("input:radio[name='q3']:checked".val());
        console.log(a3);
        if (a3 === "c") {
            correct++;
        }   else if (a3 !== "c")     {
            incorrect++;
        }   else if (a3 === null)   {
            unanswered++;
        }
    };

    function q4()   {
        let a4 = $("input:radio[name='q4']:checked".val());
        console.log(a4);
        if (a4 === "a") {
            correct++;
        }   else if (a4 !== "a")     {
            incorrect++;
        }   else if (a4 === null)   {
            unanswered++;
        }
    };

    function q5()   {
        let a5 = $("input:radio[name='q5']:checked".val());
        console.log(a5);
        if (a5 === "a") {
            correct++;
        }   else if (a5 !== "a")     {
            incorrect++;
        }   else if (a5 === null)   {
            unanswered++;
        }
    };

    function totals()   {
    $("#correct").text("Correct: " + correct);
    $("#incorrect").text("Incorrect: " + incorrect);
    $("#unanswered").text("Unanswered: " + unanswered);
    };

}
