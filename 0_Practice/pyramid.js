function pyramid(row){
    for(let i=1; i<=row; i++){
        let str;
         str='';
        for(let sp=1; sp<=row-i; sp++){
            str+=" ";
        }
        //print *
        for(let s=1; s<=2*i-1; s++){
            str+='*';
        }
        console.log(str);
    }
}
pyramid(10);