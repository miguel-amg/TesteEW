import json
import os

def verifica_json_por_nome_arquivo(nome_arquivo):
    caminho_arquivo = os.path.join(os.path.dirname(__file__), nome_arquivo)
    campos_encontrados = set()  # Conjunto para armazenar os campos encontrados
    try:
        # Carrega o JSON do arquivo
        with open(caminho_arquivo, 'r') as arquivo:
            json_obj = json.load(arquivo)
        
        # Verifica se é um JSON array
        if isinstance(json_obj, list):
            print("O JSON é um array.")
            for obj in json_obj:
                if isinstance(obj, dict):
                    campos_encontrados.update(obj.keys())  # Adiciona os campos do objeto ao conjunto
        else:
            print("O JSON não é um array.")
            if isinstance(json_obj, dict):
                campos_encontrados.update(json_obj.keys())  # Adiciona os campos do objeto ao conjunto
    
        # Imprime os campos existentes
        print("Campos existentes encontrados:")
        for campo in campos_encontrados:
            print(campo)
    
    except FileNotFoundError:
        print("Arquivo não encontrado:", nome_arquivo)
    except json.JSONDecodeError as e:
        print("Erro ao decodificar JSON:", e)

# Nome do arquivo JSON
nome_arquivo = "dataset.json"

# Chama a função para verificar o JSON pelo nome do arquivo
verifica_json_por_nome_arquivo(nome_arquivo)