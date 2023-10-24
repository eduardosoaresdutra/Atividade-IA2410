def imprimir_tabuleiro(tabuleiro):
    # Função para exibir o estado atual do tabuleiro
    for linha in tabuleiro:
        print(" | ".join(linha))
        print("-" * 9)

def avaliar(tabuleiro):
    # Função para avaliar o estado atual do tabuleiro e verificar se o jogo terminou
    # Verifica as linhas
    for linha in tabuleiro:
        if linha.count(linha[0]) == 3 and linha[0] != ' ':
            return linha[0]

    # Verifica as colunas
    for coluna in range(3):
        if tabuleiro[0][coluna] == tabuleiro[1][coluna] == tabuleiro[2][coluna] and tabuleiro[0][coluna] != ' ':
            return tabuleiro[0][coluna]

    # Verifica as diagonais
    if tabuleiro[0][0] == tabuleiro[1][1] == tabuleiro[2][2] and tabuleiro[0][0] != ' ':
        return tabuleiro[0][0]
    if tabuleiro[0][2] == tabuleiro[1][1] == tabuleiro[2][0] and tabuleiro[0][2] != ' ':
        return tabuleiro[0][2]

    # Verifica se houve empate
    if ' ' not in tabuleiro[0] and ' ' not in tabuleiro[1] and ' ' not in tabuleiro[2]:
        return 'Velha'

    # O jogo não terminou
    return None

def minimax(tabuleiro, profundidade, maximizando):
    # Função Minimax para avaliar e escolher a melhor jogada para o jogador 'O' (maximizador) ou 'X' (minimizador)
    resultado = avaliar(tabuleiro)

    if resultado is not None:
        if resultado == 'X':
            return -1
        elif resultado == 'O':
            return 1
        else:
            return 0

    if maximizando:
        # Maximizando (jogador 'O')
        melhor_aval = float('-inf')
        for i in range(3):
            for j in range(3):
                if tabuleiro[i][j] == ' ':
                    tabuleiro[i][j] = 'O'
                    aval = minimax(tabuleiro, profundidade + 1, False)
                    tabuleiro[i][j] = ' '
                    melhor_aval = max(melhor_aval, aval)
        return melhor_aval
    else:
        # Minimizando (jogador 'X')
        pior_aval = float('inf')
        for i in range(3):
            for j in range(3):
                if tabuleiro[i][j] == ' ':
                    tabuleiro[i][j] = 'X'
                    aval = minimax(tabuleiro, profundidade + 1, True)
                    tabuleiro[i][j] = ' '
                    pior_aval = min(pior_aval, aval)
        return pior_aval

def encontrar_melhor_jogada(tabuleiro):
    # Função para encontrar a melhor jogada para o jogador 'O' (computador)
    melhor_aval = float('-inf')
    melhor_jogada = (-1, -1)

    for i in range(3):
        for j in range(3):
            if tabuleiro[i][j] == ' ':
                tabuleiro[i][j] = 'O'
                aval = minimax(tabuleiro, 0, False)
                tabuleiro[i][j] = ' '
                if aval > melhor_aval:
                    melhor_aval = aval
                    melhor_jogada = (i, j)

    return melhor_jogada

# Exemplo de uso:
tabuleiro = [[' ' for _ in range(3)] for _ in range(3)]

while True:
    imprimir_tabuleiro(tabuleiro)
    jogada_linha, jogada_coluna = map(int, input("Digite a linha e a coluna (0-2) separadas por espaço: ").split())
    if tabuleiro[jogada_linha][jogada_coluna] == ' ':
        tabuleiro[jogada_linha][jogada_coluna] = 'X'
    else:
        print("Essa posição já está ocupada. Tente novamente.")
        continue

    resultado = avaliar(tabuleiro)
    if resultado is not None:
        imprimir_tabuleiro(tabuleiro)
        if resultado == 'Velha':
            print("Velha!")
        else:
            print(f"Jogador {resultado} venceu!")
        break

    melhor_linha, melhor_coluna = encontrar_melhor_jogada(tabuleiro)
    tabuleiro[melhor_linha][melhor_coluna] = 'O'

    resultado = avaliar(tabuleiro)
    if resultado is not None:
        imprimir_tabuleiro(tabuleiro)
        if resultado == 'Velha':
            print("Velha!")
        else:
            print(f"Jogador {resultado} venceu!")
        break