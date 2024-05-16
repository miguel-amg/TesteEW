import json

def insert_id_field(json_data):
    for idx, obj in enumerate(json_data):
        obj['id'] = idx + 1  # Gera um id único para cada objeto

def main():
    # Carrega o dataset JSON
    file_path = 'dataset.json'  # Insirir o caminho do json aqui
    with open(file_path, 'r') as file:
        data = json.load(file)

    # Insere o campo 'id' em cada objeto
    insert_id_field(data)

    # Salva o dataset modificado
    output_file_path = 'dataset_with_ids.json'
    with open(output_file_path, 'w') as output_file:
        json.dump(data, output_file, indent=4)

    print("Campo 'id' inserido com sucesso em todos os objetos.")

if __name__ == "__main__":
    main()