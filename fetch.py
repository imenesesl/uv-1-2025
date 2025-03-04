def read_notes():
    try:
        with open('NOTES.md', 'r', encoding='utf-8') as file:
            content = file.read()
            print(content)
    except FileNotFoundError:
        print("Error: NOTES.md file not found!")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    read_notes()