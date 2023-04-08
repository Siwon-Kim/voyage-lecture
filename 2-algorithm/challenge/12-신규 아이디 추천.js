function solution(new_id) {
	// 1단계: new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
	new_id = new_id.toLowerCase();
	// 2단계: new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
	idArr = [...new_id];
	idArr = idArr.filter((word) => {
		return (
			!isNaN(word) ||
			word == "-" ||
			word == "_" ||
			word == "." ||
			word.match(new RegExp(/^[a-z]/))
		);
	});
	// 3단계: new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
	let isPrevDot = false;
	idArr = idArr.filter((word) => {
		// 두 개 이상 연속으로 .이면 뒤에 나오는 것들을 splice()하기.
		if (word == ".") {
			if (isPrevDot) {
				// 나중에 따라오는 점일때
				isPrevDot = true;
				return false;
			} else {
				// 처음오는 점일때
				isPrevDot = true;
				return true;
			}
		} else {
			// 점 바로 뒤 다른 값일 때
			isPrevDot = false;
			return true;
		}
	});
	// str = str.replace(/\.+/g, '.');
	// 4단계: new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
	if (idArr[0] == ".") {
		idArr.shift();
	}
	if (idArr[idArr.length - 1] == ".") {
		idArr.pop();
	}

	// 5단계: new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
	if (idArr.length == 0) {
		idArr.push("a");
	}

	// 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
	//     만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
	if (idArr.length >= 16) {
		idArr.splice(15, idArr.length - 15);
	}
	if (idArr[idArr.length - 1] == ".") {
		idArr.pop();
	}
	// 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
	if (idArr.length == 1) {
		idArr.push(idArr[idArr.length - 1]);
		idArr.push(idArr[idArr.length - 1]);
	} else if (idArr.length == 2) {
		idArr.push(idArr[idArr.length - 1]);
	}

	console.log(idArr.join(""));
	return idArr.join("");
}
solution("...!@BaT#*..y.abcdefghijklm"); // "bat.y.abcdefghi"
