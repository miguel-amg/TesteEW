import csv
import json

def csv_para_json(nome_arquivo_csv, nome_arquivo_json):
    try:
        with open(nome_arquivo_csv, 'r') as arquivo_csv:
            leitor_csv = csv.DictReader(arquivo_csv)
            dados = list(leitor_csv)

        with open(nome_arquivo_json, 'w') as arquivo_json:
            json.dump(dados, arquivo_json, indent=4)
        
        print(f"Conversão concluída. Os dados foram salvos em '{nome_arquivo_json}'.")

    except FileNotFoundError:
        print("Arquivo não encontrado:", nome_arquivo_csv)
    except Exception as e:
        print("Erro durante a conversão:", e)

# Nome do arquivo CSV de entrada
nome_arquivo_csv = "dados.csv"

# Nome do arquivo JSON de saída
nome_arquivo_json = "dados.json"

# Chama a função para converter CSV para JSON
csv_para_json(nome_arquivo_csv, nome_arquivo_json)