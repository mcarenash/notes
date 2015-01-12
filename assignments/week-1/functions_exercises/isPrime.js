function isPrime(num){
	if(num===1){
		return false
	}
	else {
	for(i=2; i<num; i++){
		if (num%i===0){
			return false;
		}
	}
 return true;
}
}

isPrime(3)

