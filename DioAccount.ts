 
  export  class DioAccount {
   private name: string
   private accountNumber: number 
   private balance: number = 0
     private status: any
    
    constructor(name: string, accountNumber: number){
     this.name = name 
     this.accountNumber = accountNumber 
    }
   
    deposit =() => {
        if(this.validateStatus()){
     console.log (this.deposit)
     console.log('Você depositou')
     }
    }
   
    withdraw = ()  => {
        if (this.validateStatus())  
        if (this.getBalance > this.withdraw)
       console.log (this.withdraw)
       console.log ('Você Sacou') 
     }
    getBalance = () => {
     console.log(this.balance)
     }
     private validateStatus = () : boolean => {
        if (this.status){
            return this.status 
        }
       else
        throw new Error ('Conta Inválida')
     }
   }