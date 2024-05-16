import json
from decimal import Decimal

def converter_preco_contratual(contratos):
    # Itera sobre cada contrato na lista
    for contrato in contratos:
        # Verifica se o valor associado a "precoContratual" é uma string
        if isinstance(contrato["precoContratual"], str):
            # Se for uma string, substitui a vírgula por um ponto e converte para Decimal
            contrato["precoContratual"] = Decimal(contrato["precoContratual"].replace(",", "."))

    # Retorna a lista de contratos modificada
    return contratos

# Abre o arquivo JSON e lê o conteúdo
with open("dataset.json", "r") as file:
    data = file.read()

# Converte o conteúdo do arquivo para uma lista de dicionários Python
contratos = json.loads(data)

# Chama a função para converter o campo "precoContratual" para cada contrato na lista
contratos_convertidos = converter_preco_contratual(contratos)

# Escreve o resultado em um novo arquivo JSON
with open("resultado.json", "w") as outfile:
    json.dump(contratos_convertidos, outfile, indent=4, default=str)