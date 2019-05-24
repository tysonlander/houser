allHouses = []

module.exports = {
  getAllHouses: (req, res) => {
    const db = req.app.get('db')
    db.get_houses().then((houses) => {
      res.status(200).send(houses)
    })
  },
  addHouse: (req, res) => {
    const {name, address, city, state, zipcode} = req.body
    const db = req.app.get('db')
    db.add_house({name, address, city, state, zipcode})
      .then(dbResponse => {
        res.status(200).send(dbResponse);
      })
      .catch(error => {
        if(error) throw error;
      })
  }
}

