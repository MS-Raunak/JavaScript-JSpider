function pyramid(row){
    
    for(let i=1; i<=row; i++){
        let str="";
        for(let sp=1; sp<=row-i; sp++){
            str+=" "
        }
        for(let st=1; st<=2*i-1; st++){
            str+="*";
        }
       console.log(str);
    }
}

pyramid(5);