import { Meteor } from 'meteor/meteor';
import Knights from '/imports/api/knights';


function insertKnight(name, quest, favoriteColor, unladenSwallowVelocity) {
  Knights.insert({ name, quest, favoriteColor, unladenSwallowVelocity });
}

Meteor.startup(() => {
  // If the Knights collection is empty, add some data.
  if (Knights.find().count() === 0) {
    insertKnight(
        "Lancelot",
        "To seek the Holy Grail",
        "blue"
    );

    insertKnight(
        "Arthur",
        "To seek the Holy Grail",
        "green"
    );

    insertKnight(
        "Galahad",
        "To seek the Holy Grail",
        0
    );
  }

  Meteor.methods({
    removeAllKnights: function () {
      return Knights.remove({});
    }
  });
})
