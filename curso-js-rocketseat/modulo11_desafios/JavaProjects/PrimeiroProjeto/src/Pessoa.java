public class Pessoa {
    public String nome;
    public int idade;
    public float peso;

    public Pessoa() {
        nome = "Nome";
        idade = 0;
        peso = 0;
    }

    public void andar() {
        System.out.println(nome + " está andando...");
    }
}
