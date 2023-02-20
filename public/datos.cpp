    #include <iostream>
    using namespace std;
    #include <ctime>// para usar time
    #include <cstdlib>     // para usar srand

   int main(){    
        
   		int a [100000] = {0};
   		
 		srand(time(NULL)); // generador de numeros aleatorios
 		//aqui genero los numeros aleatorios
 		
 		for (int  i =  0; i < 100000 ; i++){
 			a[i] = 1+rand()%(255-1);
		 }
	
		
 		for (int i = 0; i < 100000 ; i++){
 		
 			cout <<"{\"value\":"<<a[i]<<"}"<<endl;
		 }
	
	
  	system("Pause");
    return 0;

   }    
