function main(){
    call(1,2);
    call(1,2,3);
    call(1,2,3,4);
}
main();

function call(...num){
    console.log(num)
}