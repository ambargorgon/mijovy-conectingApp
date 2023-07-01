import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("activities.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS offer (id integer primary key not null, title TEXT NOT NULL, image TEXT NOT NULL, price INTEGER NOT NULL, description TEXT NOT NULL, activity INTEGER NOT NULL, target TEXT NOT NULL, location TEXT NOT NULL);",
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertOffer = (
  title,
  image,
  price,
  description,
  activity,
  target,
  location,
) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "INSERT INTO offer (title, image, price, description, activity, target, location) VALUES (?,?,?,?,?,?,?)",
        [
          title,
          image,
          price,
          description,
          activity,
          target,
          location,
        ],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
  return promise
};

export const fetchOffer = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM offer',
        [],
        (_,result) => resolve(result),
        (_,err) => reject(err)
      )
    })
  })
  return promise
}