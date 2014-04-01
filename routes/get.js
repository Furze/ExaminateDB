/**
 * Created by Troy on 1/04/14.
 */
exports.courses = function(req, res){
    var user = req.query.uID;
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
}