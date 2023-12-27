function class_cat(list){
  
    class Cat {
      constructor (name, age){
        this.name = name
        this.age = age
      }
      
      meow(){
        return `${this.name}, age ${this.age} says Meow`
      }
    }
    
    let cats_object_list = []
    for (i= 0; i< list.length; i+=1){
      [name, age]= list[i].split(" ")
      cats_object_list.push(new Cat(name, age))
    }
    
    for (let cat of cats_object_list){
      console.log(cat.meow())
    }
  }
  
  class_cat(['Mellow 2', 'Tom 5'])
  