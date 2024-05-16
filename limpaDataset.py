import json

# Função para converter os valores do campo "precoContratual" para string
def converter_precos_para_string(json_data):
    for contrato in json_data:
        preco = contrato.get('precoContratual')
        if preco is not None:
            if not isinstance(preco, str):
                contrato['precoContratual'] = str(preco)

# Leitura do JSON
with open('dataset_com_id.json', 'r') as file:
    data = json.load(file)

# Chamada da função para converter os preços para string
converter_precos_para_string(data)

# Salvando os dados atualizados em um novo arquivo JSON
with open('resultado.json', 'w') as file:
    json.dump(data, file, indent=4)

print("Dados atualizados foram salvos em 'resutlado.json'")