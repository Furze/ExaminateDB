/**
 * Created by Troy on 1/04/14.
 */
exports.courses = function(req, res){
    var user = req.query.uID;
    console.log(user);

    //TODO: mongo query return courses for user

    //TEMP STATIC COURSES
    var userCourses = '[' +
        '{' +
        '"name": "compsci101",' +
        '"exams": 3,' +
        '"complete": 1' +
        '},{' +
        '"name": "compsci111",' +
        '"exams": 0,' +
        '"complete": 0' +
        '},{' +
        '"name": "compsci111g",' +
        '"exams": 0,' +
        '"complete": 0' +
        '}' +
        ']';
    res.send(userCourses);
};
exports.answers = function(req, res){
    var user = req.query.uID;
    var course = req.query.c;
    var exam = req.query.e;

    console.log(user);

        //TEMP STATIC answers
    var userAnswers = '[';
    for(var i = 0; i < 50; i++){ //update azure plox
        var char = String.fromCharCode((i%5)+65);
        var rand = Math.floor(Math.random()*100);
        if(i!==0)
            userAnswers = userAnswers.concat(',');
        userAnswers = userAnswers.concat('{'+
            '"question": '+ (+i+1)+',' +
                '"answer": "' + char + '",' +
                '"totalAnswered": 100,' +
                '"numSame": ' + rand +
            '}');
    }
    userAnswers = userAnswers.concat(']');
    res.send(userAnswers);
};
exports.exams = function(req, res){
    var user = req.query.uID;
    var course = req.query.c;

    console.log(user);

    //TODO: mongo query return exams for course, and how many questions, how many questions the user has answered for the question

    //TEMP STATIC Exams
    var userExams = '[' +
        '{' +
        '"type": "exam",' +
        '"semester": "one",' +
        '"year": 2013,' +
        '"answered": 9,' +
        '"questions": 50' +
        '},{' +
        '"type": "test",' +
        '"semester": "one",' +
        '"year": 2013,' +
        '"answered": 20,' +
        '"questions": 20' +
        '},{' +
        '"type": "exam",' +
        '"semester": "two",' +
        '"year": 2013,' +
        '"answered": 4,' +
        '"questions": 50' +
        '}' +
        ']';
    res.send(userExams);
};

exports.question = function(req, res){
    var user = req.query.uID;
    var course = req.query.c;
    var exam = req.query.e;
    var question = req.query.q;

    //TODO: mongo query return exams for course, and how many questions, how many questions the user has answered for the question
    var a = 70;
    var b = 14;
    var c = 10;
    var d = 5;
    var e = 1;

    var qt = "[2 marks] What is the output of the following code?" +
        '\n\t String a = new String("ab");' +
        '\n\t String b = new String("ab");' +
        '\n\t String c = new String("a");' +
        '\n\t String d = b;' +
        '\n\n\t System.out.println(a == d);' +
        '\n\t System.out.println(b.equals(c));' +
        '\n\n' +
        '\n(a) true' +
        '\n  false' +
        '\n\n' +
        '\n(b) false' +
        '\n   true' +
        '\n\n' +
        '\n(c) false' +
        '\n   false'+
        '\n\n' +
        '\n(d) true' +
        '\n    true'+
        '\n\n' +
        '\n(e) None of the above';

    //TEMP STATIC Exams
    var question = '{' +
        '"questionText": '+qt+',' +
        '"course": "'+ course+ '",' +
        '"exam": "'+exam+'",' +
        '"question": '+question+',' +
        '"yanswer": "A",'+
        '"answers": [{' +
            '"id": "a",' +
                    '"percentage": ' + a + ',' +
                  '"correct": true' +
            '},'+
            '{"id": "b",' +
                    '"percentage": ' + b +
            '},'+
            '{"id": "c",' +
                '"percentage": ' + c +
            '},'+
            '{"id": "d",' +
                '"percentage": ' + d +
            '},'+
            '{"id": "e",' +
                '"percentage": ' + e +
            '}'+
        ']' +
      '}';
    console.log(question);
    res.send(question);
};