// - 출력의 결과를 제출해주세요, 그리고 그 이유를 최대한 상세히 설명해주세요
// - **주의사항 : 브라우저에서 테스트해주세요(Chrome → 개발자 도구 → 콘솔에 입력하여 실행)**

// Result:
// Not Francis Ngannou VS John Jones
// It is John Jones VS Ciryl Gane

// fighter.opponent.getFullname(): 첫번째 줄 Francis Ngannou가 출력된 이유는 getFullname()이 opponent의 메서드로서 실행이 되는데 이떄 this가 가리키는 것이 자신을 부른 주체가 되기 때문에 opponent가 되고 그 opponent의 fullname이 해당 이름이기 때문이다
// fighter.getName(): 첫번째 줄 VS 다음에 John Jones가 출력된 이유는 getName()이 fighter의 메서드로서 실행이 되는데 이때 this가 가리키는 것은 위의 이유와 마찬가지로 fighter이고 이 fighter의 fullname이 해당 이름이기 때문이다
// fighter.getName(): 두번째 줄 John Jones가 출력된 이유는 첫번째 줄 VS 다음에 John Jones가 출력된 이유와 동일하다
// fighter.getFirstName(): 두번째 줄 VS 다음 Ciryl이 출력된 이유는 먼저 getFirstName()은 일반 함수가 아닌 화살표 함수이므로 this binding 과정이 일어나지 않아서 fullname은 글로벌로 선언이 된 Ciryl Gane이 되고 split을 통해 firstname인 Ciryl만 출력하게 된다
// fighter.getLastName: 두번째 줄 Cityl 다음 Gane이 출력된 이유는 클로저가 사용되어 호출의 주체가 없이 그냥 괄호 안의 함수를 실행시키는 것이어서 (즉시 실행 함수) 글로벌로 선언된 fullname이 해당되고 lastname만이 출력된다

var fullname = 'Ciryl Gane'

var fighter = {
    fullname: 'John Jones',
    opponent: {
        fullname: 'Francis Ngannou',
        getFullname: function () {
            return this.fullname;
        }
    },

    getName: function() {
        return this.fullname;
    },

    getFirstName: () => {
        return this.fullname.split(' ')[0];
    },

    getLastName: (function() {
        return this.fullname.split(' ')[1];
    })()

}

console.log('Not', fighter.opponent.getFullname(), 'VS', fighter.getName());
console.log('It is', fighter.getName(), 'VS', fighter.getFirstName(), fighter.getLastName);