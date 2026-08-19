import java.util.*;

/**
 * Quiz com 50 perguntas de múltipla escolha (matemática, geometria, conhecimentos gerais).
 * As alternativas são embaralhadas automaticamente, e as respostas corretas são definidas
 * de acordo com o conteúdo de cada pergunta.
 */
public class Quiz {

    // ==================== CLASSE PERGUNTA ====================
    static class Pergunta {
        private final String enunciado;
        private List<String> alternativas;
        private int indiceCorreta; // 0 = A, 1 = B, 2 = C, 3 = D

        public Pergunta(String enunciado, List<String> alternativas, int indiceCorreta) {
            if (indiceCorreta < 0 || indiceCorreta >= alternativas.size()) {
                throw new IllegalArgumentException("Índice da resposta correta inválido.");
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

    // ==================== 50 NOVAS PERGUNTAS ====================
    private static List<Pergunta> criarPerguntas() {
        List<Pergunta> perguntas = new ArrayList<>();

        // Cada entrada: [enunciado, alternativaA, alternativaB, alternativaC, alternativaD, indiceCorreto (0-3)]
        String[][] dados = {
            // 1
            {"Qual é a fórmula da área total do cone?", "πr(r+g)", "2πr(r+g)", "πr²", "πrg", "0"},
            // 2
            {"Qual é a fórmula da área total da esfera?", "4πr²", "2πr²", "πr²", "4πr³", "0"},
            // 3
            {"Qual é a fórmula da área total do cilindro?", "2πr(h+r)", "πr(h+r)", "2πrh", "πr²h", "0"},
            // 4
            {"Qual é a fórmula da área total do cubo?", "6a²", "a³", "4a²", "2a²", "0"},
            // 5
            {"Qual é a fórmula da área total de um prisma reto?", "2·Ab + Al", "Ab + Al", "2·Ab", "Al", "0"},
            // 6
            {"Qual é a fórmula da área de um triângulo?", "base·altura/2", "base·altura", "lado²", "πr²", "0"},
            // 7
            {"Qual é a fórmula do volume do cone?", "πr²h/3", "πr²h", "2πr²h/3", "πr³/3", "0"},
            // 8
            {"Qual é a fórmula do volume da esfera?", "4πr³/3", "πr³", "4πr²", "2πr³/3", "0"},
            // 9
            {"Qual é a fórmula do volume do cilindro?", "πr²h", "2πr²h", "πr²", "πrh", "0"},
            // 10
            {"Qual é a fórmula do volume do cubo?", "a³", "6a²", "a²", "4a³", "0"},
            // 11
            {"Calcule a área total de um cubo de lado 3.", "54", "27", "36", "18", "0"},
            // 12
            {"Calcule o volume de um cubo de lado 4.", "64", "48", "16", "96", "0"},
            // 13
            {"Calcule o volume de um cone com raio 3 e altura 4 (use π = 3).", "36", "48", "24", "12", "0"},
            // 14
            {"Calcule a área total de um cilindro com raio 2 e altura 5 (use π = 3).", "84", "60", "72", "48", "0"},
            // 15
            {"Qual é a área de um triângulo de base 6 e altura 8?", "24", "48", "14", "28", "0"},
            // 16
            {"Qual é a área de um círculo de raio 5 (use π = 3)?", "75", "30", "15", "100", "0"},
            // 17
            {"Qual é a circunferência de um círculo de raio 7 (use π = 3)?", "42", "21", "14", "49", "0"},
            // 18
            {"Qual é a área de um quadrado de lado 9?", "81", "18", "36", "72", "0"},
            // 19
            {"Qual é o perímetro de um retângulo de lados 4 e 7?", "22", "11", "28", "14", "0"},
            // 20
            {"Qual é a área de um losango com diagonais 6 e 8?", "24", "48", "14", "12", "0"},
            // 21
            {"Qual é a área de um paralelogramo de base 5 e altura 6?", "30", "11", "60", "15", "0"},
            // 22
            {"Qual é a soma dos ângulos internos de um triângulo?", "180°", "90°", "360°", "270°", "0"},
            // 23
            {"Qual é a soma dos ângulos internos de um quadrilátero?", "360°", "180°", "540°", "720°", "0"},
            // 24
            {"Qual é o teorema de Pitágoras?", "a²+b²=c²", "a+b=c", "a²+b²=c", "a+b²=c²", "0"},
            // 25
            {"Qual é o erro comum na fórmula da área do círculo?", "Usar 2πr", "Usar πr²", "Usar πd", "Usar 2πr²", "0"},
            // 26
            {"Qual é a raiz quadrada de 144?", "12", "14", "16", "10", "0"},
            // 27
            {"Qual é a raiz quadrada de 81?", "9", "7", "8", "11", "0"},
            // 28
            {"Quanto é 7 × 8?", "56", "48", "64", "42", "0"},
            // 29
            {"Quanto é 15% de 200?", "30", "15", "20", "25", "0"},
            // 30
            {"Quanto é 25% de 80?", "20", "25", "15", "30", "0"},
            // 31
            {"Qual é a média de 4, 6, 8 e 10?", "7", "6", "8", "9", "0"},
            // 32
            {"Qual é a moda de 2, 3, 3, 4, 5?", "3", "2", "4", "5", "0"},
            // 33
            {"Qual é a mediana de 1, 3, 5, 7, 9?", "5", "3", "7", "6", "0"},
            // 34
            {"Qual é o próximo número da sequência: 2, 4, 8, 16, ...?", "32", "24", "30", "18", "0"},
            // 35
            {"Qual é a raiz cúbica de 27?", "3", "9", "6", "12", "0"},
            // 36
            {"Quanto é 2 elevado a 5?", "32", "16", "8", "64", "0"},
            // 37
            {"Quanto é 3 elevado a 3?", "27", "9", "81", "18", "0"},
            // 38
            {"Quanto é 10 elevado a 2?", "100", "20", "1000", "10", "0"},
            // 39
            {"Qual é a distância entre os pontos (0,0) e (3,4)?", "5", "7", "1", "6", "0"},
            // 40
            {"Qual é a equação da reta que passa por (0,0) e (1,1)?", "y = x", "y = 2x", "y = x²", "y = x+1", "0"},
            // 41
            {"Qual é o seno de 30°?", "1/2", "√3/2", "1", "0", "0"},
            // 42
            {"Qual é o cosseno de 60°?", "1/2", "√3/2", "1", "0", "0"},
            // 43
            {"Qual é a tangente de 45°?", "1", "0", "√3", "1/2", "0"},
            // 44
            {"Qual é a derivada de x²?", "2x", "x", "x²", "2", "0"},
            // 45
            {"Qual é a integral indefinida de 2x?", "x²", "2x²", "x", "x²/2", "0"},
            // 46
            {"Calcule a área total de um cone com raio 3 e geratriz 5 (use π = 3).", "72", "60", "48", "36", "0"},
            // 47
            {"Calcule o volume de uma esfera de raio 3 (use π = 3).", "108", "36", "72", "12", "0"},
            // 48
            {"Qual é a área total de um cubo de lado x?", "6x²", "x³", "4x²", "2x²", "0"},
            // 49
            {"Qual é o volume de um cubo de lado x?", "x³", "6x²", "x²", "4x³", "0"},
            // 50
            {"Calcule o volume de um cone com raio 4 e altura 6 (use π = 3).", "96", "72", "48", "144", "0"}
        };

        for (String[] linha : dados) {
            String enunciado = linha[0];
            List<String> alternativas = Arrays.asList(linha[1], linha[2], linha[3], linha[4]);
            int indiceCorreto = Integer.parseInt(linha[5]);
            perguntas.add(new Pergunta(enunciado, alternativas, indiceCorreto));
        }

        return perguntas;
    }

    // ==================== ESTATÍSTICAS ====================
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
            System.out.println("\n=== ESTATÍSTICAS ===");
            System.out.println("Total de partidas: " + totalJogos);
            if (totalJogos > 0) {
                double mediaAcertos = (double) totalAcertos / totalPerguntasRespondidas * 100;
                System.out.printf("Taxa de acerto geral: %.1f%%\n", mediaAcertos);
                System.out.println("Últimos resultados: " + historicoAcertos);
            } else {
                System.out.println("Nenhuma partida jogada ainda.");
            }
        }
    }

    // ==================== MAIN ====================
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Estatisticas estatisticas = new Estatisticas();
        Random random = new Random();

        while (true) {
            System.out.println("\n===== MENU PRINCIPAL =====");
            System.out.println("1. Iniciar novo quiz (50 perguntas)");
            System.out.println("2. Ver estatísticas");
            System.out.println("3. Sair");
            System.out.print("Escolha uma opção: ");

            String opcao = scanner.nextLine().trim();
            switch (opcao) {
                case "1":
                    iniciarQuiz(scanner, random, estatisticas);
                    break;
                case "2":
                    estatisticas.exibir();
                    break;
                case "3":
                    System.out.println("Saindo... Até logo!");
                    scanner.close();
                    return;
                default:
                    System.out.println("Opção inválida. Tente novamente.");
            }
        }
    }

    private static void iniciarQuiz(Scanner scanner, Random random, Estatisticas estatisticas) {
        List<Pergunta> perguntas = criarPerguntas();

        // Embaralhar alternativas de cada pergunta (a resposta correta acompanha)
        for (Pergunta p : perguntas) {
            p.embaralharAlternativas();
        }

        // Embaralhar ordem das perguntas
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
                i--; // repete a pergunta se entrada inválida
                continue;
            }

            int escolhaIndice = escolhaLetra - 'A';
            if (escolhaIndice == p.getIndiceCorreta()) {
                System.out.println("✅ Correto!\n");
                acertos++;
            } else {
                char letraCorreta = (char) ('A' + p.getIndiceCorreta());
                System.out.println("❌ Errado! A resposta correta era " + letraCorreta + ".\n");
            }
        }

        System.out.println("=== FIM DO QUIZ ===");
        System.out.printf("Você acertou %d de %d perguntas (%.1f%%).\n",
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
                System.out.println("Entrada inválida! Digite apenas A, B, C ou D.");
            }
        }
    }
}
