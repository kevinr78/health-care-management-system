class API_REQUEST {
  #url = "http://localhost:3000";
  #header_options = {
    "Content-Type": "application/json",
  };

  constructor(method, endpoint, body) {
    this.method = method;
    this.endpoint = endpoint;
    this.body = body;
  }
  get body() {
    return this._body;
  }

  set body(value) {
    if (value == "" || value == "null" || !value) {
      alert("Error while collecting Data");
      return;
    }
    this._body = JSON.stringify(value);
  }

  add_headers() {
    this.#header_options["Authorization"] = "Bearer <your_token>";
  }

  async send() {
    console.log(this.#url + this.endpoint);
    let request = await fetch(this.#url + this.endpoint, {
      method: this.method,
      headers: this.#header_options,
      body: this._body,
    });
    let response = await request.json();

    return response;
  }
}

export default API_REQUEST;
