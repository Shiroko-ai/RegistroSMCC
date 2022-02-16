'use strict'
const Document = require('../models/documents')

function createDocument (req, res) {
  const document = new Document()
  const params = req.params
  document.save((err, data) => {
    if (!err) {

    } else {
      throw err
    }
  })
}
