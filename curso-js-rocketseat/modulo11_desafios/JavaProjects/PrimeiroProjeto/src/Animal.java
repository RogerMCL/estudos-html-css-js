public class Animal {
    private String nome;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void locomover() {
        System.out.println(nome + " está se locomovendo...");
    }
}
