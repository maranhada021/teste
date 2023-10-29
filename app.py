from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Dados de usuários e classificação
usuarios = []
classificacao = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/quiz', methods=['GET', 'POST'])
def quiz():
    if request.method == 'POST':
        nome = request.form['nome']

        if nome in [user['nome'] for user in usuarios]:
            return "Você já fez o quiz!"
        else:
            usuarios.append({'nome': nome})
            return redirect(url_for('classificacao'))

    return render_template('quiz.html')

@app.route('/classificacao')
def classificacao():
    return render_template('classificacao.html', classificacao=classificacao)

if __name__ == '__main__':
    app.run(debug=True)
