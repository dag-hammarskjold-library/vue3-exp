from flask import Flask, render_template

app = Flask(__name__, static_folder="client/dist/static", template_folder="client/dist", static_url_path="/static")

@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def index(path):
    return render_template("index.html")