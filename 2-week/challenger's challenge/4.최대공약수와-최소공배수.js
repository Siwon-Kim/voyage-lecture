function solution(n, m) {
	let gcd, lcm;
	// 최대공약수 GCD - 둘 중 작은 수 기준
	for (let i = Math.min(n, m); i >= 1; i--) {
		if (n % i === 0 && m % i === 0) {
			gcd = i;
			break;
		}
	}

	// 최소공배수 LCM - GCD * n/GCD * m/GCD
	lcm = gcd * Math.floor(n / gcd) * Math.floor(m / gcd);

	return [gcd, lcm];
}

solution(3, 12);
