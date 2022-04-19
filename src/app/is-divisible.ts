/* test si divisible  retourne true */
export function isDivisible(nombre: number):boolean{
	
	
    const estDivisible= nombre % 2 == 0
     || nombre % 3 == 0 
     || nombre % 5 == 0 
     || nombre % 7 == 0
     || nombre % 11 ==0
     || nombre % 13 == 0;
    /* si la reponse est oui */
    if (estDivisible)return true;
      return false
}