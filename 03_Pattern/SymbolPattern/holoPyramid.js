function holoPyramid(row){
  
    for(let i=1; i<=row; i++){
        let str="";
        //space
        for(let sp=1; sp<=row-i; sp++){
            str+=" ";
        }
        //print star
        for(let st=1; st<=2*i-1; st++){
            if(st==1 || st==2*i-1 || i==row) 
            str+="*";
            else str+=" ";
        }
        console.log(str);
    }
}

holoPyramid(5);