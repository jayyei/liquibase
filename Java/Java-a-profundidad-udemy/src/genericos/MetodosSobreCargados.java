package genericos;

public class MetodosSobreCargados {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//Crear arreglos Integer, Double and Character
		
		Integer[] arregloInteger = {1,2,3,4,5,6};
		Double[] arregloDouble = {1.1,2.2,3.3,4.4,5.5,6.6,7.7};
		Character[] arregloCharacter = {'H', 'E', 'L', 'L', 'O'};
		
		System.out.printf("El arreglo arregloInteger contiene: %n");
		imprimirArreglo(arregloInteger);
		System.out.printf("El arreglo arregloDouble contiene: %n");
		imprimirArreglo(arregloDouble);
		System.out.printf("El arreglo arregloCharacter contiene: %n");
		imprimirArreglo(arregloCharacter);
		
	}
	
	public static void imprimirArreglo(Integer[] arreglo) {
		for (Integer integer: arreglo) {
			System.out.printf("%s ", integer);
		}
	}
	public static void imprimirArreglo(Double[] arreglo) {
		for (Double integer: arreglo) {
			System.out.printf("%s ", integer);
		}
	}
	public static void imprimirArreglo(Character[] arreglo) {
		for (Character integer: arreglo) {
			System.out.printf("%s ", integer);
		}
	}

}
