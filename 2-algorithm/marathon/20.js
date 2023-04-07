function solution(participant, completion) {
	participant.sort();
	completion.sort();

	for (let i = 0; i < participant.length; i++) {
		if (participant[i] !== completion[i]) {
			return participant[i];
		}
	}
} // index out of bound error -> completion[i] returns undefined if no element exists

function solution_hash(participant, completion) {
	const hashMap = {};
	for (let hash of completion) {
		hashMap[hash] = hashMap[hash] ? ++hashMap[hash] : 1;
	}

	for (let part of participant) {
		if (!hashMap[part]) return part;
		hashMap[part]--;
	}
}
