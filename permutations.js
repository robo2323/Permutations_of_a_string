
function permAlone(str) {
	
	var arr=str.split(""),
	temp,
	permutations=0;
	
	function swap(index,num){
		temp=arr[index];
		arr[index]=arr[num];
		arr[num]=temp;
	}
	
	function permutate(n){
		if (n==1){
			console.log(arr.join(""));
			permutations++;
		}else {
			for (var i=0; i<n; i++){
				permutate(n-1);
				n%2 ? swap(i,n-1) : swap(0,n-1);
			}
		}
	}
	
	permutate(arr.length);
	
	console.log(permutations +" permutations of string: "+ str);
	  	
}

permAlone('abcd');
