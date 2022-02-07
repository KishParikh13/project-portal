

export class Repository {

  getData () {
    let items = []

    fetch("https://api.sampleapis.com/coffee/hot")
    .then(res => res.json())
    .then(
      (result) => {
        items = result
        // console.log(items)
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log(error)
      }
    )
    
    return items
  }

  currentUser() {}
  loggedIn() {}
  logout() {}

  async login(name, password) {}

  async register(firstname, lastname, username, pass) {}
  
}
