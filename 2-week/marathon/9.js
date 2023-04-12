function solution(phone_number) {
	let len = phone_number.length;
	let secret_number = "*".repeat(len - 4);
	secret_number += phone_number.substring(len - 4, len);
	return secret_number;
}
