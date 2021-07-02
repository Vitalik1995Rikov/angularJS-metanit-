questApp.directive('answerList', function () {
    return function (scope, element, attrs) {
        let data = scope[attrs['answerList']];
        if (angular.isArray(data.answers)) {
            let ulElem = angular.element('<ul>');
            element.append(ulElem);
            for(let i = 0; i < data.answers.length; i++) {
                let liElem = angular.element('<li>');
                liElem.append(angular.element('<p>').text(data.answers[i].text));
                ulElem.append(liElem);
            }
        }
    }
});