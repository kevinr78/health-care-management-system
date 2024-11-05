class API_REQUEST {
  #url = "http://localhost:3000";
  #header_options = {
    "Content-Type": "application/json",
  };

  constructor(method, endpoint, body = null) {
    this.method = method;
    this.endpoint = endpoint;
    this.body = body || null;
  }
  get body() {
    return this._body;
  }

  set body(value) {
    if (this.method === "POST" && (value == "" || value == "null" || !value)) {
      alert("Error while collecting Data");
      return;
    }
    this._body = JSON.stringify(value);
  }

  add_headers() {
    this.#header_options["Authorization"] = `Bearer ${localStorage.getItem(
      "token"
    )}`;
  }

  async send() {
    const options = { method: this.method, headers: this.#header_options };
    if (this.method === "POST") {
      options.body = this._body;
    }
    let request = await fetch(this.#url + this.endpoint, options);
    let response = await request.json();

    return response;
  }
}

export default API_REQUEST;
