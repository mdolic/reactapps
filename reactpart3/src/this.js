//info about this keyword


let saySomething = function (name){
    console.log(`hello, ${name}`)
};

saySomething('frank')

//implicit binding
//left of the dot at call time
let me = {
    name: 'mirzet',
    age:29,
    sayName: function(){
        console.log(this.name);
    }
};

me.sayName();

let wow = function(obj){
    obj.sayName = function(){
        console.log(this.name);
    };
};
let me = {
    name:'mirzet',
    age:25
};
let you = {
    name:'miki',
    age:29
};
wow(me);
wow(you);
me.sayName();
you.sayName();

let Person = function(name,age){
    return {
        name:name,
        age:age,
        sayName:function(){
            console.log(this.name);
        },
        mother:{
            name:'louise',
            sayName: function(){
                console.log(this.name);
            }
        }
    };
};

let jim = Person('jim',24);
jim.sayName();
jim.mother.sayName();

//explicit binding

let sayName= function(lang1,lang2,lang3){
    console.log(`my name is ${this.name},I use ${lang1}, ${lang2}, ${lang3} `);
};

let frank = {
    name:'frankie',
    age:34

};
let lang = ['js', 'ruby','java','python'];

//frank.sayName(); //implicit
sayName.apply(frank, lang) //explicit




