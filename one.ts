interface Person {
    firstName:string;
    lastName:string;
}
function greeter(person:Person){
    return 'hello' + person
}
class Ad{
    public readonly name:string;
    sex: 'nana';
    fio(){
        console.log(this)
    }
}
const BASE = 'portal name'
let ac = {
    BASE:'asd'
}
function say(ad:string) {
    return 'hello' + ad
}
// let af = new Ad()
// af.sex = 'nana'
// let fo = af.fio;
// fo();
// let user = {firstName:'asd', lastName:'eqwe',asad:'adasdasdas'}
document.body.innerHTML = say(ac[BASE])
