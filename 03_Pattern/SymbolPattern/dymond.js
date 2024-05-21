function dymond(row){
    row = row+1;

    for(let i=1; i<row; i++){
        let str="";
        if(i<=row/2){
            //space
            for(let sp=1; sp<=row/2-i; sp++){
                str+=" ";
            }
            //print star
            for(let st=1; st<=2*i-1; st++){
                str+="*";
            }
            console.log(str);
            str="";
        }
        else{
            //space
            for(let sp=1; sp<=i-row/2; sp++){
                str+=" ";
            }
            //print star
            for(let st=i; st<=2*row-i-2; st++){
                str+="*";
            }
            console.log(str);
        }
        
    }
}

dymond(19);