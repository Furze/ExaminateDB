/**
 * Created by Troy on 1/04/14.
 */
exports.answer = function(req, res){
    var user = req.query.uID;
    var course = req.query.c;
    var exam = req.query.e;
    var question = req.query.q;
    var answer = req.query.a;
    console.log(user + ' | ' + course  + ' | ' + exam + ' | ' + question  + ' | ' + answer);
    res.send('{"code": "successful"}');
}