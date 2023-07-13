const Flight = require("../models/flight");
const Ticket = require("../models/ticket");
module.exports = {
  new: newFlight,
  create,
  index,
  show
};
function newFlight(req, res) {
  // We'll want to be able to render an
  // errorMsg if the create action fails
  res.render("flights/new", { errorMsg: "" });
}

async function create(req, res) {
  try {
    await Flight.create(req.body);
    res.redirect("/flights");
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render("flights/new", { errorMsg: err.message });
  }
}
async function index(req, res) {
  try {
    const foundFlights = await Flight.find({});
    console.log(foundFlights);
    res.render("flights/index", { flights: foundFlights });
  } catch (err) {
    console.log(err);
  }
}
async function show(req, res) {
  //const flight = await Flight.findById(req.params.id);
  //res.render('flights/show', { title: 'Flight Detail', flight });

  const flight = await Flight.findById(req.params.id);
  console.log(req.params.id);
  const ticket = await Ticket.find({ flight: req.params.id });
  console.log('ticket.price');
  console.log(ticket);
  res.render("flights/show", {
    title: "Flight Detail",
    flight,
    title: "Ticket Detail",
    ticket,
  });
}

