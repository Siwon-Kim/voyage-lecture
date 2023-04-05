// - 출력의 결과를 제출해주세요, 그리고 그 이유를 최대한 상세히 설명해주세요
// - **주의사항 : 브라우저에서 테스트해주세요(Chrome → 개발자 도구 → 콘솔에 입력하여 실행)**

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