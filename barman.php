
<?php
print("
\e[1;31m ____          _____       __  __          _   _ \e[0m
\e[1;32m|  _ \   /\   |  __ \     |  \/  |   /\   | \ | |\e[0m
\e[1;33m| |_) | /  \  | |__) |    | \  / |  /  \  |  \| |\e[0m
\e[1;34m|  _ < / /\ \ |  _  /     | |\/| | / /\ \ | . ` |\e[0m
\e[1;35m| |_) / ____ \| | \ \     | |  | |/ ____ \| |\  |\e[0m
\e[1;36m|____/_/    \_\_|  \_\    |_|  |_/_/    \_\_| \_|\e[0m

");


print("Welcome to the Bar 🍹\n");
print("First of all We Need to verify your age : ");
try {
  //code... 
  $age = fgets(STDIN);

  $ageRegex = "/^-?\d+$/";
  
  if(preg_match($ageRegex ,$age )){
if($age > 18){
  print("You are eligible to Have a Drink; Chears 🍻\n");
  sleep(2);
  main();
}else{
  print("Nice Try kid 🧒,But You are not allowed  🛑\nAge must be above 18\n");
}
  }else{
  
      print("age Must be a Number ::\n");
  }
  
} catch (\Throwable $th) {
  //throw $th;
}

function main (){
$total=0;
$br = false;
while ($br==false) {
  print("So What would you like to have sir ? 🍽 : ");
  $drink = fgets(STDIN);
$drinkRegex = "/^[A-Za-z]+$/";

  if(preg_match($drinkRegex,$drink)){
    print("Hold on a sec sir ,let me check in ⏲...\n \n");
    sleep(3);
    $random_price = rand(100,500); 
    print("Yes there is ".strtoupper($drink)." ,\n 💸 The price will be $".$random_price .".00 \n\n");
    sleep(0.1);
    print("SELECT YOUR PAYMENT METHOD :\ncash 💰 => SELECT 1;\n\nCard 💳  => SELECT 2\n\nCheck  📰 => SELECT 3;\n");
    $payment_method= fgets(STDIN);
    print("HERE is the BILL sir :\n");
  
    $total = $total + $random_price;
  switch ($payment_method) {
    case 2:
      print("Your Total is $".$total.".00 ;payment done by Card\n");    
      break;
  
      case 3:
  print("Your Total is $".$total.".00 ;payment done by Check\n");    
        
           break;
    default:
  print("Your Total is $".$total.".00 ;payment done by Cash\n");    
      break;
  }
  
  
  print("\nDo you need anything sir ?  ; { SELECT (Y / N) } ");
  $anything = trim(fgets(STDIN));
  if($anything==='y' || $anything==='Y'){

  }else{

    $br = true;
    break;

  }
  }else{
    print("Hmm! 🤔 there is nothing to have like that 😐 \n");
  }

}
  print("Have a nice day ,Come again 🥰\n");
}
?>  