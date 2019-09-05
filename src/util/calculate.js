export default function(operand1, operand2, operator) {
 const o1 = +operand1;
 const o2 = +operand2;

 switch(operator) {
   case "+" :
     return (o1 + o2).toString();
   case "-":
     return (o1 - o2).toString();
   case "*" :
     return (o1 * o2).toString();
   case "/":
     if (o2 === 0) {
       alert("Can't divide by zero.");
       return "0";
     }

     return (o1 / o2).toString();
   default:
     return "0";
  }
}
