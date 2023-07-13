const Flight = require("../models/flight");
const Ticket = require("../models/ticket");
module.exports = {
  new: newTicket,
  create
};

function newTicket(req, res) {
  // We'll want to be able to render an
  // errorMsg if the create action fails
  console.log(req.params.id);
  res.render("tickets/new", { flight_id: req.params.id });
}

async function create(req, res) {
  try {
    console.log(req.params.id);
    //console.log(req.body.flight);
    req.body.flight = req.params.id;
    //Flight.findById(req.params.id);
    console.log(req.body.flight);
    await Ticket.create(req.body);
    res.redirect("/flights/" + req.params.id);
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    //res.render("flights/" + req.flight_id + "/tickets/new", {
      //errorMsg: err.message,
    //});
  }
}
