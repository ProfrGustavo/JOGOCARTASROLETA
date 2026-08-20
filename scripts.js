import java.util.*;

public class Quiz {

    static class Pergunta {
        private final String enunciado;
        private List<String> alternativas;
        private int indiceCorreta;

        public Pergunta(String enunciado, List<String> alternativas, int indiceCorreta) {
            if (indiceCorreta < 0 || indiceCorreta >= alternativas.size()) {
                throw new IllegalArgumentException("Indice da resposta correta invalido.");
            }
            this.enunciado = enunciado;
            this.alternativas = new ArrayList<>(alternativas);
            this.indiceCorreta = indiceCorreta;
        }

        public String getEnunciado() {
            return enunciado;
        }

        public List<String> getAlternativas() {
            return Collections.unmodifiableList(alternativas);
        }

        public int getIndiceCorreta() {
            return indiceCorreta;
        }

        public void embaralharAlternativas() {
            List<Map.Entry<String, Integer>> pares = new ArrayList<>();
            for (int i = 0; i < alternativas.size(); i++) {
                pares.add(new AbstractMap.SimpleEntry<>(alternativas.get(i), i));
            }
            Collections.shuffle(pares);

            List<String> novas = new ArrayList<>();
            int novoIndice = -1;
            for (int i = 0; i < pares.size(); i++) {
                String texto = pares.get(i).getKey();
                int original = pares.get(i).getValue();
                novas.add(texto);
                if (original == indiceCorreta) {
                    novoIndice = i;
                }
            }
            this.alternativas = novas;
            this.indiceCorreta = novoIndice;
        }

        @Override
        public String toString() {
            StringBuilder sb = new StringBuilder(enunciado).append("\n");
            char letra = 'A';
            for (String alt : alternativas) {
                sb.append("   ").append(letra++).append(") ").append(alt).append("\n");
            }
            return sb.toString();
        }
    }

    private static List<Pergunta> criarPerguntas() {
        List<Pergunta> perguntas = new ArrayList<>();

        String[][] dados = {
            {"Qual a formula da area total do cone?", "pi*r*(r+g)", "2*pi*r*(r+g)", "pi*r^2", "pi*r*g", "0"},
            {"Qual a formula da area total da esfera?", "4*pi*r^2", "2*pi*r^2", "pi*r^2", "4*pi*r^3", "0"},
            {"Qual a formula da area total do cilindro?", "2*pi*r*(h+r)", "pi*r*(h+r)", "2*pi*r*h", "pi*r^2*h", "0"},
            {"Qual a formula da area total do cubo?", "6*a^2", "a^3", "4*a^2", "2*a^2", "0"},
            {"Qual a formula da area total de um prisma reto?", "2*Ab + Al", "Ab + Al", "2*Ab", "Al", "0"},
            {"Qual a formula da area de um triangulo?", "base*altura/2", "base*altura", "lado^2", "pi*r^2", "0"},
            {"Qual a formula do volume do cone?", "pi*r^2*h/3", "pi*r^2*h", "2*pi*r^2*h/3", "pi*r^3/3", "0"},
            {"Qual a formula do volume da esfera?", "4*pi*r^3/3", "pi*r^3", "4*pi*r^2", "2*pi*r^3/3", "0"},
            {"Qual a formula do volume do cilindro?", "pi*r^2*h", "2*pi*r^2*h", "pi*r^2", "pi*r*h", "0"},
            {"Qual a formula do volume do cubo?", "a^3", "6*a^2", "a^2", "4*a^3", "0"},
            {"Calcule a area total de um cubo de lado 3.", "54", "27", "36", "18", "0"},
            {"Calcule o volume de um cubo de lado 4.", "64", "48", "16", "96", "0"},
            {"Calcule o volume de um cone com raio 3 e altura 4 (use pi=3).", "36", "48", "24", "12", "0"},
            {"Calcule a area total de um cilindro com raio 2 e altura 5 (use pi=3).", "84", "60", "72", "48", "0"},
            {"Qual a area de um triangulo de base 6 e altura 8?", "24", "48", "14", "28", "0"},
            {"Qual a area de um circulo de raio 5 (use pi=3)?", "75", "30", "15", "100", "0"},
            {"Qual a circunferencia de um circulo de raio 7 (use pi=3)?", "42", "21", "14", "49", "0"},
            {"Qual a area de um quadrado de lado 9?", "81", "18", "36", "72", "0"},
            {"Qual o perimetro de um retangulo de lados 4 e 7?", "22", "11", "28", "14", "0"},
            {"Qual a area de um losango com diagonais 6 e 8?", "24", "48", "14", "12", "0"},
            {"Qual a area de um paralelogramo de base 5 e altura 6?", "30", "11", "60", "15", "0"},
            {"Qual a soma dos angulos internos de um triangulo?", "180 graus", "90 graus", "360 graus", "270 graus", "0"},
            {"Qual a soma dos angulos internos de um quadrilatero?", "360 graus", "180 graus", "540 graus", "720 graus", "0"},
            {"Qual o teorema de Pitagoras?", "a^2+b^2=c^2", "a+b=c", "a^2+b^2=c", "a+b^2=c^2", "0"},
            {"Qual o erro comum na formula da area do circulo?", "Usar 2*pi*r", "Usar pi*r^2", "Usar pi*d", "Usar 2*pi*r^2", "0"},
            {"Qual a raiz quadrada de 144?", "12", "14", "16", "10", "0"},
            {"Qual a raiz quadrada de 81?", "9", "7", "8", "11", "0"},
            {"Quanto e 7 x 8?", "56", "48", "64", "42", "0"},
            {"Quanto e 15% de 200?", "30", "15", "20", "25", "0"},
            {"Quanto e 25% de 80?", "20", "25", "15", "30", "0"},
            {"Qual a media de 4, 6, 8 e 10?", "7", "6", "8", "9", "0"},
            {"Qual a moda de 2, 3, 3, 4, 5?", "3", "2", "4", "5", "0"},
            {"Qual a mediana de 1, 3, 5, 7, 9?", "5", "3", "7", "6", "0"},
            {"Qual o proximo numero da sequencia: 2, 4, 8, 16, ...?", "32", "24", "30", "18", "0"},
            {"Qual a raiz cubica de 27?", "3", "9", "6", "12", "0"},
            {"Quanto e 2 elevado a 5?", "32", "16", "8", "64", "0"},
            {"Quanto e 3 elevado a 3?", "27", "9", "81", "18", "0"},
            {"Quanto e 10 elevado a 2?", "100", "20", "1000", "10", "0"},
            {"Qual a distancia entre os pontos (0,0) e (3,4)?", "5", "7", "1", "6", "0"},
            {"Qual a equacao da reta que passa por (0,0) e (1,1)?", "y = x", "y = 2x", "y = x^2", "y = x+1", "0"},
            {"Qual o seno de 30 graus?", "1/2", "raiz(3)/2", "1", "0", "0"},
            {"Qual o cosseno de 60 graus?", "1/2", "raiz(3)/2", "1", "0", "0"},
            {"Qual a tangente de 45 graus?", "1", "0", "raiz(3)", "1/2", "0"},
            {"Qual a derivada de x^2?", "2x", "x", "x^2", "2", "0"},
            {"Qual a integral indefinida de 2x?", "x^2", "2x^2", "x", "x^2/2", "0"},
            {"Calcule a area total de um cone com raio 3 e geratriz 5 (use pi=3).", "72", "60", "48", "36", "0"},
            {"Calcule o volume de uma esfera de raio 3 (use pi=3).", "108", "36", "72", "12", "0"},
            {"Qual a area total de um cubo de lado x?", "6x^2", "x^3", "4x^2", "2x^2", "0"},
            {"Qual o volume de um cubo de lado x?", "x^3", "6x^2", "x^2", "4x^3", "0"},
            {"Calcule o volume de um cone com raio 4 e altura 6 (use pi=3).", "96", "72", "48", "144", "0"}
        };

        for (String[] linha : dados) {
            String enunciado = linha[0];
            List<String> alternativas = Arrays.asList(linha[1], linha[2], linha[3], linha[4]);
            int indiceCorreto = Integer.parseInt(linha[5]);
            perguntas.add(new Pergunta(enunciado, alternativas, indiceCorreto));
        }

        return perguntas;
    }

    private static class Estatisticas {
        private int totalJogos = 0;
        private int totalPerguntasRespondidas = 0;
        private int totalAcertos = 0;
        private final List<Integer> historicoAcertos = new ArrayList<>();

        public void registrarJogo(int acertos, int total) {
            totalJogos++;
            totalPerguntasRespondidas += total;
            totalAcertos += acertos;
            historicoAcertos.add(acertos);
        }

        public void exibir() {
            System.out.println("\n=== ESTATISTICAS ===");
            System.out.println("Total de partidas: " + totalJogos);
            if (totalJogos > 0) {
                double mediaAcertos = (double) totalAcertos / totalPerguntasRespondidas * 100;
                System.out.printf("Taxa de acerto geral: %.1f%%\n", mediaAcertos);
                System.out.println("Ultimos resultados: " + historicoAcertos);
            } else {
                System.out.println("Nenhuma partida jogada ainda.");
            }
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Estatisticas estatisticas = new Estatisticas();
        Random random = new Random();

        while (true) {
            System.out.println("\n===== MENU PRINCIPAL =====");
            System.out.println("1. Iniciar novo quiz (50 perguntas)");
            System.out.println("2. Ver estatisticas");
            System.out.println("3. Sair");
            System.out.print("Escolha uma opcao: ");

            String opcao = scanner.nextLine().trim();
            switch (opcao) {
                case "1":
                    iniciarQuiz(scanner, random, estatisticas);
                    break;
                case "2":
                    estatisticas.exibir();
                    break;
                case "3":
                    System.out.println("Saindo... Ate logo!");
                    scanner.close();
                    return;
                default:
                    System.out.println("Opcao invalida. Tente novamente.");
            }
        }
    }

    private static void iniciarQuiz(Scanner scanner, Random random, Estatisticas estatisticas) {
        List<Pergunta> perguntas = criarPerguntas();

        for (Pergunta p : perguntas) {
            p.embaralharAlternativas();
        }

        Collections.shuffle(perguntas, random);

        int total = perguntas.size();
        int acertos = 0;

        System.out.println("\n=== NOVO QUIZ (50 perguntas) ===");
        System.out.println("Responda com a letra (A, B, C ou D).\n");

        for (int i = 0; i < total; i++) {
            Pergunta p = perguntas.get(i);
            System.out.println("Pergunta " + (i + 1) + "/" + total);
            System.out.println(p);

            char escolhaLetra = lerResposta(scanner);
            if (escolhaLetra == 0) {
                i--;
                continue;
            }

            int escolhaIndice = escolhaLetra - 'A';
            if (escolhaIndice == p.getIndiceCorreta()) {
                System.out.println("Correto!\n");
                acertos++;
            } else {
                char letraCorreta = (char) ('A' + p.getIndiceCorreta());
                System.out.println("Errado! A resposta correta era " + letraCorreta + ".\n");
            }
        }

        System.out.println("=== FIM DO QUIZ ===");
        System.out.printf("Voce acertou %d de %d perguntas (%.1f%%).\n",
                acertos, total, (100.0 * acertos) / total);

        estatisticas.registrarJogo(acertos, total);
    }

    private static char lerResposta(Scanner scanner) {
        while (true) {
            System.out.print("Sua resposta: ");
            String entrada = scanner.nextLine().trim().toUpperCase();
            if (entrada.isEmpty()) {
                System.out.println("Entrada vazia. Digite uma letra (A-D).");
                continue;
            }
            char c = entrada.charAt(0);
            if (c >= 'A' && c <= 'D') {
                return c;
            } else {
                System.out.println("Entrada invalida! Digite apenas A, B, C ou D.");
            }
        }
    }
}