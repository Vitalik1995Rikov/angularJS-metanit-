let questApp = angular.module('questApp', []);

questApp.controller('QuestionController', function($scope) {
    $scope.sortparam = 'rate';
    $scope.question={
        text: 'Какой js-фреймворк лучше использовать?',
        author: 'Иван Иванов',
        date: '20/10/2013',
        answers: 
        [{
            text: 'AngularJS!',
            author: 'Вова Сидоров',
            date: '20/10/2013',
            rate:2
        },{
            text: 'AngularJS лучше всех',
            author: 'Олег Кузнецов',
            date: '20/10/2013',
            rate:0
        },{
            text: 'фигасе knockout',
            author: 'Неизвестный',
            date: '21/10/2013',
            rate:0
        }]
    };

    $scope.voteUp = function (answer){
        answer.rate++;
    };
    $scope.voteDown = function (answer){
        answer.rate--;
    };
});

// questApp.filter('formatText', function() {
//     return function(text) {
//         if(text.indexOf('фигасе') !== -1) {
//             return '***';
//         } else {
//             return text;
//         }
//     }
// });

// questApp.controller('AnswerController', function AnswerController($scope) {
//     $scope.save = function (answer, answerForm) {
//         if (answerForm.$valid) {
//             alert(answer.author + ', Your answer was saved')
//         }
//     }
// });

