const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const fs = require('fs');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("static"));

mongoose.connect("mongodb+srv://arjun_singh12:EasyPassword123@cluster0.mzs4r.mongodb.net/peakproductivityDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const pomodoroSchema = {
  name: String,
  category: String
};
const Item = mongoose.model("Item", pomodoroSchema);
const fI00 = [];
const fI01 = [];
const fI10 = [];
const fI11 = [];


const agendaSchema = {
  name: String,
  date: String,
  time_start: String
};
const AgendaItem = mongoose.model("AgendaItem", agendaSchema);
var agendaItems = []


const keepSchema = {
  name: String,
  time_start: String,
  time_end: String
};
const KeepItem = mongoose.model("KeepItem", keepSchema);
var keepItems = []


app.get("/", function(request, response) {
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  var day = today.toLocaleDateString("en-US", options);

  AgendaItem.find({}, function(err, fI) {
    if (!err) {
      while (agendaItems.length > 0) {
        agendaItems.pop();
      }

      agendaItems = fI;

    }
  });

  KeepItem.find({}, function(err, fI) {
    if (!err) {
      while (keepItems.length > 0) {
        keepItems.pop();
      }

      keepItems = fI;

    }
  });

  Item.find({}, function(err, fI) {
    if (!err) {
      while (fI00.length > 0) {
        fI00.pop();
      }

      while (fI01.length > 0) {
        fI01.pop();
      }

      while (fI10.length > 0) {
        fI10.pop();
      }

      while (fI11.length > 0) {
        fI11.pop();
      }

      for (var i = 0; i < fI.length; i++) {
        if (fI[i].category == '00') {
          fI00.push(fI[i]);
        }
        if (fI[i].category == '01') {
          fI01.push(fI[i]);
        }
        if (fI[i].category == '10') {
          fI10.push(fI[i]);
        }
        if (fI[i].category == '11') {
          fI11.push(fI[i]);
        }
      }
    }
  });
  setTimeout(function() {
    response.render("index", {
      kindOfDay: day,
      keepItems: keepItems,
      agendaItems: agendaItems,
      newListItems00: fI00,
      newListItems01: fI01,
      newListItems10: fI10,
      newListItems11: fI11
    });
  }, 500);
});

app.post("/", function(request, response) {
  var newItem = request.body.newItem;
  var newItemCategory = request.body.button;
  const item = new Item({
    name: newItem,
    category: newItemCategory
  })
  item.save();
  setTimeout(function() {}, 2000);
  response.redirect("/");
});

app.post("/addAgenda", function(request, response) {
  var newItem = request.body.newItem;
  var newDate = request.body.date;
  var newTime = request.body.time;
  const item = new AgendaItem({
    name: newItem,
    date: newDate,
    time_start: newTime
  })
  item.save();
  setTimeout(function() {}, 2000);
  response.redirect("/");
});

app.post("/addKeep", function(request, response) {
  var newItem = request.body.newItem;
  var newtimeS = request.body.timeS;
  var newTimeE = request.body.timeE;
  const item = new KeepItem({
    name: newItem,
    time_start: newtimeS,
    time_end: newTimeE
  })
  item.save();
  response.redirect("/");
});

app.post("/delete", function(request, response) {
  const deleteItemId = request.body.checkbox;
  Item.findByIdAndRemove(deleteItemId, function(err) {
    if (err) {
      console.log(err);
    }
  });
  AgendaItem.findByIdAndRemove(deleteItemId, function(err) {
    if (err) {
      console.log(err);
    }
  });
  KeepItem.findByIdAndRemove(deleteItemId, function(err) {
    if (err) {
      console.log(err);
    }
  });
  response.redirect("/");
});


app.post("/download", function(request, response) {
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  var day = today.toLocaleDateString("en-US", options);


  fs.unlink(__dirname + '/views/today.ejs', function(err) {
    if (err) throw err;
  });


  fs.appendFile(__dirname + '/views/today.ejs', "<h2>" + day + "</h2> <br>", function(err) {
    if (err) throw err;
  });

  for (var i = 0; i < keepItems.length; i++) {
    fs.appendFile(__dirname + '/views/today.ejs', "<h3>" + keepItems[i].name + " " + keepItems[i].time_start + " " + keepItems[i].time_end + "</h3> <br>", function(err) {
      if (err) throw err;
    });
  }

  fs.appendFile(__dirname + '/views/today.ejs', '<form action="/", method="GET"> <button type="submit">Go Home</button></form>', function(err) {
    if (err) throw err;
  });

  KeepItem.deleteMany({}, function(err) {
    if (err) {
      console.log("Error");
    }
  })
  setTimeout(function() {
    response.redirect("/download");
  }, 500);
});

app.get("/download", function(request, response) {
  response.render("today");
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server Up and Running")
});
