
/*
 * GET users listing.
 */

exports.index = function(req, res){
    res.send("respond with a resource");
};

exports.staticCourses = function(req, res){
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

